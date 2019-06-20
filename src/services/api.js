import axios from 'axios';

const api = axios.create({
  baseURL: 'http...',
});

api.interceptors.request.use((config) => {
  const configuration = { ...config };

  configuration.params = {
    ...config.params,
  };

  return configuration;
}, e => (
  Promise.reject(e)
));

export default api;
