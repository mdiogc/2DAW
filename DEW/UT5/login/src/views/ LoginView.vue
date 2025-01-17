<template>
    <div class="login">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { auth } from '../firebaseConfig'; // Ajusta la ruta si es necesario
  
  export default {
    name: 'LoginView',
    setup() {
      const email = ref('');
      const password = ref('');
  
      const handleLogin = async () => {
        try {
          await signInWithEmailAndPassword(auth, email.value, password.value);
          // Redirigir a la página principal o a la tienda después de iniciar sesión
          this.$router.push('/shop');
        } catch (error) {
          console.error('Error during login:', error.message);
          alert('Invalid credentials or user not found.');
        }
      };
  
      return {
        email,
        password,
        handleLogin,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Estilos para la página de login */
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  h1 {
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  button {
    padding: 0.5rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  