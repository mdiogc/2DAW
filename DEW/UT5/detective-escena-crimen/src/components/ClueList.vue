<template>
  <div class="clue-list">
    <h2>Pistas Encontradas</h2>
    <ul>
      <li v-for="clue in sortedClues" :key="clue.id">
        <slot name="clue" :clue="clue">
          {{ clue.description }} (Importancia: {{ clue.importance }})
        </slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface Clue {
  id: number;
  description: string;
  importance: number;
}

export default defineComponent({
  name: 'ClueList',
  props: {
    clues: {
      type: Array as PropType<Clue[]>,
      required: true,
    },
  },
  computed: {
    sortedClues() {
      return this.clues.sort((a, b) => b.importance - a.importance);
    },
  },
});
</script>

<style scoped>
.clue-list {
  margin-top: 20px;
}
</style>