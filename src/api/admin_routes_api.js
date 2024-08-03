import axios from 'axios';

const apiBaseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:8080/api/v1';

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

export const loginUser = (username, password) => 
  apiClient.post('/admin/login', { username, password });

export function createAdmin(admin) {
  // 確保發送的數據格式正確
  const payload = {
    username: admin.username,
    email: admin.email,
    password: admin.password
  };
  console.log(payload);
  return apiClient.post('/admin/register', payload);
}

export const getAdmins = () =>
  apiClient.get('/admin/users',{});

