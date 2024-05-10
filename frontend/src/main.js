import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

// Carrega variáveis de ambiente apenas em ambiente de desenvolvimento
if (import.meta.env.MODE === 'development') {
    require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env
  }

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

createApp(App).mount('#app');
