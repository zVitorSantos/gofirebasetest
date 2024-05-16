<template>
  <div class="login-page">
    <Login />
  </div>
</template>

<script setup>
import Login from '../components/auth/LoginContainer.vue';

// Registre o componente para que possa ser usado no template
const components = { Login };
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>