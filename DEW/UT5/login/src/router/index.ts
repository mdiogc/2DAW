import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../components/LoginPage.vue';
import UserProfile from '../components/NavBar.vue';

const routes = [
  { path: '/', component: LoginPage },
  { path: '/login', component: LoginPage},
  {path: '/user-profile', component: UserProfile},
  ];
