import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  renderLoader,
  renderError,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const searchForm = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';

  const searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    renderError('Please enter a search query.');
    return;
  }

  renderLoader(true);

  fetchImages(searchQuery)
    .then(images => {
      if (images.length === 0) {
        renderError(
          'Sorry, there are no images matching <br> your search query. Please try again!'
        );
      } else {
        renderGallery(images);

        lightbox.refresh();
      }
    })
    .catch(error => {
      renderError(error.message);
    })
    .finally(() => {
      renderLoader(false);
      searchForm.reset();
    });
});
