const API_KEY = '42733452-f5a48a9f7be4f5b128e192710';
const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api/';

export function fetchImages(searchQuery) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}${END_POINT}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error(error);
      throw error;
    });
}
