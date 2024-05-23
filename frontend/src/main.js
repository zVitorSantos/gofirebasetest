// main.js
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import AuthService from './services/AuthService';
import notificationService from './services/NotificationService';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { onAuthStateChanged } from 'firebase/auth';
import store from './store';

// Configuração do Firebase usando variáveis de ambiente do Vite
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

const initializeAppWithAuth = () => {
    if (window.vueApp) {
        return;
    }

    let app = createApp(App);
    app.use(router);
    app.use(store);
    app.use(notificationService);
    app.mount('#app');

    window.vueApp = app;
};

// Verifique o estado de autenticação antes de montar o aplicativo
onAuthStateChanged(authService.auth, (user) => {
    if (user) {
        store.commit('auth/setAuth', true);
    } else {
        store.commit('auth/setAuth', false);
    }
    initializeAppWithAuth();
});
