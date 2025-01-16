
<template>
  <div v-if="user">Welcome, {{ user.displayName }}!</div>
  <div v-else>Please log in.</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const user = ref(null);

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});
</script>
