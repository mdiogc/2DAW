<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <div v-if="cart.items.length > 0">
      <div v-for="(item, index) in cart.items" :key="item.id" class="cart-item">
        <p>{{ item.name }} - ${{ item.price }} x {{ item.quantity }}</p>
        <button @click="removeItem(item.id)">Remove</button>
        <button @click="updateQuantity(item.id, 'increment')">+</button>
        <button @click="updateQuantity(item.id, 'decrement')">-</button>
      </div>
      <div class="summary">
        <p>Total: ${{ cart.totalPrice }}</p>
        <p>IGIC (7%): ${{ calculateIGIC }}</p>
        <button @click="clearCart">Clear Cart</button>
      </div>
    </div>
    <p v-else>Your cart is empty!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCart } from '../composables/useCart';

export default defineComponent({
  setup() {
    const { cart, calculateIGIC } = useCart();
    const removeItem = (id: string) => cart.removeProduct(id);
    const updateQuantity = (id: string, action: 'increment' | 'decrement') => {
      if (action === 'increment') {
        cart.incrementQuantity(id);
      } else {
        cart.decrementQuantity(id);
      }
    };
    const clearCart = () => cart.clearCart();

    return { cart, removeItem, updateQuantity, clearCart, calculateIGIC };
  },
});
</script>