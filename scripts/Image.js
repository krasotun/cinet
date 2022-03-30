export class Image {
  constructor(number, alt, link, imageSelector) {
    this.number = number;
    this.alt = alt;
    this.link = link;
    this.imageSelector = imageSelector;
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
    return this._element
  }
}
