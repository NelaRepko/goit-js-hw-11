import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const newBox = new  SimpleLightbox(".gallery a", {
  captionsData: "alt",       // беремо текст з alt
  captionPosition: "bottom", // позиція підпису знизу
  captionDelay: 250,         // затримка появи підпису
});

// Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
function createGallery(images) {

const galleryContainer = document.querySelector('.gallery');

  const markup = images.map(image => `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.largeImageURL}">  <!-- велике фото для Lightbox -->
      <img class="gallery-image" src="${image.previewURL}" alt="${image.tags}"> <!-- мініатюра та тег як alt -->
    </a>
   </li>
  `).join('');

  galleryContainer.innerHTML = markup; //додаємо елементи галереї в контейнер

   // --- Додаємо стилі контейнеру ---
  galleryContainer.style.display = "flex";
  galleryContainer.style.flexWrap = "wrap";
  galleryContainer.style.gap = "24px";
  galleryContainer.style.justifyContent = "center";
  galleryContainer.style.alignItems = "center";
  galleryContainer.style.listStyle = "none";
  galleryContainer.style.maxWidth = "1200px";
  galleryContainer.style.margin = "0 auto";        // центр UL на сторінці

  // --- Додаємо стилі для кожної li ---
  const items = galleryContainer.querySelectorAll("li");
  items.forEach(item => {
    item.style.flex = "1 1 360px";
    item.style.height = "200px";
    item.style.maxWidth = "100%";
    item.style.border = "1px solid #808080";
    item.style.overflow = "hidden";
    item.style.justifyContent = "center";
    item.style.alignItems = "center";
    item.style.width = "360px";

    // --- Стилі для img ---
const imgs = galleryContainer.querySelectorAll("img");
imgs.forEach(img => {
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover"; // картинка займає всю li
  img.style.display = "block";
});
  });

  newBox.refresh(); // оновлюємо екземпляр SimpleLightbox

}

// Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
function clearGallery() {
const galleryContainer = document.querySelector('.gallery');
  galleryContainer.innerHTML = ''; // очищаємо весь вміст контейнера

  newBox.refresh(); // оновлюємо екземпляр SimpleLightbox
} 

// Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
function showLoader() {
  const loader = document.getElementById('loader');
  loader.classList.remove('is-hidden'); // показати спінер

} 

// Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
function hideLoader() {
  const loader = document.getElementById('loader');
  loader.classList.add('is-hidden'); // приховати спінер
}

export { createGallery, clearGallery, showLoader, hideLoader };
