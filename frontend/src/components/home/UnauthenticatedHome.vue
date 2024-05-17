<template>
  <div class="home">
    <Navbar />
    <h2>Bem-vindo à nossa aplicação!</h2>
    <button @click="goToLoginPage">Login</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Navbar from '../common/NavBar.vue';

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