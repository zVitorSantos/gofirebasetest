<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="login-container">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form @submit.prevent="loginWithEmail">
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required class="form-control">
              </div>

              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required class="form-control">
              </div>

              <button type="submit" class="btn btn-primary">Login</button>
            </form>

            <button @click="loginWithGoogle" class="btn btn-secondary mt-3">Login with Google</button>

            <p class="mt-3">
              <a href="#" @click.prevent="resetPassword">Forgot password?</a>
            </p>

            <p class="mt-3">
              Don't have an account? <router-link to="/register">Register</router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'; 
import { useStore } from 'vuex';
import { authService } from '../../main';
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore();

    const loginWithEmail = async () => {
      try {
        await authService.login(email.value, password.value);
        await axios.post('/api/v1/user', {
          email: email.value,
          password: password.value,
          role: 'defaultRole'
        });
        await fetchUserPermissions();
      } catch (error) {
        console.error(error);
      }
    };

    const loginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(authService.auth, provider);
        await fetchUserPermissions();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchUserPermissions = async () => {
      try {
        const token = await authService.getIdToken();
        const response = await axios.get(`/api/v1/user/permissions/${authService.auth.currentUser.uid}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        store.dispatch('auth/setPermissions', response.data.role);
      } catch (error) {
        console.error('Error fetching user permissions:', error);
      }
    };

    const resetPassword = async () => {
      try {
        await sendPasswordResetEmail(authService.auth, email.value);
        alert('Password reset email sent!');
      } catch (error) {
        console.error(error);
      }
    };

    // Ouça as alterações no estado de autenticação no Vuex
    watch(() => store.state.auth.isAuthenticated, (isAuthenticated) => {
      if (isAuthenticated) {
        router.push('/');
      }
    });

    return { email, password, loginWithEmail, loginWithGoogle, resetPassword };
  }
};
</script>

<style scoped>
.login-container {
  width: 100%;
}
</style>
