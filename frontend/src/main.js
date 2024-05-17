import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import AuthService from './services/AuthService';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { onAuthStateChanged } from 'firebase/auth';
import store from './store';

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

// Função para inicializar o aplicativo Vue
const initializeAppWithAuth = () => {
    // Verifique se uma instância do aplicativo já existe
    if (window.vueApp) {
        return;
    }

    let app = createApp(App);
    app.use(router);
    app.use(store);
    app.mount('#app');

    // Armazene a instância do aplicativo em uma variável global para referência futura
    window.vueApp = app;
};

// Verifique o estado de autenticação antes de montar o aplicativo
onAuthStateChanged(authService.auth, (user) => {
    if (user) {
        // O usuário está autenticado, atualize o estado do Vuex
        store.commit('auth/setAuth', true);
    } else {
        // O usuário não está autenticado, limpe o estado do Vuex
        store.commit('auth/setAuth', false);
    }
    // Inicialize o aplicativo Vue.js após verificar o estado de autenticação
    initializeAppWithAuth();
});
