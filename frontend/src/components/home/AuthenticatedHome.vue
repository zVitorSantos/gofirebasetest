<template>
  <div class="home">
    <Navbar />
    <h2>Bem-vindo de volta!</h2>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Navbar from '../common/NavBar.vue';

const router = useRouter();
const store = useStore();

const logout = () => {
  store.dispatch('auth/logout');
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>