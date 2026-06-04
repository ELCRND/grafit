import { Header } from "./js/Header";
import "./scss/main.scss";

window.addEventListener("load", () => {
  document
    .querySelectorAll(".menu-level-1__details, .menu-level-2__details")
    .forEach((d) =>
      d.addEventListener("toggle", (e) => {
        if (!e.target.open) {
          e.target.nextElementSibling
            .querySelectorAll("details")
            .forEach((dd) => (dd.open = false));
        }
      }),
    );

  new Header();
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  header.classList.toggle("scrolled", window.scrollY > 100);
});
