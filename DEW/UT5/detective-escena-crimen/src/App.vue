<template>
  <CrimeScene>
    <ClueList :clues="clues">
      <template #clue="{ clue }">
        <strong>{{ clue.description }}</strong> (Importancia: {{ clue.importance }})
      </template>
    </ClueList>
    <button @click="resolveCase">Resolver el Caso</button>
    <DialogueBox>
      <template #header>Testigo</template>
      <template #content>He visto algo sospechoso...</template>
      <template #footer>Gracias por su testimonio.</template>
    </DialogueBox>
  </CrimeScene>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CrimeScene from './components/CrimeScene.vue';
import ClueList from './components/ClueList.vue';
import DialogueBox from './components/DialogueBox.vue';

interface Clue {
  id: number;
  description: string;
  importance: number;
}

export default defineComponent({
  name: 'App',
  components: {
    CrimeScene,
    ClueList,
    DialogueBox,
  },
  data() {
    return {
      clues: [
        { id: 1, description: 'Huellas de zapatos', importance: 3 },
        { id: 2, description: 'Un vaso roto', importance: 2 },
        { id: 3, description: 'Un sobre sospechoso', importance: 5 },
      ] as Clue[],
    };
  },
  methods: {
    resolveCase() {
      const keyClues = this.clues.filter(clue => clue.importance >= 3);
      if (keyClues.length > 0) {
        const clueDescriptions = keyClues.map(clue => clue.description).join(', ');
        alert(`El caso está resuelto. Pistas clave: ${clueDescriptions}`);
      } else {
        alert('No hay suficientes pistas clave para resolver el caso.');
      }
    },
  },
});
</script>

<style>
button {
  margin-top: 20px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>