import {
  initialImages
} from './data.js';
import {
  Image
} from './Image.js';

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
