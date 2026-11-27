import Zum from "zum-framework";
import UI from "../ui/zum-motion-ui.js";
import styles from "../styles/zum-motion-styles.js";

export default function home() {
  return Zum.create("div", {
    html: UI.home,
    css: styles,
    props: { title: "FORM/01 — Objects for everyday living." },

    onPageEnter({ from, to, direction }) {
      console.log("Showcase entered:", { from, to, direction });
      Zum.resetScrollAnimations(this);
      Zum.observeScrollAnimations(this);
    },

    onPageLeave({ from, to, direction, reason }) {
      console.log("Showcase leaving:", { from, to, direction, reason });
    },

    onPageExit({ from, to, direction, reason }) {
      console.log("Showcase exited:", { from, to, direction, reason });
    },

    onMount() {
      Zum.observeScrollAnimations(this);
    }
  });
}
