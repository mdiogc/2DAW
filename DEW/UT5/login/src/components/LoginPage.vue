<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

// Validación de formato de correo y contraseña
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password: string) => /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(password);

// Función para iniciar sesión
const handleLogin = () => {
  if (!validateEmail(email.value) || !validatePassword(password.value)) {
    alert('Formato de correo o contraseña incorrecto');
    return;
  }


  // Simulación de autenticación
  const token = 'simulated-token';
  sessionStorage.setItem('authToken', token);
  router.push('/home');
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Correo electrónico" required />
    <input v-model="password" type="password" placeholder="Contraseña" required />
    <button type="submit">Iniciar sesión</button>
  </form>
</template>