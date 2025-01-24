<template>
  <div class="card h-100">
    <img :src="flower.image" class="card-img-top" alt="flower image" />
    <div class="card-body">
      <h5 class="card-title">{{ flower.name }}</h5>
      <p class="card-text">{{ flower.description }}</p>
      <p class="card-text fw-bold">${{ flower.price.toFixed(2) }}</p>
      <button
        class="btn btn-primary w-100"
        :disabled="flower.quantity === 0"
        @click="addToCart(flower)"
      >
        {{ flower.quantity > 0 ? 'Añadir al carrito' : 'Agotado' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Flower } from './classes/Flower';
import { useCart } from '@/composable/useCart';

const prop = defineProps<{
  flower: Flower;
}>();

const { addToCart } = useCart();
</script>

<style scoped>
.card {
  max-width: 18rem;
  margin: 1rem;
}
</style>
