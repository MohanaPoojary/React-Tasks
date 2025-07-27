// src/api/axios.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
  headers:{
    'Content-Type': 'application/json',
    'x-api-key': 'reqres-free-v1'
  }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
