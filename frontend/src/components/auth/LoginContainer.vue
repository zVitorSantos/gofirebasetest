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
import { ref, watch, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { sendPasswordResetEmail } from "firebase/auth";
import { authService } from '../../main';

export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore();

    const loginWithEmail = async () => {
      try {
        await store.dispatch('auth/loginWithEmail', { email: email.value, password: password.value });
        proxy.$notify.success('Login successful!');
      } catch (error) {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          proxy.$notify.error('Email ou senha incorretos.');
        } else if (error.code === 'auth/invalid-credential') {
          proxy.$notify.error('Credenciais inválidas.');
        } else {
          proxy.$notify.error('Login failed: ' + error.message);
        }
        console.error('Login error:', error);
      }
    };

    const loginWithGoogle = async () => {
      try {
        await store.dispatch('auth/loginWithGoogle');
        proxy.$notify.success('Login successful!');
      } catch (error) {
        proxy.$notify.error('Login failed: ' + error.message);
        console.error('Google login error:', error);
      }
    };

    const resetPassword = async () => {
      try {
        await sendPasswordResetEmail(authService.auth, email.value);
        proxy.$notify.info('Password reset email sent!');
      } catch (error) {
        proxy.$notify.error('Error sending password reset email: ' + error.message);
        console.error('Password reset error:', error);
      }
    };

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
