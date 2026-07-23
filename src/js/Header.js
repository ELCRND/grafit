export class Header {
  constructor() {
    this.HEADER = document.querySelector("header");
    this.MENU = this.HEADER.querySelector(".header__menu");
    this.MENU__BTN = this.HEADER.querySelector(".header__menu-btn");

    this.init();
  }

  get isScrolled() {
    return window.scrollY > 100;
  }

  init() {
    this.on();
  }

  on() {
    if (this.isScrolled) {
      this.HEADER.classList.add("scrolled");
    }

    window.addEventListener("scroll", () => {
      this.HEADER.classList.toggle("scrolled", this.isScrolled);
    });

    this.MENU__BTN.addEventListener("click", () => {
      this.MENU.classList.toggle("header__menu--open");
      this.MENU__BTN.classList.toggle("header__menu-btn--open");
    });
  }
}
