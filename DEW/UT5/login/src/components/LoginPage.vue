<script setup lang="ts">
import { inject } from 'vue';
import { ref } from 'vue';
import { login } from '@/services/authService'; 
const authState = inject('authState');
const login = inject('login');

// Formulario de login
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  if (isValidEmail(email.value) && isValidPassword(password.value)) {
    if (login(email.value, password.value)) {
      // Redirige al home después de autenticarse
      this.$router.push('/home');
    }
  } else {
    errorMessage.value = 'Correo o contraseña incorrectos.';
  }
};

const isValidEmail = (email: string) => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

const isValidPassword = (password: string) => {
  const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
  return regex.test(password);
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <input v-model="email" type="email" placeholder="Correo electrónico" required />
    <input v-model="password" type="password" placeholder="Contraseña" required />
    <button type="submit">Iniciar sesión</button>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </form>
</template>
