# Zum Motion

An interactive, scroll-driven showcase of Zum Motion built with **Zum Framework** and **ZumActivity**. The project demonstrates animation tokens directly inside HTML template strings rather than presenting the system as a static documentation page.

## What the project demonstrates

- Inline motion tokens: `{fadeIn}`, `{slideIn}`, `{slide left}`, `{zoom}`, and `{blur}`.
- The `once` modifier: `{fadeIn once}`.
- Scroll-triggered animation observation through `Zum.observeScrollAnimations()`.
- Animation reset and re-observation through `Zum.resetScrollAnimations()`.
- Multi-page navigation with `ZumActivity.navigateTo()`.
- Page lifecycle callbacks: `onPageEnter`, `onPageLeave`, and `onPageExit`.
- Component-scoped styling through the `css` option in `Zum.create()`.

> The token examples intentionally follow the syntax supplied for this project. Confirm each token and modifier against the installed Zum Framework version when validating runtime behaviour.

## Project structure

```text
zum-motion/
├── README.md
├── package.json
├── package-lock.json
├── index.html
├── vite.config.js
├── zum-pages.manifest.js
├── public/
│   └── assets/
├── src/
│   └── main.js
├── pages/
│   ├── home.js
│   └── details.js
├── ui/
│   └── zum-motion-ui.js
└── styles/
    └── zum-motion-styles.js
```

`node_modules/` is generated locally by npm and is not included in the project archive.

## Requirements

- Node.js compatible with the installed Vite version.
- npm.
- `zum-framework` (declared in `package.json`).

## Install and run

From the project root:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

To create and preview a production build:

```bash
npm run build
npm run preview
```

## How the application starts

`index.html` provides the Activity mount point:

```html
<div id="zum-activity-root"></div>
```

It loads `src/main.js`, which configures ZumActivity:

```js
import Zum from "zum-framework";

Zum.Activity.configure({
  autoRegisterPages: true,
  autoDiscoverPages: true,
  lazy: true,

  transitionConfig: {
    enabled: true,
    type: "fade",
    duration: 420,
    fadeDuration: 260,
    easing: "ease-in-out"
  },

  manifest: () => import("../zum-pages.manifest.js")
});

Zum.Activity.setCloseButtonEnabled(true);
```

Activity owns page registration, route navigation, and page transitions. The project does not add a second router and does not render into `document.body`.

## Page and UI separation

- `pages/home.js` creates the overview page with `Zum.create()`.
- `pages/details.js` creates the token reference page with `Zum.create()`.
- `ui/zum-motion-ui.js` contains the two HTML template strings: `UI.home` and `UI.details`.
- `styles/zum-motion-styles.js` contains the styles passed to each Zum component.

This keeps page lifecycle and navigation code separate from the markup and visual styling.

## Scroll animation lifecycle

Both page factories initialize scroll observation when the page mounts and when it enters:

```js
onPageEnter() {
  Zum.resetScrollAnimations(this);
  Zum.observeScrollAnimations(this);
},

onMount() {
  Zum.observeScrollAnimations(this);
}
```

The reset-before-observe sequence allows the page's animation state to be prepared again when navigating back to a page. The observer is also initialized on mount so the initial render can be observed.

## Navigation

The overview button navigates to `/details`:

```js
ZumActivity.navigateTo("/details", {
  direction: "forward",
  transition: "fadeIn 400"
});
```

The details page's back button navigates to `/`:

```js
ZumActivity.navigateTo("/", {
  direction: "back",
  transition: "fadeIn 400"
});
```

The header's home/overview link is wired to the same Activity navigation API. External documentation and source links remain ordinary external links.

## Page manifest

`zum-pages.manifest.js` is included as a small, readable starter manifest for the two page factories. Its exact shape must match the manifest contract expected by the installed `zum-framework` / `zum-pages` version.

If your project uses the `zum-pages` generator, generate the manifest using the CLI version paired with your framework and replace the starter file with that generated output. The available scripts are:

```bash
npm run pages:generate
npm run pages:check
```

Do not assume the starter manifest is equivalent to CLI-generated output without running the check against your installed toolchain.

## Adding another page

1. Create a page factory in `pages/`, following the `Zum.create()` pattern used by `home.js` and `details.js`.
2. Add the route using the manifest format required by your installed Zum tooling.
3. Add navigation with `ZumActivity.navigateTo()`.
4. Call `Zum.resetScrollAnimations(this)` and `Zum.observeScrollAnimations(this)` in the appropriate page lifecycle callbacks.

## Notes

- The docs and source links are external links; replace the source URL if you want to point to a specific repository.
- The project archive excludes `node_modules/` so it stays portable. Run `npm install` after extraction.
- This archive has been assembled from the supplied example. Runtime compatibility, manifest validation, and browser animation behaviour should be verified locally against the exact installed Zum Framework release.
