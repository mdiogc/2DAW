<template>
  <div class="register-form">
    <h2>Registrarse</h2>
    <form @submit.prevent="handleRegister">
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

      <div class="form-group">
        <label for="confirmPassword">Confirmar Contraseña:</label>
        <input
          id="confirmPassword"
          type="password"
          v-model="confirmPassword"
          maxlength="20"
          required
          @input="validateConfirmPassword"
          :class="{ 'is-invalid': confirmPasswordError }"
        />
        <span v-if="confirmPasswordError" class="error">{{ confirmPasswordError }}</span>
      </div>

      <button type="submit" :disabled="!isFormValid">Registrarse</button>
    </form>
    <div v-if="message" class="message-box">
      <p>{{ message }}</p>
      <button @click="clearMessage">Cerrar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { auth, createUserWithEmailAndPassword } from '../firebase'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const message = ref('')

const emailError = ref('')
const passwordError = ref('')
const confirmPasswordError = ref('')

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailError.value = emailRegex.test(email.value) ? '' : 'Formato de correo no válido'
}

const validatePassword = () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/
  passwordError.value = passwordRegex.test(password.value)
    ? ''
    : 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.'
}

const validateConfirmPassword = () => {
  confirmPasswordError.value =
    password.value === confirmPassword.value ? '' : 'Las contraseñas no coinciden.'
}

const isFormValid = computed(
  () => !emailError.value && !passwordError.value && !confirmPasswordError.value,
)

const handleRegister = async () => {
  validateEmail()
  validatePassword()
  validateConfirmPassword()

  if (isFormValid.value) {
    try {
      await createUserWithEmailAndPassword(auth, email.value, password.value)
      message.value = '¡Registro exitoso!'
      clearFields()
    } catch (error: any) {
      // Manejamos errores de Firebase (por ejemplo, email ya en uso)
      if (error.code === 'auth/email-already-in-use') {
        message.value = 'Este correo electrónico ya está registrado.'
      } else if (error.code === 'auth/weak-password') {
        message.value = 'La contraseña es demasiado débil.'
      } else {
        message.value = 'Hubo un error al registrarse. Inténtalo de nuevo.'
      }
    }
  }
}

const clearFields = () => {
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}

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
  background-color: #28a745;
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
