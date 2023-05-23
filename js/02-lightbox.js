import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

function createGalleryItemsMarkup(items) {
    return items
        .map(({ preview, original, description }) => {
            return `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img 
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
            </li>`;
        })
        .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

const options = {
    captionsData: "alt",
    captionDelay: 250
}
const lightbox = new SimpleLightbox(".gallery a", options);
