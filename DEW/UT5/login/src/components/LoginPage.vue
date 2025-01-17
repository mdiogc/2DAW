<script setup>
import { inject, ref } from 'vue';

const { login } = inject('auth'); // Obtener la función de login
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  await login(email.value, password.value);
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Correo" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button type="submit">Iniciar sesión</button>
  </form>
</template>
