<template>
  <div class="cart">
    <h1>Carrito de Compras</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        <span>{{ item.name }}</span>
        <span>{{ item.quantity }}</span>
        <span>{{ item.price * item.quantity }}</span>
        <button @click="removeItem(item.id)">Eliminar</button>
      </li>
    </ul>
    <button @click="emptyCart">Vaciar Carrito</button>
    <div>Total: {{ totalPrice }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cart')) || [],
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
  methods: {
    removeItem(id) {
      this.cartItems = this.cartItems.filter((item) => item.id !== id)
      this.updateLocalStorage()
    },
    emptyCart() {
      this.cartItems = []
      this.updateLocalStorage()
    },
    updateLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
    },
  },
}
</script>

<style scoped>
.cart {
  padding: 20px;
}
</style>
