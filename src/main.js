import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  renderLoader,
  renderError,
  renderLoadMoreBtn,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const searchForm = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let searchQuery = '';

searchForm.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  currentPage = 1;

  searchQuery = event.currentTarget.elements.searchQuery.value.trim();

  if (!searchQuery) {
    renderError('Please enter a search query.');
    return;
  }

  renderLoader(true);
  renderLoadMoreBtn(true);

  try {
    const images = await fetchImages(searchQuery, currentPage);

    if (images.length === 0) {
      renderError(
        'Sorry, there are no images matching <br> your search query. Please try again!'
      );
    } else {
      renderGallery(images);

      lightbox.refresh();

      if (images.length < 15) {
        renderLoadMoreBtn(true);
      } else {
        renderLoadMoreBtn(false);
      }
    }
  } catch (error) {
    renderError(error.message);
  } finally {
    renderLoader(false);
    searchForm.reset();
  }
});

loadMoreBtn.addEventListener('click', async () => {
  currentPage += 1;

  renderLoader(true);

  try {
    const images = await fetchImages(searchQuery, currentPage);

    if (images.length === 0) {
      renderError('We’re sorry, but you’ve reached the end of search results.');
      renderLoadMoreBtn(true);
    } else {
      renderGallery(images);

      lightbox.refresh();

      if (images.length < 15) {
        renderLoadMoreBtn(true);
      } else {
        renderError(
          'We’re sorry, but you’ve reached the end of search results.'
        );
        renderLoadMoreBtn(false);
      }
    }
  } catch (error) {
    renderError(error.message);
  } finally {
    smoothScroll();
    renderLoader(false);
  }
});

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
