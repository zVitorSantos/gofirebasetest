import { createApp } from 'vue';
import './style.css';
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import AuthService from './services/AuthService';

// Sua configuração do Firebase usando variáveis de ambiente do Vite
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Inicialize o Firebase com as configurações definidas acima
const firebaseApp = initializeApp(firebaseConfig);

// Crie uma instância da classe AuthService
export const authService = new AuthService(firebaseApp);

// Se deseja usar o Firebase Analytics
const analytics = getAnalytics(firebaseApp);

// Monte o aplicativo Vue.js
createApp(App).use(router).mount('#app');