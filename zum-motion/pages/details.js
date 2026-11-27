import Zum, { ZumActivity } from "zum-framework";

import UI from "../ui/zum-motion-ui.js";
import styles from "../styles/zum-motion-styles.js";

export default function details() {
  return Zum.create("div", {
    html: UI.details,
    css: styles,

    props: {
      title: "Express motion through tokens."
    },

    onPageEnter({ from, to, direction }) {
      console.log("Details entered:", { from, to, direction });
      Zum.resetScrollAnimations(this);
      Zum.observeScrollAnimations(this);
    },

    onPageLeave({ from, to, direction, reason }) {
      console.log("Details leaving:", { from, to, direction, reason });
    },

    onPageExit({ from, to, direction, reason }) {
      console.log("Details exited:", { from, to, direction, reason });
    },

    onMount() {
      Zum.observeScrollAnimations(this);

      const backButton = this.querySelector("#go-back");
      if (backButton) {
        backButton.addEventListener("click", () => {
          ZumActivity.navigateTo("/", {
            direction: "back",
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
