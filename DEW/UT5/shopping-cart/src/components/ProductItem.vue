<template>
    <div class="product-item">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>Price: ${{ product.price }}</p>
      <input type="number" v-model="quantity" min="1" :max="product.stock" />
      <button @click="addToCart">Add to Cart</button>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useCart } from '@/composables/useCart';
  
  export default defineComponent({
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const { addProductToCart } = useCart();
      const quantity = ref(1);
      const error = ref('');
  
      const addToCart = () => {
        try {
          addProductToCart(props.product, quantity.value);
          error.value = '';
        } catch (err) {
          error.value = (err as Error).message;
        }
      };
  
      return { quantity, addToCart, error };
    },
  });
  </script>
  