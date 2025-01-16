// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import { auth } from '../firebaseConfig'; // Importa auth
import Shop from '../components/Shop.vue';
import LoginPage from '../components/LoginPage.vue';

const routes = [
  { path: '/login', component: LoginPage },
  {
    path: '/shop',
    component: Shop,
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        next(); // Permitir el acceso a la tienda
      } else {
        next('/login'); // Redirigir al login si no está autenticado
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
