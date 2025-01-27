<template>
  <div>
    <h1>Tienda</h1>
    <div v-if="!isAuthenticated" class="alert">
      <p>Debes autenticarte para acceder a la tienda.</p>
      <button @click="redirectToLogin">Ir al Login</button>
    </div>
    <div v-else>
      <p>Bienvenido a nuestra tienda, donde encontrarás productos maravillosos.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { auth } from '../firebase' // Importar la autenticación de Firebase
import { useRouter } from 'vue-router' // Importar el router para redirigir

const isAuthenticated = ref(false)
const router = useRouter() // Obtener instancia del router

// Comprobar si el usuario está autenticado al montar el componente
onMounted(() => {
  isAuthenticated.value = !!auth.currentUser // Si hay un usuario logueado, es verdadero
})

// Función para redirigir al login si no está autenticado
const redirectToLogin = () => {
  router.push('/login') // Redirige a la página de login
}
</script>

<style scoped>
.alert {
  color: red;
  font-size: 16px;
  background-color: #f8d7da;
  padding: 10px;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>
