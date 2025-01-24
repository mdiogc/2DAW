import { createRouter, createWebHistory } from 'vue-router'
import FlowerList from '@/views/FlowerList.vue'
import Cart from '@/components/Cart.vue'

const routes = [
  { path: '/', component: FlowerList },
  { path: '/cart', component: Cart },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
