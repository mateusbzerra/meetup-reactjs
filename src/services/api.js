import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api'
});

api.interceptors.request.use(
  function(config) {
    config.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default api;
