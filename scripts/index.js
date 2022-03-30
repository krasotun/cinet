import {
  initialImages
} from './data.js';
import {
  Image
} from './Image.js';
// Images
const galleryForAddingImages = document.querySelector('.gallery__center');

function createImage(number, alt, link, imageSelector) { // Создаем картинку из конструктора
  const image = new Image(number, alt, link, imageSelector);
  const newImageFromTemplate = image.generateImage();
  return newImageFromTemplate
}

function addImagesToGallery() { // Вставляем картики в галерею
  initialImages.forEach(item => {
    galleryForAddingImages.append(createImage(item.number, item.alt, item.link, "#image-template"));
  });
}
addImagesToGallery();

//Popup
// Предусмотрено, что в будущем на сайте  будут другие попапы
const popupPicCloseButton = document.querySelector('.popup-pic__close');
const popupPic = document.querySelector('.popup-pic');
const popupPicImage = document.querySelector('.popup-pic__image');
const popupPicText = document.querySelector('.popup-pic__text');

function closePopup(popupName) { // Toggle не испльзуем тк можно добавить открытие/закрытие по esc
  popupName.classList.remove('popup_opened');
}

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}

export function openPopupPic(alt, source, number) {
  popupPicImage.alt = alt;
  popupPicImage.src = source;
  popupPicText.textContent = number;
  openPopup(popupPic);
}

popupPicCloseButton.addEventListener('click', () => closePopup(popupPic));
