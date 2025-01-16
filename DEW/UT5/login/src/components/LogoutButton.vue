
<template>
  <button @click="logoutUser">Logout</button>
</template>

<script setup lang="ts">
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('Sesión cerrada');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};
</script>
