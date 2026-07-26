export class Header {
  constructor() {
    this.HEADER = document.querySelector("header");
    this.MENU = this.HEADER.querySelector(".header__menu");
    this.MENU__BTN = this.HEADER.querySelector(".header__menu-btn");
    this.DETAILS = null;

    this.init();
  }

  get isScrolled() {
    return window.scrollY > 100;
  }

  init() {
    this._on();
  }

  _on() {
    if (this.isScrolled) {
      this.HEADER.classList.add("scrolled");
    }

    window.addEventListener("scroll", () => this._handleScroll());

    this.MENU__BTN.addEventListener("click", () => this._handleClick());

    this.DETAILS = this.HEADER.querySelectorAll("details").forEach((dtl) =>
      dtl.addEventListener("toggle", (e) => this._handleChildrensClose(e)),
    );
  }

  _handleScroll() {
    this.HEADER.classList.toggle("scrolled", this.isScrolled);
  }

  _handleClick() {
    this.MENU.classList.toggle("header__menu--open");
    this.MENU__BTN.classList.toggle("header__menu-btn--open");
  }

  _handleChildrensClose(e) {
    const details = e.target;
    const content = details.nextElementSibling;

    if (details.open) {
      content.removeAttribute("inert");
    } else {
      content.setAttribute("inert", "");
      content.querySelectorAll("details").forEach((dd) => (dd.open = false));
    }
  }
}
