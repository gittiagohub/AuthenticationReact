// src/services/api.ts
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Api;
