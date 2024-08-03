<template>
  <div class="container mt-4">
    <div class="btn-group" role="group">
      <router-link to="/product" class="btn btn-danger">
        查看商品
      </router-link>
      <router-link to="/admin" class="btn btn-primary">
        用戶管理
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage'
}
</script>

<style scoped>
.container {
  max-width: 800px;
}

.btn-group {
  display: flex;
  justify-content: center;
}

.mt-4 {
  margin-top: 1.5rem;
}
</style>
