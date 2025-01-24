<script lang="ts">
import type { Flower } from '@components/classes/Flower'
import { onMounted, ref } from 'vue'

const flowers = ref<Flower[] | null>(null)

async function getFlowersData() {
  const response = await fetch('flower.json')
  const data = await response.json()
  return data
}

onMounted(async () => {
  flowers.value = await getFlowersData()
})
</script>

<template>
  <div class="product-list">
    <h1>Products</h1>
    <ProductItem
      v-for="flower in flowers"
      :key="flower.id"
      :name="flower.name"
      :description="flower.description"
    />
  </div>
</template>
