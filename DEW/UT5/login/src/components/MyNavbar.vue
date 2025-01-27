<template>
  <nav>
    <ul>
      <li><router-link to="/shop">Tienda</router-link></li>
      <li v-if="!isAuthenticated">
        <router-link to="/login">Iniciar Sesión</router-link>
      </li>
      <li v-if="!isAuthenticated">
        <router-link to="/signup">Registrarse</router-link>
      </li>
      <li v-if="isAuthenticated">
        <router-link to="/profile">Perfil</router-link>
      </li>
      <li v-if="isAuthenticated">
        <button @click="handleLogout">Cerrar Sesión</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useRouter } from 'vue-router'
import { auth, signOut } from '../firebase'
import { ref } from 'vue'

const isAuthenticated = ref<boolean>(false)
const logout: any = inject('logout')
const router = useRouter()

// Función para manejar el cierre de sesión
const handleLogout = async () => {
  try {
    await signOut(auth) // Firebase cierra la sesión
    isAuthenticated.value = false // Actualiza el estado de autenticación
    logout() // Elimina el estado de autenticación global (si lo tienes configurado en tu app)
    router.push('/login') // Redirige al usuario al login
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
    alert('Hubo un error al cerrar sesión. Intenta nuevamente.')
  }
}
</script>

<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 15px;
}
nav ul li {
  display: inline;
}
nav ul li a {
  text-decoration: none;
  color: #007bff;
}
nav ul li a.router-link-active {
  font-weight: bold;
  color: #0056b3;
}
button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}
button:hover {
  background-color: #d32f2f;
}

li:hover {
  opacity: 0.7;
}
</style>
