<template>
  <div class="dialogue-box">
    <h3><slot name="header">Diálogo</slot></h3>
    <p><slot name="content">Contenido del diálogo.</slot></p>
    <footer><slot name="footer">Fin del diálogo.</slot></footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DialogueBox',
};
</script>

<style scoped>
.dialogue-box {
  border: 1px solid gray;
  padding: 10px;
  background-color: #e0e0e0;
}
</style>