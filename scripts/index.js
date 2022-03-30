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
  removePopupEventListener();
}

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  addPopupEventListener();
}

export function openPopupPic(alt, source, number) {
  popupPicImage.alt = alt;
  popupPicImage.src = source;
  popupPicText.textContent = number;
  openPopup(popupPic);
}

// Закрытие попапа по клику на крест
popupPicCloseButton.addEventListener('click', () => closePopup(popupPic));

// Установка слушателя на popup (для закрытия по esc)
function addPopupEventListener() {
  document.addEventListener('keydown', closePopupByEsc);
}
// Удаление слушателя с popup (для закрытия по esc)
function removePopupEventListener() {
  document.removeEventListener('keydown', closePopupByEsc);
}
// Закрытие попапа по ESC
const escCode = 'Escape';

function closePopupByEsc(evt) {
  if (evt.key === escCode) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}
// Закрытие попапа по клику по оверлею
document.addEventListener('click', (evt => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  }
}));
