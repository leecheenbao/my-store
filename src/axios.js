import axios from 'axios';

// 確保這裡使用正確的 API 基礎 URL
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:8080/api/v1';
const instance = axios.create({
  baseURL: apiBaseUrl,
});

export default instance;
