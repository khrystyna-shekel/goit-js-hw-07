import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsList = document.querySelector('.gallery');

const galleryItemsEl = galleryItems.map(galleryItemInfo => {
    const { preview, original, description } = galleryItemInfo;
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    alt="${description}"
    />
    </a>
    </li> `;
});


galleryItemsList.insertAdjacentHTML("beforeend", galleryItemsEl.join(''));

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

