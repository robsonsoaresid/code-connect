import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:3000/'
})

// Add a request interceptor
// Adicionar um interceptador de requisições.
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // Faça alguma coisa antes que a requisição seja enviada.
    const token = localStorage.getItem('access_token');

    if (token) {
        config.headers = {
            Authorization: `Bearer ${token}`
        }
    }

    return config;
  },
  function (error) {
    // Do something with request error
    // Faça alguma coisa antes que a requisição seja enviada.
    return Promise.reject(error);
  }
);