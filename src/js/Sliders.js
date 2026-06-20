import Swiper from "swiper";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export function paintingsSlider() {
  const slider = new Swiper(".paintings__swiper", {
    modules: [Navigation],
    slidesPerView: "auto",
    speed: 1200,
    // spaceBetween: 20,
    // slidesOffsetAfter: 14,

    navigation: {
      nextEl: ".paintings__swiper-next",
      prevEl: ".paintings__swiper-prev",
    },
  });
}
