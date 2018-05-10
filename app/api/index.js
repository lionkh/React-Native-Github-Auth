import apiMiddleware from '../middlewares/apiMiddleware';

const api = {
  get: (url, headers) => apiMiddleware(url, 'GET', null, headers),
  post: (url, body, headers) => apiMiddleware(url, 'POST', body, headers),
  put: () => {
  },
  patch: () => {
  },
  delete: () => {
  }
};

export default api;