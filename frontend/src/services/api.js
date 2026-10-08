import axios from 'axios';

// Configurable API base URL using environment variable VITE_API_BASE_URL
// Defaults to '/api' for proxy/relative setups or 'http://localhost:8080/api' in standalone dev
const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export default api;
