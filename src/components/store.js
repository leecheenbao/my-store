import { createStore } from 'vuex';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../api/product_routes_api';

export default createStore({
  state() {
    return {
      products: [] // 商品數據
    };
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await getProducts();
        commit('setProducts', data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async addProduct({ dispatch }, product) {
      try {
        await createProduct(product);
        dispatch('fetchProducts');
      } catch (error) {
        console.error('Error creating product:', error);
      }
    },
    async editProduct({ dispatch }, { id, product }) {
      try {
        await updateProduct(id, product);
        dispatch('fetchProducts');
      } catch (error) {
        console.error('Error updating product:', error);
      }
    },
    async removeProduct({ dispatch }, id) {
      try {
        await deleteProduct(id);
        dispatch('fetchProducts');
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    }
  }
});


