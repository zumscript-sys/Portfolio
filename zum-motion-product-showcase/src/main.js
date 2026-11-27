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
