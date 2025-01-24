<template>
  <div class="flower-list">
    <h1>Flower Shop</h1>
    <div class="flowers">
      <ProductItem
        v-for="flower in flowers"
        :key="flower.id"
        :name="flower.name"
        :image="flower.image"
        :description="flower.description"
        :price="flower.price"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import type { Flower } from '@/components/classes/Flower'
import ProductItem from '@/components/FlowerItem.vue' // Asegúrate de importar el componente correctamente

const flowers = ref<Flower[]>([])

async function getFlowersData() {
  const response = await fetch('flower.json')
  const data = await response.json()
  return data
}

onMounted(async () => {
  flowers.value = await getFlowersData()
})
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
}

button {
  font-size: 1rem;
}
</style>
