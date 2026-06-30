const HOST = 'www.armonie-di-erica-favaro.it';
const KEY = 'cd77dacf8653d5a9c5fd7942dd2b095c';

const urlList = [`https://${HOST}/`];

async function pingIndexNow() {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  };

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  });

  console.log(`[indexnow] status ${res.status} per ${urlList.length} url`);
  if (!res.ok) {
    console.error(await res.text());
    process.exit(1);
  }
}

pingIndexNow();
