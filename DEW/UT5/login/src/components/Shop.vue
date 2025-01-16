<template>
    <div>
      <!-- Mensaje de bienvenida a la tienda -->
      <h1>Tienda</h1>
  
      <!-- Si el usuario no está autenticado, mostramos un mensaje de alerta -->
      <div v-if="!isAuthenticated">
        <p>Debes autenticarte para acceder a la tienda.</p>
        <router-link to="/login">Ir al login</router-link>
      </div>
  
      <!-- Contenido de la tienda (oculto si no está autenticado) -->
      <div v-else>
        <p>Bienvenido a la tienda, explora nuestros productos.</p>
        <!-- Aquí podrías agregar productos o más contenido relacionado con la tienda -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  // Aquí definimos el estado de autenticación
  const isAuthenticated = computed(() => {
    return sessionStorage.getItem('authToken') !== null;  // Comprobamos si el token de autenticación está en sessionStorage
  });
  
  // Redirigir si el usuario no está autenticado
  const router = useRouter();
  if (!isAuthenticated.value) {
    router.push('/login');  // Si no está autenticado, redirigimos al login
  }
  </script>
  
  <style scoped>
  /* Aquí puedes agregar los estilos específicos para la tienda */
  h1 {
    color: #333;
  }
  
  p {
    font-size: 1.2em;
  }
  
  router-link {
    font-weight: bold;
    color: #007bff;
  }
  </style>
  