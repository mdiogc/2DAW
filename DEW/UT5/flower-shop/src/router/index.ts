import { createRouter, createWebHistory } from 'vue-router'
import FlowerList from '@/views/FlowerList.vue'
import Cart from '@/views/Cart.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: FlowerList,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
