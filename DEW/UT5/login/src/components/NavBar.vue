<template>
  <nav>
    <ul>
      <li><a href="/">Inicio</a></li>
      <li v-if="auth.isAuthenticated"><a href="/profile">Perfil</a></li>
      <li><a href="/shop">Tienda</a></li>
      <li v-if="!auth.isAuthenticated"><a href="/login">Iniciar Sesión</a></li>
      <li v-if="auth.isAuthenticated"><button @click="auth.logout">Cerrar Sesión</button></li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const auth = inject('auth');
</script>
