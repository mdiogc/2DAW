<template>
    <div class="cart">
      <h2>Your Cart</h2>
      <div v-if="cart.items.length">
        <div v-for="item in cart.items" :key="item.id" class="cart-item">
          <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
          <button @click="remove(item.id)">Remove</button>
        </div>
        <div class="summary">
          <p>Total: ${{ cart.totalPrice }}</p>
          <p>IGIC (7%): ${{ calculateIGIC() }}</p>
          <button @click="clearCart">Clear Cart</button>
        </div>
      </div>
      <p v-else>Your cart is empty!</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useCart } from '@/composables/useCart';
  
  export default defineComponent({
    setup() {
      const { cart, calculateIGIC } = useCart();
      const remove = (id: string) => cart.removeProduct(id);
      const clearCart = () => cart.clearCart();
  
      return { cart, remove, clearCart, calculateIGIC };
    },
  });
  </script>
  