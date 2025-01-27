<template>
  <AuthProvider>
    <div id="app">
      <MyNavbar />
      <router-view />
    </div>
  </AuthProvider>
</template>

<script setup lang="ts">
import MyNavbar from './components/MyNavbar.vue'
import AuthProvider from './components/AuthProvider.vue'
</script>

<style scoped></style>
