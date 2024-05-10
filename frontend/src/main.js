import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0g3wQjw73bGPpU2Id1ZrjKMtx73mo6-w",
    authDomain: "firetest-98x8.firebaseapp.com",
    projectId: "firetest-98x8",
    storageBucket: "firetest-98x8.appspot.com",
    messagingSenderId: "877385955451",
    appId: "1:877385955451:web:f526a642c515c39b328ade",
    measurementId: "G-60GCBFQD45"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

createApp(App).mount('#app');

