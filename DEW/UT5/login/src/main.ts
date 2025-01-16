import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import AuthProvider from './components/AuthProvider.vue';

createApp(AuthProvider).use(router).mount('#app');
