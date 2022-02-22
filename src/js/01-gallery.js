import { galleryItems } from './gallery-items.js';
// Change code below this line



const imagesAdd = document.querySelector(".gallery");


let makeString = '';

galleryItems.forEach(({ preview, original, description }) => {
    makeString += `<a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt='${description}'
    /></a>`
});


imagesAdd.insertAdjacentHTML('beforeend',makeString);
imagesAdd.addEventListener('click', getClick);

function getClick(event) {
    event.preventDefault()

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">
    `)

    instance.show();
}

console.log(galleryItems);