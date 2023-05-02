import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

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
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </li>`;
        })
        .join('');
}

// Відкриття модального вікна по кліку на елементі галереї

galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
}
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${event.target.dataset.source}" 
        width="1280" height="auto">
    </div>`,
{
    onShow: (instance) => {
        window.addEventListener('keydown', closeModal)
    },
    onClose: (instance) => {
        window.removeEventListener('keydown', closeModal)
    }
}
);
    instance.show();;

    // Закриття з клавіатури
    function closeModal(event) {
        if (event.code !== "Escape") 
        return;
        instance.close();
    }
};








