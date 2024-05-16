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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { authService } from '../../main';
import { GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const loginWithEmail = async () => {
      try {
        await authService.login(email.value, password.value); // Use authService para chamar o método login
        // Redirect to home page or dashboard
      } catch (error) {
        console.error(error);
      }
    };

    const loginWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(authService.auth, provider); // Use authService para acessar a propriedade auth
        // Redirect to home page or dashboard
      } catch (error) {
        console.error(error);
      }
    };

    const resetPassword = async () => {
      try {
        await sendPasswordResetEmail(authService.auth, email.value); // Use authService para acessar a propriedade auth
        alert('Password reset email sent!');
      } catch (error) {
        console.error(error);
      }
    };

    return { email, password, loginWithEmail, loginWithGoogle, resetPassword };
  }
};
</script>

<style scoped>
.login-container {
  width: 100%; 
}
</style>