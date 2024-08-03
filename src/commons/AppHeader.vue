<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <a class="navbar-brand" href="#">MyApp</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/home" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/product" class="nav-link">商品</router-link>
          </li>
          
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">用戶管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link btn btn-primary">登入</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
  background-color: #f8f9fa;
}

.navbar {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e1e1e1;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-link {
  margin-right: 15px;
  color: #343a40;
}

.nav-link:hover {
  color: #007bff;
}

.navbar-toggler {
  border-color: #007bff;
}

.navbar-toggler-icon {
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" /%3E%3C/svg%3E');
}

@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }
  .navbar-nav .nav-item {
    margin: 0.5rem 0;
  }
}
</style>
