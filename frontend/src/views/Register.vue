<template>
    <div class="register-page">
      <Register />
    </div>
  </template>
  
  <script setup>
  import Register from '../components/auth/RegisterContainer.vue';
  
  const components = { Register };
  </script>
  
  <style scoped>
  .register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  </style>