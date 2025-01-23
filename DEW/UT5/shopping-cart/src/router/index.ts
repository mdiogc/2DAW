import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/views/ProductList.vue';
import Cart from '@/views/Cart.vue';

const routes = [
  {
    path: '/',
    name: 'Tienda',
    component: ProductList,
  },
  {
    path: '/cart',
    name: 'Carrito',
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
