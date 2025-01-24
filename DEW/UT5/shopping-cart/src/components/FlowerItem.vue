<template>
  <div class="card h-100">
    <img :src="flower.image" class="card-img-top" alt="flower image" />
    <div class="card-body">
      <h5 class="card-title">{{ flower.name }}</h5>
      <p class="card-text">${{ flower.price.toFixed(2) }}</p>
      <button class="btn btn-primary w-100" @click="addToCart">Añadir al carrito</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useCartStore } from '@/stores/cart'

export default defineComponent({
  name: 'FlowerItem',
  props: {
    flower: {
      type: Object as PropType<{
        id: number
        name: string
        image: string
        price: number
        quantity: number
      }>,
      required: true,
    },
  },
  setup(props) {
    const cartStore = useCartStore()

    const addToCart = () => {
      cartStore.addToCart(props.flower)
    }

    return { addToCart }
  },
})
</script>

<style scoped>
.card {
  max-width: 18rem;
  margin: 1rem;
}
</style>
