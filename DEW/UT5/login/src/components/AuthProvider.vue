<script setup>
import { provide, ref, onMounted } from 'vue';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Estado reactivo para almacenar la información del usuario autenticado
const user = ref(null);

// Función para iniciar sesión
const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    user.value = userCredential.user;
  } catch (error) {
    console.error('Error al iniciar sesión:', error.message);
  }
};

// Función para cerrar sesión
const logout = async () => {
  try {
    await signOut(auth);
    user.value = null;
  } catch (error) {
    console.error('Error al cerrar sesión:', error.message);
  }
};

// Detectar cambios en el estado de autenticación
onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});

// Proveer funciones y estado a los hijos
provide('auth', {
  user,
  login,
  logout,
});
</script>

<template>
  <div>
    <slot></slot>
  </div>
</template>
