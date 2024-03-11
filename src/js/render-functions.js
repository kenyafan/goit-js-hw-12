import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import iconBad from '../images/Error.svg';

function createMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a href="${largeImageURL}" class="gallery-link">
        <img src="${webformatURL}" alt="${tags}" class="gallery__image" />
        <ul class="info">
          <li class="info-item">
            <p>Likes</p> ${likes}
          </li>
          <li class="info-item">
            <p>Views</p> ${views}
          </li>
          <li class="info-item">
            <p>Comments</p> ${comments}
          </li>
          <li class="info-item">
            <p>Downloads</p> ${downloads}
          </li>
        </ul>
      </a>
    </li>
  `;
}

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  const galleryMarkup = images.map(createMarkup).join('');

  gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}

export function renderLoader(isLoading) {
  const loader = document.querySelector('.loader');
  loader.classList.toggle('is-hidden', !isLoading);
}

export function renderLoadMoreBtn(isHidden) {
  const loadMoreBtn = document.querySelector('.load-more');
  loadMoreBtn.classList.toggle('is-hidden', isHidden);
}

export const renderError = message => {
  const options = {
    position: 'topRight',
    iconUrl: iconBad,
    timeout: 10000,
    backgroundColor: '#ef4040',
    progressBarColor: '#b51b1b',

    title: 'Error',
    titleColor: '#fafafb',
    titleSize: '16px',
    titleLineHeight: '1.5',

    messageColor: '#fafafb',
    messageSize: '16px',
    messageLineHeight: '1.5',
  };
  iziToast.error({ ...options, message });
};
