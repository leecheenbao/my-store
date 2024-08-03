<template>
    <button class="btn btn-secondary" @click="goHome">
      返回首頁
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      goHome() {
        this.$router.push({ name: 'home' }); // 導向首頁
      }
    }
  }
  </script>
  
  <style scoped>
  /* 添加自定義樣式（可選） */
  </style>
  