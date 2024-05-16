<template>
  <div class="home">
    <h1>Bem-vindo à nossa aplicação!</h1>
    <button @click="goToLoginPage">Login</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLoginPage = () => {
  router.push('/login');
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>