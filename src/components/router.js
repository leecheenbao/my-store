import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProductList from '../views/ProductList.vue';
import ProductDetail from '../views/ProductDetail.vue';
import LoginPage from '../views/LoginPage.vue'; // 引入 LoginPage
import AdminPage from '../views/AdminPage.vue'
const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/admin',
    name: '',
    component: AdminPage
  },
  {
    path: '/product',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
