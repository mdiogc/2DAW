<script setup lang="ts">
import { inject } from 'vue';

const authState = inject('authState');
</script>

<template>
  <nav>
    <ul>
      <li v-if="authState">
        <a href="/home">Home</a>
        <a href="/profile">Perfil</a>
      </li>
      <li v-else>
        <a href="/login">Iniciar sesión</a>
      </li>
    </ul>
  </nav>
</template>
