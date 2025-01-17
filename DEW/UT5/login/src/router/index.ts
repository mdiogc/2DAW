import { createRouter, createWebHistory } from 'vue-router';
import Shop from '../components/Shop.vue';
import LoginPage from '../components/LoginPage.vue';
import HomeView from '../views/HomeView.vue'; // Asegúrate de importar HomeView o algún otro componente

const routes = [
  { path: '/', component: HomeView }, // Ruta raíz que apunta a HomeView
  { path: '/login', component: LoginPage },
  { path: '/shop', component: Shop },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // Redirigir cualquier ruta no encontrada a la raíz
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
