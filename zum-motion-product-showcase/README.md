# zum-motion-product-showcase

A single-route product showcase built with **Zum Framework** and **ZumActivity**. It demonstrates declarative animation tokens placed directly in HTML template markup, with scroll observation and page lifecycle integration.

## Showcase scope

- Exactly one public route: `/`.
- One product-focused landing page with four visual product concepts.
- No secondary product-detail route and no navigation links.
- In-page editorial sections remain part of the same page.
- Responsive layout for desktop, tablet and mobile.
- CSS-built product compositions; no external product photography required.
- Declarative animation tokens embedded directly in the HTML templates.

## Declarative animation syntax

Tokens are written directly in the HTML markup: 

```html
<h1>{slideIn} Thoughtful form.</h1>
<p>{slide left} A product description.</p>
<div>{fadeIn} Collection details</div>
<h2>{blur} Everyday function.</h2>
```

This project uses `{fadeIn}`, `{slideIn}`, `{slide left}`, `{zoom}`, and `{blur}`. Confirm token availability and modifier behaviour against the exact Zum Framework version installed in your environment.

## Structure

```text
zum-motion-product-showcase/
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── zum-pages.manifest.js
├── public/assets/
├── src/main.js
├── pages/home.js
├── ui/zum-motion-ui.js
└── styles/zum-motion-styles.js
```

`node_modules/` is generated after installation and is not included in the archive.

## Run locally

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Activity configuration

`index.html` contains the `#zum-activity-root` mount element. The app starts from `src/main.js`, which retains the supplied ZumActivity configuration. The manifest registers only `/`. This project does not create a second router and does not render into `document.body`.

## Main files

- `zum-pages.manifest.js`: the single public route `/`.
- `pages/home.js`: creates the showcase with `Zum.create()` and initializes scroll animation observation.
- `ui/zum-motion-ui.js`: the complete single-page product showcase markup.
- `styles/zum-motion-styles.js`: responsive layout, typography, product visuals and footer.

## Scroll lifecycle

```js
onPageEnter() {
  Zum.resetScrollAnimations(this);
  Zum.observeScrollAnimations(this);
},

onMount() {
  Zum.observeScrollAnimations(this);
}
```

## Verification note

The archive is checked for ZIP integrity and the source is checked for route/link count. Browser runtime, token animation behaviour, Vite build and manifest compatibility have not been executed against your local installed framework. Validate these against your installed Zum Framework version after extracting the project and installing dependencies.
