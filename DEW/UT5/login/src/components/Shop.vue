<script setup>
import { inject } from 'vue';

const { user } = inject('auth');

if (!user.value) {
  alert('Debes autenticarte para acceder a la tienda.');
}
</script>

<template>
  <div v-if="user">
    <h1>Tienda</h1>
  </div>
</template>
