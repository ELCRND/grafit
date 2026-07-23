import { Header } from "./js/Header";
import { photoSwipe } from "./js/PhotoSwipe";
import {
  lettersSlider,
  paintingsSlider,
  partnersSlider,
  reviewsSlider,
} from "./js/Sliders";
import "./scss/main.scss";

window.addEventListener("load", () => {
  document.querySelectorAll("details").forEach((d) =>
    d.addEventListener("toggle", (e) => {
      const content = e.target.nextElementSibling;

      if (!e.target.open) {
        content.setAttribute("inert", "");
        content.querySelectorAll("details").forEach((dd) => (dd.open = false));
        return;
      }

      content.removeAttribute("inert");
    }),
  );

  new Header();

  paintingsSlider();
  partnersSlider();
  lettersSlider();
  photoSwipe();
  reviewsSlider();
});
