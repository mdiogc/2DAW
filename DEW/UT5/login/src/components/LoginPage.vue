// src/components/LoginPage.vue

<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig'; // Importa auth de firebaseConfig

const email = ref('');
const password = ref('');

// Función de login
const loginUser = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('Usuario autenticado:', userCredential.user);
    // Aquí puedes redirigir al usuario o realizar alguna acción adicional
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};
</script>
