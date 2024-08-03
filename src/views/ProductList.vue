<template>
  <back-to-home class="mt-4"/> <!-- 使用共用元件 -->
  <div class="container mt-4">
    <h1 class="mb-4">商品列表</h1>
    <ul class="list-group">
      <li v-for="product in products" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
        <router-link class="text-decoration-none" :to="{ name: 'ProductDetail', params: { id: product.id } }">
          <span class="fw-bold">{{ product.name }}</span> - 價格: {{ product.price }} - 庫存: {{ product.stock }}
        </router-link>
        <router-link class="text-decoration-none" :to="{ name: 'ProductDetail', params: { id: product.id } }">
          <span class="badge bg-primary rounded-pill">查看詳情</span>
        </router-link>

      </li>
    </ul>
  </div>

</template>

<script>
import { getProducts } from '../api/product_routes_api'; // 引入 API 請求函數
import BackToHome from '../commons/BackToHome.vue'; // 引入共用元件

export default {
  components: {
    BackToHome
  },
  data() {
    return {
      products: []
    };
  },
  async created() {
    try {
      const { data } = await getProducts();
      this.products = data;
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
</script>

<style scoped>
/* 可選：添加自定義樣式 */
.list-group-item {
  transition: background-color 0.3s ease;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}
</style>
