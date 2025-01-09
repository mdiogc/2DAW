<template>
    <div>
      <h1>User  Profile</h1>
      <div v-if="isAuthenticated">
        <p>Welcome, {{ userToken }}</p>
      </div>
      <div v-else>
        <p>Please log in to view your profile.</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { inject } from 'vue';
  
  const auth = inject('auth') as {
    isAuthenticated: boolean;
    userToken: string | null;
  };
  
  const { isAuthenticated, userToken } = auth;
  </script>