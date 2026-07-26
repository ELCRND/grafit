export class ConsultationForm {
  constructor(sectionSelector = ".consultation") {
    this.section = document.querySelector(sectionSelector);
    if (!this.section) return;

    this.FORM = this.section.querySelector(".consultation__form");
    this.POPUP = this.section.querySelector(".consultation__popup");
    this.CLOSE_BTN = this.section.querySelector(".consultation__popup-close");

    this._onSubmit = this._onSubmit.bind(this);
    this._onClose = this._onClose.bind(this);
    this._onKeydown = this._onKeydown.bind(this);
    this._onOverlayClick = this._onOverlayClick.bind(this);

    this.init();
  }

  init() {
    if (!this.FORM || !this.POPUP) return;

    this.on();
  }

  on() {
    this.FORM.addEventListener("submit", this._onSubmit);
    this.CLOSE_BTN?.addEventListener("click", this._onClose);
    this.POPUP.addEventListener("click", this._onOverlayClick);
    document.addEventListener("keydown", this._onKeydown);
  }

  _onSubmit(e) {
    e.preventDefault();

    this.openPopup();
    this.FORM.reset();
  }

  openPopup() {
    this.POPUP.classList.add("is-active");
    document.body.classList.add("is-locked");
  }

  closePopup() {
    this.POPUP.classList.remove("is-active");
    document.body.classList.remove("is-locked");
  }

  _onClose() {
    this.closePopup();
  }

  _onOverlayClick(e) {
    if (e.target === this.POPUP) {
      this.closePopup();
    }
  }

  _onKeydown(e) {
    if (e.key === "Escape" && this.POPUP.classList.contains("is-active")) {
      this.closePopup();
    }
  }

  off() {
    this.FORM?.removeEventListener("submit", this._onSubmit);
    this.CLOSE_BTN?.removeEventListener("click", this._onClose);
    this.POPUP?.removeEventListener("click", this._onOverlayClick);
    document.removeEventListener("keydown", this._onKeydown);
  }
}
