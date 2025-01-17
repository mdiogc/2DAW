<script setup>
import { inject } from 'vue';

const { user } = inject('auth'); // Accede al estado del usuario
</script>

<template>
  <div class="user-profile">
    <h1>Perfil del Usuario</h1>
    <p v-if="user">Correo: {{ user.email }}</p>
    <p v-else>No has iniciado sesión.</p>
  </div>
</template>

<style scoped>
.user-profile {
  padding: 2rem;
  text-align: center;
}
</style>
