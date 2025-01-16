<template>
  <div id="app">
    <h1>Lista de Tareas</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTaskName" placeholder="Nombre de la tarea" required />
      <input v-model="newTaskDeadline" type="date" required />
      <button type="submit">Agregar Tarea</button>
    </form>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span :class="{ completed: task.completed }">
          {{ task.name }} - Fecha límite: {{ task.deadline }}
        </span>
        <button @click="toggleComplete(index)">
          {{ task.completed ? 'Desmarcar' : 'Completar' }}
        </button>
        <button @click="deleteTask(index)">Eliminar</button>
      </li>
    </ul>

    <p>Total de tareas pendientes: {{ pendingTasksCount }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Lista reactiva de tareas
const tasks = ref([]);

// Datos para la nueva tarea
const newTaskName = ref('');
const newTaskDeadline = ref('');

// Agregar una nueva tarea
const addTask = () => {
  if (newTaskName.value.trim() && newTaskDeadline.value) {
    tasks.value.push({
      name: newTaskName.value,
      deadline: newTaskDeadline.value,
      completed: false,
    });
    newTaskName.value = '';
    newTaskDeadline.value = '';
  }
};

// Cambiar el estado de completado de una tarea
const toggleComplete = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed;
};

// Eliminar una tarea de la lista
const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

// Contar tareas pendientes
const pendingTasksCount = computed(() =>
  tasks.value.filter((task) => !task.completed).length
);
</script>

<style>
.completed {
  text-decoration: line-through;
}
</style>
