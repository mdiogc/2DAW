<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue';

// Estado de autenticación
const isAuthenticated = ref(false);
const userToken = ref<string | null>(null);

// Función para iniciar sesión
const login = (token: string) => {
  userToken.value = token;
  isAuthenticated.value = true;
  sessionStorage.setItem('authToken', token);
};

// Función para cerrar sesión
const logout = () => {
  userToken.value = null;
  isAuthenticated.value = false;
  sessionStorage.removeItem('authToken');
};

// Verificar token al cargar la aplicación
onMounted(() => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    userToken.value = token;
    isAuthenticated.value = true;
  }
});

// Limpiar datos al desmontar
onUnmounted(() => {
  logout();
});

// Proveer el estado de autenticación
provide('auth', {
  isAuthenticated,
  userToken,
  login,
  logout,
});
</script>

<template>
  <slot />
</template>