import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
// gallery.addEventListener("click", openLargeImage);

gallery.insertAdjacentHTML('afterbegin', genGallaryItems(galleryItems));
const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: "250",
});

function genGallaryItems(arr) {
  return arr.map(
      ({ original, preview, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    ).join("");
}

console.log(galleryItems);
