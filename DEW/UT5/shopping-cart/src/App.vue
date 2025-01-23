<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Tienda</router-link></li>
          <li><router-link to="/cart">Carrito</router-link></li>
        </ul>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>&copy; 2025 Carrito de Compras Profesional</p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
}

header {
  background-color: #2c3e50;
  padding: 1rem;
  color: white;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a.router-link-active {
  border-bottom: 2px solid #1abc9c;
}

footer {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  margin-top: 2rem;
}
</style>
