<template>
  <AuthProvider>
    <NavBar />
    <main>
      <router-view />
    </main>
  </AuthProvider>
</template>

<script setup>
// Importamos los componentes necesarios
import AuthProvider from './components/AuthProvider.vue';
import NavBar from './components/NavBar.vue';
</script>

<style>
/* Estilos básicos para tu aplicación */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  color: #333;
}

main {
  padding: 1rem;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
}
</style>

