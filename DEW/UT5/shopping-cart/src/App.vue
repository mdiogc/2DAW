<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">Flower Shop</a>
          <router-link to="/" class="nav-link">Tienda</router-link>
          <router-link to="/cart" class="nav-link">Carrito</router-link>
        </div>
      </nav>
    </header>
    <main class="container my-4">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
export default { name: 'App' }
</script>
