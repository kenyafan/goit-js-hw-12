import axios from 'axios';

const API_KEY = '42733452-f5a48a9f7be4f5b128e192710';
const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api/';

export async function fetchImages(searchQuery, page = 1, perPage = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: perPage,
  });

  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}`, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
