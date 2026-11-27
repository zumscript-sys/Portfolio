/*
 * Zum Activity page manifest.
 *
 * Keep this file at the project root because src/main.js imports it with:
 * import("../zum-pages.manifest.js")
 *
 * The page factories are lazy imports. Activity owns route registration and
 * navigation; this project does not implement a second router.
 *
 * If you regenerate this file with the zum-pages CLI, keep the output
 * generated for the same `pages/` directory and retain the root filename.
 */

export const pages = {
  "/": () => import("./pages/home.js"),
  "/details": () => import("./pages/details.js")
};

export default pages;
