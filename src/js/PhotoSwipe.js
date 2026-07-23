import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export function photoSwipe() {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "#letters",
    children: "a",
    pswpModule: () => import("photoswipe"),
  });
  lightbox.init();
}
