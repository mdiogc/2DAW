<template>
  <div>
    <h2>Perfil de Usuario</h2>
    <p v-if="isAuthenticated">Usuario autenticado con token: {{ token }}</p>
    <p v-else>No estás autenticado.</p>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const isAuthenticated = inject('isAuthenticated')
const token = inject('token')
</script>
