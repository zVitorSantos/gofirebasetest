import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import dotenv from 'dotenv';
import path from 'path';

// Construa o caminho absoluto até o arquivo .env
const envPath = path.resolve(__dirname, '../.env');

// Carregue as variáveis de ambiente do arquivo .env
dotenv.config({ path: envPath });

// Sua configuração do Firebase usando variáveis de ambiente
const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

// Inicialize o Firebase com as configurações definidas acima
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

// Monte o aplicativo Vue.js
createApp(App).mount('#app');
