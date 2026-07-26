import { ConsultationForm } from "./js/ConsultationForm";
import { Header } from "./js/Header";
import { photoSwipe } from "./js/PhotoSwipe";
import {
  lettersSlider,
  paintingsSlider,
  partnersSlider,
  reviewsSlider,
} from "./js/Sliders";
// import "./scss/main.scss";

window.addEventListener("load", async () => {
  try {
    const { default: cssUrl } = await import("./scss/main.scss?url");

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    document.head.appendChild(link);

    console.log("Поздний SCSS загружен:", cssUrl);
  } catch (err) {
    console.error("Ошибка загрузки позднего CSS:", err);
  }

  new Header();

  paintingsSlider();
  partnersSlider();
  lettersSlider();
  photoSwipe();
  reviewsSlider();

  new ConsultationForm();
});
