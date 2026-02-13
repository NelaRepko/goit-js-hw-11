// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

function getImagesByQuery(query) {
  
 return axios.get('https://pixabay.com/api/', {
    params: {
      key: '54641961-e96e5217be963f5aab39f9ddc',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
 })
    .then(res => { 
    const hits = res.data.hits;

    if (hits.length === 0) {
      // Якщо нічого не знайдено, показати повідомлення
      iziToast.warning({
        title: 'No results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'сеnter',
        timeout: 5000
      });
    }

    return hits; // повертаємо масив зображень
  })
  .catch(error => {
    // Виводимо помилку через iziToast
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'сеnter',
      timeout: 5000
    });
    throw error;
  });
}


export default getImagesByQuery;