export class Header {
  constructor() {
    this.MENU = document.querySelector(".header__menu");
    this.MENU__BTN = document.querySelector(".header__menu-btn");

    this.init();
  }

  init() {
    this.on();
  }

  on() {
    this.MENU__BTN.addEventListener("click", () => {
      this.MENU.classList.toggle("header__menu--open");
      this.MENU__BTN.classList.toggle("header__menu-btn--open");
    });
  }
}
