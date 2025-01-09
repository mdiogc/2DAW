<script setup lang="ts">
import { inject } from 'vue';
import { useRouter } from 'vue-router';


interface AuthContext {
    isAuthenticated: boolean;
    logout: () => void;
  }
  
  const auth = inject('auth') as AuthContext;

const router = useRouter();

const handleLogout = () => {
  auth.logout();
  router.push('/login'); 
};
</script>
<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li v-if="isAuthenticated"><router-link to="/profile">Profile</router-link></li>
        <li v-if="!isAuthenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="isAuthenticated"><button @click="handleLogout">Logout</button></li>
      </ul>
    </nav>
  </template>
  
 
  
  <style scoped>
  nav {
    background-color: #f0f0f0;
    padding: 10px;
  }
  
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }
  
  li {
    margin: 0;
  }
  
  button {
    background: none;
    border: none;
    color: rgb(0, 162, 255);
    cursor: pointer;
  }
  </style>

