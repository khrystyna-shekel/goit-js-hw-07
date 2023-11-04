import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryItemsList = document.querySelector('.gallery');
let instance = null;

const galleryItemsEl = galleryItems.map(galleryItemInfo => {
    const { preview, original, description } = galleryItemInfo;
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image lazyload"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li> `;
});

galleryItemsList.insertAdjacentHTML("beforeend", galleryItemsEl.join(''));

const onGallaryItemsElClick = (event) => {
    event.preventDefault();

    if (event.target.tagName !== 'IMG') {
        return;
    }

    const originalSrc = event.target.dataset.source;
    const basicLightboxOptions = {
        onClose() {
        document.removeEventListener('keydown', onGallaryItemsElClick);
    }};
        

    instance = basicLightbox.create(`
    <img src="${originalSrc}" width="800" height="600">`, basicLightboxOptions)
    instance.show()

    document.addEventListener('keydown', onDocumenyKeyPress);

};
const onDocumenyKeyPress = ({ code }) => {
    if (code === 'Escape') {
        instance.close()
    }
};

galleryItemsList.addEventListener('click', onGallaryItemsElClick);


