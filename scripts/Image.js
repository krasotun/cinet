import {
  openPopupPic
} from "./index.js";

export class Image {
  constructor(number, alt, link, imageSelector) {
    this.number = number;
    this.alt = alt;
    this.link = link;
    this.imageSelector = imageSelector;
  }
  _setEventListeners() { // Навешиваем события
    this._element.addEventListener('click', (evt) => {
      this._openNewPopup(evt);
    });
  }
  _openNewPopup() {
    openPopupPic(this.alt, this.link, this.number);
  }

  _getTemplate() { // Берем шаблон
    const imageElement = document
      .querySelector(this.imageSelector)
      .content
      .querySelector('.gallery__image')
      .cloneNode(true);
    return imageElement

  }
  generateImage() { // Создаем карточку
    this._element = this._getTemplate();

    this._element.src = this.link;
    this._element.alt = this.alt;
    this._element.id = this.number;

    this._setEventListeners();
    return this._element
  }
}
