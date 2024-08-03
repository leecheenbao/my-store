import { createApp } from 'vue';
import App from './App.vue';
import router from './components/router';
import store from './components/store';
import BackToHome from './commons/BackToHome.vue';
import AppHeader from './commons/AppHeader.vue';

import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.use(router);
app.use(store);
// 全局註冊共用元件
app.component('BackToHome', BackToHome);
app.component('AppHeader', AppHeader);
app.mount('#app');

