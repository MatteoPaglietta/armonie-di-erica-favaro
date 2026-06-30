import { fileURLToPath } from 'node:url';
import { dirname, join, extname } from 'node:path';
import { createServer } from 'node:http';
import { readFile, writeFile, access, stat } from 'node:fs/promises';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const port = 4321;

const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.mp4': 'video/mp4',
};

async function serveDist() {
  const server = createServer(async (req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = join(distDir, urlPath);
    try {
      await access(filePath);
      if ((await stat(filePath)).isDirectory()) filePath = join(filePath, 'index.html');
    } catch {
      filePath = join(distDir, 'index.html'); // fallback SPA, come da netlify.toml
    }
    try {
      const data = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': MIME[extname(filePath)] || 'application/octet-stream' });
      res.end(data);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  await new Promise((resolve) => server.listen(port, resolve));
  return server;
}

async function prerender() {
  const server = await serveDist();
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(`http://localhost:${port}/`, { waitUntil: 'networkidle0', timeout: 30000 });

    // Aspetta che la galleria abbia caricato le immagini reali (non lo skeleton)
    await page.waitForSelector('.photo-grid img', { timeout: 15000 }).catch(() => {});

    // Forza la classe "visibile" delle animazioni AOS: lo snapshot statico deve
    // mostrare il contenuto reale, non lo stato "nascosto prima dello scroll"
    await page.evaluate(() => {
      document.querySelectorAll('[data-aos]').forEach((el) => el.classList.add('aos-animate'));
    });

    const html = await page.evaluate(() => '<!doctype html>\n' + document.documentElement.outerHTML);
    await writeFile(join(distDir, 'index.html'), html);
    console.log('[prerender] dist/index.html aggiornato con il contenuto renderizzato.');
  } finally {
    await browser.close();
    server.close();
  }
}

prerender().catch((err) => {
  console.error('[prerender] fallito:', err);
  process.exit(1);
});
