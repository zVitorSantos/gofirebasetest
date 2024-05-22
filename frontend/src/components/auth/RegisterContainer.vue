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
import { ref } from 'vue';
import { authService } from '../../main';
import axios from 'axios';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const name = ref(''); // Add this line

    const registerWithEmail = async () => {
      try {
        await authService.register(email.value, password.value);
        await axios.post('/api/v1/user', {
          email: email.value,
          password: password.value,
          name: name.value,
          role: 'defaultRole'
        });
      } catch (error) {
        console.error(error);
      }
    };

    return { email, password, name, registerWithEmail }; 
  }
};
</script>

<style scoped>
.register-container {
  width: 100%; 
}
</style>