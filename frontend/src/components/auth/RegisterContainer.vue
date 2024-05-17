<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="register-container">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <form @submit.prevent="registerWithEmail">
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
import { ref } from 'vue';
import { authService } from '../../main';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const registerWithEmail = async () => {
      try {
        await authService.register(email.value, password.value); 
      } catch (error) {
        console.error(error);
      }
    };

    return { email, password, registerWithEmail };
  }
};
</script>

<style scoped>
.register-container {
  width: 100%; 
}
</style>