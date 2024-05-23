<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-container">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form @submit.prevent="registerWithEmail">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="name" required class="form-control">
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email" required class="form-control">
              </div>
              <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="password" required class="form-control">
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
            </form>
            <p class="mt-3">
              Already have an account? <router-link to="/login">Login</router-link>
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
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const store = useStore();

    const registerWithEmail = async () => {
      try {
        await store.dispatch('auth/registerWithEmail', { name: name.value, email: email.value, password: password.value });
        proxy.$notify.success('Registration successful!');
      } catch (error) {
        if (error.message.includes('email-already-in-use')) {
          proxy.$notify.error('The provided email is already in use. Please login or use a different email.');
        } else {
          proxy.$notify.error('Registration failed: ' + (error.response ? error.response.data : error.message));
        }
        console.error('Error registering user:', error);
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

    return { name, email, password, registerWithEmail, loginWithGoogle, resetPassword };
  }
};
</script>

<style scoped>
.register-container {
  width: 100%;
}
</style>
