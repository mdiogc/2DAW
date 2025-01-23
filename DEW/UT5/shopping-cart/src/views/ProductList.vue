<template>
    <div class="product-list">
      <h1>Products</h1>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import ProductItem from '@/components/ProductItem.vue';
  
  export default defineComponent({
    components: { ProductItem },
    setup() {
      const products = [
        { id: '1', name: 'Shirt', price: 20, stock: 10, image: '/shirt.jpg', color: 'red', size: 'M' },
        { id: '2', name: 'Pants', price: 40, stock: 5, image: '/pants.jpg', color: 'blue', size: 'L' },
      ];
      return { products };
    },
  });
  </script>
  