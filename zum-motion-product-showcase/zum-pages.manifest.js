/* Zum Activity manifest: this showcase intentionally exposes one public route. */
export const pages = {
  "/": () => import("./pages/home.js")
};

export default pages;
