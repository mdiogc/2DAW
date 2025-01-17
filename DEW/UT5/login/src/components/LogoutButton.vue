<script setup>
import { inject } from 'vue';

const { logout } = inject('auth');

const handleLogout = async () => {
  await logout();
  alert('Sesión cerrada exitosamente.');
};
</script>

<template>
  <button @click="handleLogout" class="logout-button">
    Cerrar sesión
  </button>
</template>

<style scoped>
.logout-button {
  padding: 0.5rem 1rem;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.logout-button:hover {
  background-color: #c9302c;
}
</style>
