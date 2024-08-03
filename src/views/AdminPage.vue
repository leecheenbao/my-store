<template>
    <back-to-home class="mt-4"/> <!-- 使用共用元件 -->

    <div class="container mt-4">
      <h1 class="mb-4">新增管理員</h1>
      <form @submit.prevent="createAdmin">
        <div class="mb-3">
          <label for="username" class="form-label">名稱</label>
          <input type="text" id="username" v-model="newAdmin.username" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">電子郵件</label>
          <input type="email" id="email" v-model="newAdmin.email" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input type="password" id="password" v-model="newAdmin.password" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">新增管理員</button>
      </form>
      <div class="mt-4">
        <h2>現有管理員</h2>
        <ul class="list-group">
          <li v-for="admin in admins" :key="admin.id" class="list-group-item">
            {{ admin.username }} - {{ admin.email }}
          </li>
        </ul>
      </div>
    </div>

  </template>
  
  <script>
  import { createAdmin, getAdmins } from '../api/admin_routes_api'; // 引入 API 函數
  import BackToHome from '../commons/BackToHome.vue'; // 引入共用元件

  export default {
    components: {
        BackToHome // 註冊共用元件
    },
    data() {
      return {
        newAdmin: {
          username: 'admin002',
          email: 'admin002@gmail.com',
          password: 'admin'
        },
        admins: []
      };
    },
    async created() {
      await this.fetchAdmins();
    },
    methods: {
      async createAdmin() {
        try {
          await createAdmin(this.newAdmin);
          this.newAdmin = { username: '', email: '', password: '' }; // 清空表單
          await this.fetchAdmins(); // 重新獲取管理員列表
        } catch (error) {
          alert('新增管理員失敗: ' + error.response?.data?.message || error.message);
        }
      },
      async fetchAdmins() {
        try {
          const { data } = await getAdmins();
          this.admins = data;
        } catch (error) {
          alert('獲取管理員列表失敗: ' + error.response?.data?.message || error.message);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .list-group-item {
    display: flex;
    justify-content: space-between;
  }
  </style>
  