<script setup lang="ts">
import { ref, provide, onMounted } from 'vue';

const isAuthenticated = ref(false);
const userToken = ref<string | null>(null);

const login = (token: string) => {
  userToken.value = token;
  isAuthenticated.value = true;
  sessionStorage.setItem('authToken', token);
};

const logout = () => {
  userToken.value = null;
  isAuthenticated.value = false;
  sessionStorage.removeItem('authToken');
};

onMounted(() => {
  const token = sessionStorage.getItem('authToken');
  if (token) {
    userToken.value = token;
    isAuthenticated.value = true;
  }
});

provide('auth', {
  isAuthenticated,
  userToken,
  login,
  logout,
});
</script>

<template>
  <slot></slot>
</template>