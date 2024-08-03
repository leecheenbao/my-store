<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from './commons/AppHeader.vue';  // 更新導入的名稱

export default {
  name: 'App',
  components: {
    AppHeader  // 更新組件名稱
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  