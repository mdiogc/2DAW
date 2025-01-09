<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const auth = inject('auth') as {
  login: (token: string) => void;
};

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  const fakeToken = 'fake-jwt-token';
  auth.login(fakeToken); 
  router.push('/'); 
};
</script>