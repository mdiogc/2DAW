<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'

const isAuthenticated = ref(false)
const token = ref<string | null>(null)
const tokenExpiration = ref<number | null>(null)
const router = useRouter()

// Función para simular la generación de un token
const generateToken = () => {
  const newToken = 'not_token_123' // Simulamos un token
  const expirationTime = Date.now() + 30000 // 5 minutos
  sessionStorage.setItem('authToken', newToken)
  sessionStorage.setItem('tokenExpiration', expirationTime.toString())
  token.value = newToken
  tokenExpiration.value = expirationTime
  isAuthenticated.value = true
  return token
}

// Verificar si el token está presente y no ha expirado en sessionStorage
onMounted(() => {
  const storedToken = sessionStorage.getItem('authToken')
  const storedExpiration = sessionStorage.getItem('tokenExpiration')
  if (storedToken && storedExpiration) {
    const expirationTime = parseInt(storedExpiration, 10)
    if (Date.now() < expirationTime) {
      token.value = storedToken
      tokenExpiration.value = expirationTime
      isAuthenticated.value = true
    } else {
      // Token ha expirado
      sessionStorage.removeItem('authToken')
      sessionStorage.removeItem('tokenExpiration')
      token.value = null
      tokenExpiration.value = null
      isAuthenticated.value = false
      router.push('/login') // Redirige al usuario al login
    }
  } else {
    isAuthenticated.value = false
  }
})

// Limpiar datos al cerrar sesión
const logout = () => {
  sessionStorage.removeItem('authToken')
  sessionStorage.removeItem('tokenExpiration')
  token.value = null
  tokenExpiration.value = null
  isAuthenticated.value = false
}

provide('isAuthenticated', isAuthenticated)
provide('token', token)
provide('generateToken', generateToken)
provide('logout', logout)
</script>
