<template>
  <div>
    <h1>Perfil de Usuario</h1>
    <p>Bienvenido, {{ auth.user }}</p>
    <button @click="auth.logout">Cerrar Sesión</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';

const auth = inject('auth');
</script>
