<template>
  <div class="container mt-4">
    <h1 class="mb-4">登入</h1>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username" class="form-label">用戶名</label>
        <input
          type="text"
          id="username"
          v-model="username"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">密碼</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="form-control"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">登入</button>
    </form>
    <div v-if="error" class="alert alert-danger mt-3">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { loginUser } from '../api/admin_routes_api'; // 引入登入 API 函數

export default {
  data() {
    return {
      username: 'test123',
      password: 'test123',
      error: null
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await loginUser(this.username, this.password);
        // 假設後端返回的 response.data 包含 token
        const token = response.data.token;
        // 將 token 儲存到 sessionStorage
        sessionStorage.setItem('jwtToken', token);
        // 顯示登入成功的提示
        window.alert('登入成功！');
        // 導向主頁或其他需要登入的頁面
        this.$router.push('/home');
      } catch (error) {
        this.error = '登入失敗：' + (error.response?.data?.message || error.message);
      }
    }
  }
}
</script>

<style scoped>
/* 可選：添加自定義樣式 */
.container {
  max-width: 400px;
}
</style>
