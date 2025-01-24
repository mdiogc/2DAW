<template>
  <div class="cart">
    <h3>Carrito de Compras</h3>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} (x{{ item.quantity }}) - ${{ (item.price * item.quantity).toFixed(2) }}
        <button @click="removeFromCart(item.id)">Eliminar</button>
      </li>
    </ul>
    <p>Total: ${{ totalPrice }}</p>
    <button @click="clearCart">Vaciar carrito</button>
  </div>
</template>

<script setup lang="ts">
import { useCart } from '@/composable/useCart'

const { cartItems, totalPrice, clearCart, removeFromCart } = useCart()
</script>
