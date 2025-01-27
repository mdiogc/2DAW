import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/components/UserLogin.vue'
import Signup from '@/components/UserSignup.vue'
import MyShop from '@/components/MyShop.vue'
import UserProfile from '@/views/UserProfile.vue'
import { auth } from '../firebase'

// Configura las rutas
const requireAuth = (to: any, from: any, next: any) => {
  if (auth.currentUser) {
    next()
  } else {
    next('/login')
  }
}

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: MyShop,
    beforeEnter: requireAuth,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: UserProfile,
    beforeEnter: requireAuth,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup,
    },
    {
      path: '/shop',
      name: 'Shop',
      component: MyShop,
      beforeEnter: requireAuth,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: UserProfile,
      beforeEnter: requireAuth,
    },
  ],
})

export default router
