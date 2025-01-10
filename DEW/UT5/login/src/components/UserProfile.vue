<script setup lang="ts">
import { inject } from 'vue';

const authState = inject('authState');
</script>

<template>
  <div v-if="authState">
    <h1>Bienvenido, Usuario</h1>
  </div>
  <div v-else>
    <p>No estás autenticado. Por favor, inicia sesión.</p>
  </div>
</template>
