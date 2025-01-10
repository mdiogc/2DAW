<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted } from 'vue';

const isAuthenticated = ref(false);

// Simulación de la función que genera un token
const generateToken = () => {
  return Math.random().toString(36).substr(2); // Genera un token aleatorio
};

// Al montar el componente, comprobar si hay un token en SessionStorage
onMounted(() => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    isAuthenticated.value = true;
  }
});

// Al desmontar el componente, limpiar la sesión
onUnmounted(() => {
  sessionStorage.removeItem('authToken');
  isAuthenticated.value = false;
});

// Función para iniciar sesión
const login = (email: string, password: string) => {
  // Simula la autenticación
  const token = generateToken();
  sessionStorage.setItem('authToken', token);
  isAuthenticated.value = true;
  return token;
};

provide('authState', isAuthenticated);
provide('login', login);
</script>
