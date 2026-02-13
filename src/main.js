import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

// --- Селектори ---
const form = document.querySelector('.form');
const input = form.querySelector('input[name="search-text"]');

// --- Обробник сабміту форми ---
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // скасовуємо стандартну відправку форми

  const query = input.value.trim(); // прибираємо зайві пробіли

  // --- Перевірка на порожній рядок ---
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'center',
      
    });
    return; // нічого не робимо, якщо поле пусте
  }

  // --- Очищаємо попередню галерею ---
  clearGallery();

  // --- Показуємо лоадер ---
  showLoader();

  try {
    // --- Виконуємо запит до Pixabay API ---
    const hits = await getImagesByQuery(query);

    // --- Перевірка на порожній результат ---
    if (hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 5000
      });
      return;
    }

    // --- Створюємо галерею з отриманих зображень ---
    createGallery(hits);

  } catch (error) {
    // Помилка вже оброблена у pixabay-api.js через iziToast.error, можна не робити нічого
    console.error('Error fetching images:', error);
  } finally {
    // --- Прибираємо лоадер ---
    hideLoader();
  }
});
