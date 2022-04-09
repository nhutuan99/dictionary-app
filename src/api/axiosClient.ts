import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  headers: {
    'Content-Type': 'application/json',
  },
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default axiosClient;
