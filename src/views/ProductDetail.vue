<template>
  <back-to-home class="mt-4"/> <!-- 使用共用元件 -->
  <div class="container mt-4">
    <h1 class="mb-4">商品詳細資訊</h1>
    <button class="btn btn-secondary mb-4" @click="goBack">返回</button>
    <div v-if="product" class="card">
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <form @submit.prevent="updateProduct">
          <div class="mb-3">
            <label for="productName" class="form-label">名稱</label>
            <input type="text" id="productName" v-model="product.name" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="productDescription" class="form-label">描述</label>
            <textarea id="productDescription" v-model="product.description" class="form-control"></textarea>
          </div>
          <div class="mb-3">
            <label for="productPrice" class="form-label">價格</label>
            <input type="number" id="productPrice" v-model="product.price" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="productStock" class="form-label">庫存</label>
            <input type="number" id="productStock" v-model="product.stock" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">保存變更</button>
        </form>
      </div>
    </div>
    <div v-else class="text-center mt-4">
      <p>載入中...</p>
    </div>
  </div>

</template>

<script>
import { getProductById, updateProduct } from '../api/product_routes_api'; // 引入 API 請求函數
import BackToHome from '../commons/BackToHome.vue'; // 引入共用元件

export default {
  components: {
    BackToHome // 註冊共用元件
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      product: null
    };
  },
  async created() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const { data } = await getProductById(this.id);
        this.product = data;
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },
    async updateProduct() {
      try {
        await updateProduct(this.id, this.product);
        alert('商品已成功更新！');
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    goBack() {
      this.$router.go(-1); // 使用 this.$router.go(-1) 來返回上一頁
    }
  }
}
</script>

<style scoped>
/* 可選：添加自定義樣式 */
.card {
  max-width: 600px;
  margin: auto;
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  margin-bottom: 1rem;
}

.text-center {
  text-align: center;
}
</style>
