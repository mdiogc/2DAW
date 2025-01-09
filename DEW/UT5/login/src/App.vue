<script setup lang="ts">
import { RouterView } from 'vue-router';
import AuthProvider from './components/AuthProvider.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
  <AuthProvider>
    <!-- Barra de navegación -->
    <NavBar />

    <!-- Contenedor principal -->
    <main>
      <RouterView />
    </main>
  </AuthProvider>
</template>

<style>
/* Estilos globales */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

main {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>


