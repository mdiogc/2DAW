import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import UserProfile from '../components/UserProfile.vue';

const routes = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/home',
    component: HomePage,
    meta: { requiresAuth: true },
  },
  {
    path: '/profile',
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  {
    path: '/',
    redirect: '/login',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Middleware de protección de rutas
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('authToken');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;
