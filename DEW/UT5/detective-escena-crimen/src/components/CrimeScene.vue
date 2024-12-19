<template>
  <div class="crime-scene">
    <h1>Escena del Crimen</h1>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CrimeScene',
};
</script>

<style scoped>
.crime-scene {
  border: 2px solid black;
  padding: 20px;
  background-color: #f8f8f8;
}
</style>