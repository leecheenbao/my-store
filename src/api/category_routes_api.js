import axios from 'axios';

// 從環境變數中獲取基礎 URL
const apiBaseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:8080/api/v1';

// 創建一個 Axios 實例
const apiClient = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 在每個請求中添加 JWT 令牌
apiClient.interceptors.request.use(config => {
  const token = sessionStorage.getItem('jwtToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


// 定義 API 請求函數
export function createCategory(category) {
  return apiClient.post('/category', category);
}

export function updateCategory(id, category) {
  return apiClient.put(`/product/${id}`, category);
}

// export function deleteProduct(id) {
//   return apiClient.delete(`/product/${id}`);
// }