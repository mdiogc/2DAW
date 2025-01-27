<template>
  <div class="login-form">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          maxlength="100"
          required
          @input="validateEmail"
          :class="{ 'is-invalid': emailError }"
        />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          maxlength="20"
          required
          @input="validatePassword"
          :class="{ 'is-invalid': passwordError }"
        />
        <span v-if="passwordError" class="error">{{ passwordError }}</span>
      </div>

      <button type="submit" :disabled="!isFormValid">Iniciar Sesión</button>
    </form>

    <div v-if="message" class="message-box">
      <p>{{ message }}</p>
      <button @click="clearMessage">Cerrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useRouter } from 'vue-router'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseError } from 'firebase/app'

// Variables reactivas
const email = ref<string>('')
const password = ref<string>('')
const message = ref<string>('')

const emailError = ref<string>('')
const passwordError = ref<string>('')

const isAuthenticated = ref<boolean>(false)
const generateToken = inject<() => void>('generateToken') // Inyecta la función para generar el token
const router = useRouter()

// Validación de email
const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = emailRegex.test(email.value) ? '' : 'Formato de correo no válido'
}

// Validación de contraseña
const validatePassword = () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/
  passwordError.value = passwordRegex.test(password.value)
    ? ''
    : 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.'
}

// Validar si el formulario es válido
const isFormValid = computed(() => !emailError.value && !passwordError.value)

// Manejar inicio de sesión
const handleLogin = async () => {
  validateEmail()
  validatePassword()

  if (isFormValid.value) {
    try {
      // Intentar iniciar sesión con Firebase
      await signInWithEmailAndPassword(auth, email.value, password.value)

      // Actualizar estado
      isAuthenticated.value = true
      message.value = '¡Inicio de sesión exitoso!'

      // Generar token si está definido
      if (generateToken) {
        generateToken()
      } else {
        console.warn('generateToken no está definido')
      }

      // Limpiar campos
      clearFields()

      // Navegar a la tienda
      router.push('/shop')
    } catch (error) {
      // Manejar errores de Firebase
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
            message.value = 'Usuario no encontrado. Verifica tu correo electrónico o regístrate.'
            break
          case 'auth/wrong-password':
            message.value = 'Contraseña incorrecta.'
            break
          default:
            message.value = 'Hubo un error al iniciar sesión. Inténtalo de nuevo.'
            break
        }
      } else {
        console.error('Error desconocido:', error)
        message.value = 'Ocurrió un error inesperado. Inténtalo más tarde.'
      }
    }
  }
}

// Limpiar campos del formulario
const clearFields = () => {
  email.value = ''
  password.value = ''
}

// Limpiar mensajes de error
const clearMessage = () => {
  message.value = ''
}
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
.is-invalid {
  border: 1px solid red;
}
.form-group {
  margin-bottom: 15px;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.message-box {
  background: #f8f9fa;
  border: 1px solid #ddd;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
}
</style>
