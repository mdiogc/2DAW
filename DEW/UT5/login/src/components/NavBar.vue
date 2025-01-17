<template>
  <header>
    <nav>
      <ul>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style>
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: white;
}

nav a:hover {
  text-decoration: underline;
}
</style>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '../firebaseConfig'; // Asegúrate de que esta ruta sea correcta.

const router = useRouter();

// Estado para verificar si el usuario está autenticado.
const isAuthenticated = ref(auth.currentUser !== null);

// Escuchar cambios en el estado de autenticación.
auth.onAuthStateChanged((user) => {
  isAuthenticated.value = !!user;
});

// Función para cerrar sesión.
const logout = async () => {
  try {
    await auth.signOut();
    router.push('/login'); // Redirige al usuario al login después de cerrar sesión.
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  background-color: #333;
  color: white;
  padding: 1rem;
}

ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 1rem;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
