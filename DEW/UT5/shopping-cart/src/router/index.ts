import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/ProductList.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Tienda',
    component: ProductList,
    meta: { title: 'Tienda' },
  },
  {
    path: '/cart',
    name: 'Carrito',
    component: Cart,
    meta: { title: 'Carrito' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0, behavior: 'smooth' };
    }
  },
});

export default router;