# Armonie di Erica Favaro

Sito vetrina per **Armonie di Erica Favaro**, salone di parrucchieria a Piscina (TO). Single page application in React con sezioni per pacchetti/trattamenti, galleria fotografica e prenotazione via WhatsApp, fortemente ottimizzata per SEO (dati strutturati, prerendering, IndexNow).

- **Sito live**: https://www.armonie-di-erica-favaro.it/
- **Indirizzo**: Via Umberto I 7, Piscina (TO)
- **Prenotazioni**: via WhatsApp ([wa.me/3925372152](https://wa.me/3925372152))

## Stack tecnico

- **React 19** + **React Router 7**
- **Vite 7** come build tool e dev server
- **Tailwind CSS 4** + **Bootstrap 5** (+ Bootstrap Icons) per lo styling
- **AOS** (Animate On Scroll) per le animazioni
- **Puppeteer** per il prerendering statico della home in fase di build (SEO/SSR-like)
- **Sharp** per l'ottimizzazione delle immagini
- **ESLint 9** per il linting

## Struttura del progetto

```
src/
├── App.jsx              # Router principale (attualmente route singola "/")
├── main.jsx             # Entry point React
├── api/
│   └── api.js           # Fetch di prodotti/immagini da public/db/*.json
├── components/
│   ├── Header.jsx        # Hero con video di sfondo
│   ├── Navbar.jsx / Footer.jsx
│   ├── Introduction.jsx  # Sezione "chi siamo"
│   ├── Packages.jsx      # Pacchetti/trattamenti (sposa, schiariture, invitata, cheratina)
│   ├── PhotoGallery.jsx  # Galleria acconciature (lazy loading, skeleton)
│   ├── Prenotation.jsx   # Call to action prenotazione via WhatsApp
│   ├── Team.jsx / ProductCarousel.jsx  # Non attualmente in uso (commentati in Home.jsx)
│   ├── LazyImage.jsx     # Immagine responsive con fallback avif/webp/jpg
│   ├── Skeleton.jsx      # Placeholder di caricamento
│   └── ScrollToTop.jsx
└── pages/
    ├── Home.jsx           # Unica pagina attiva
    ├── Catalog.jsx        # Predisposta ma non instradata
    └── ProductDetail.jsx  # Predisposta ma non instradata

public/
├── db/                  # products.json, images.json (dati statici per la galleria/catalogo)
├── img/                 # Immagini (jpg/webp/avif) e video
└── sitemap.xml, robots.txt, manifest, favicon, file di verifica IndexNow

scripts/
├── prerender.js          # Serve dist/, apre la home in Puppeteer e salva l'HTML renderizzato in dist/index.html
└── indexnow.js           # Notifica l'URL del sito ai motori di ricerca via protocollo IndexNow
```

## Script disponibili

| Comando | Descrizione |
|---|---|
| `npm run dev` | Avvia il server di sviluppo Vite |
| `npm run build` | Build di produzione + installazione Chrome per Puppeteer + prerendering della home |
| `npm run build:vite-only` | Solo build Vite, senza prerendering |
| `npm run preview` | Anteprima locale della build di produzione |
| `npm run lint` | Esegue ESLint su tutto il progetto |
| `npm run indexnow` | Invia una ping IndexNow per l'URL del sito |

## Sviluppo locale

```bash
npm install
npm run dev
```

## Deploy

Il progetto è configurato per **Netlify** (`netlify.toml`):
- comando di build: `npm run build` (build Vite + prerendering)
- directory pubblicata: `dist`
- redirect SPA (`/* -> /index.html`)
- header di sicurezza (CSP, HSTS, X-Frame-Options, ecc.)

## SEO

- Dati strutturati JSON-LD (`WebSite`, `HairSalon`) in [index.html](index.html)
- Meta tag Open Graph / Twitter Card
- `sitemap.xml` e `robots.txt` in `public/`
- Prerendering della home in fase di build per servire HTML già renderizzato ai crawler
- Notifica IndexNow tramite `scripts/indexnow.js`
