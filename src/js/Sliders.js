import Swiper from "swiper";
import "swiper/css";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export function paintingsSlider() {
  const slider = new Swiper(".paintings__swiper", {
    modules: [Navigation],
    slidesPerView: "auto",
    speed: 400,
    // spaceBetween: 20,
    // slidesOffsetAfter: 14,

    navigation: {
      nextEl: ".paintings__swiper-next",
      prevEl: ".paintings__swiper-prev",
    },
  });
}

export function partnersSlider() {
  const swiper = new Swiper(".partners__swiper", {
    modules: [Autoplay],
    loop: true,
    slidesPerView: "auto",
    speed: 4000,

    allowTouchMove: false,

    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
}

export function lettersSlider() {
  const slider = new Swiper(".letters__swiper", {
    modules: [Navigation],
    slidesPerView: "auto",
    speed: 400,
    centeredSlides: true,
    slidesOffsetBefore: 20,
    initialSlide: 1,

    navigation: {
      nextEl: ".letters__swiper-next",
      prevEl: ".letters__swiper-prev",
    },

    breakpoints: {
      768: {
        centeredSlides: false,
        slidesOffsetBefore: 0,
        initialSlide: 0,
      },
    },
  });
}

export function reviewsSlider() {
  const slider = new Swiper(".reviews__swiper", {
    modules: [Navigation, EffectFade],
    // slidesPerView: 1,
    speed: 800,
    effect: "fade",

    navigation: {
      nextEl: ".reviews__swiper-next",
      prevEl: ".reviews__swiper-prev",
    },

    // cubeEffect: {
    //   slideShadows: false,
    //   shadow: false,
    // },
  });
}
