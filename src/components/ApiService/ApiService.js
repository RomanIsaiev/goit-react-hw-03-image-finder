import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export async function fetchImages(searchQuery, currentPage) {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${currentPage}&key=39745378-dd24554a2bcf90950765bc548&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.total === 0) {
    return;
  }
  return response.data;
}
