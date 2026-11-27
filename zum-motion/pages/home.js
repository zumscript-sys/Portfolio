import Zum, { ZumActivity } from "zum-framework";

import UI from "../ui/zum-motion-ui.js";
import styles from "../styles/zum-motion-styles.js";

export default function home() {
  return Zum.create("div", {
    html: UI.home,
    css: styles,

    props: {
      title: "Motion belongs in your markup."
    },

    onPageEnter({ from, to, direction }) {
      console.log("Home entered:", { from, to, direction });
      Zum.resetScrollAnimations(this);
      Zum.observeScrollAnimations(this);
    },

    onPageLeave({ from, to, direction, reason }) {
      console.log("Home leaving:", { from, to, direction, reason });
    },

    onPageExit({ from, to, direction, reason }) {
      console.log("Home exited:", { from, to, direction, reason });
    },

    onMount() {
      Zum.observeScrollAnimations(this);

      const detailsButton = this.querySelector("#go-details");
      if (detailsButton) {
        detailsButton.addEventListener("click", () => {
          ZumActivity.navigateTo("/details", {
            direction: "forward",
            transition: "fadeIn 400"
          });
        });
      }

      this.querySelectorAll('a[href="/"]').forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          ZumActivity.navigateTo("/", {
            direction: "back",
            transition: "fadeIn 400"
          });
        });
      });
    }
  });
}
