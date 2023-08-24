import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', openLargeImage);
gallery.append(...genGallaryItems(galleryItems));

function openLargeImage(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG')
        return;
    const instance = basicLightbox.create(
        `<img src="${event.target.dataset.source}">`
    );

    instance.show();   
};

function genGallaryItems(arr) {
    return arr.map(
        i => {
            const item = document.createElement('li');
            item.className = 'gallery__item';
            const a = document.createElement('a');
            a.className = 'gallery__link';
            a.href = i.original;
            const img = document.createElement('img');
            img.className = 'gallery__image';
            img.src = i.preview;
            img.dataset.source = i.original;
            img.alt = i.description;
            a.append(img);
            item.append(a);
            return item;
        }
    );
};



console.log(galleryItems);
