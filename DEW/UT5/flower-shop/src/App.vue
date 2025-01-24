<template>
  <div id="app">
    <!-- Navbar con enlaces de navegación -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">🌸 Flower Shop</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link" active-class="active"> Tienda </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cart" class="nav-link" active-class="active"> Carrito </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenido principal renderizado por las rutas -->
    <main class="container mt-4">
      <router-view />
      <!-- Aquí se mostrarán los componentes según la ruta -->
    </main>

    <!-- Pie de página -->
    <footer class="bg-dark text-light text-center py-3 mt-4">
      <p>&copy; 2025 Flower Shop - Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// No es necesario importar los componentes directamente aquí, ya que se gestionan a través de Vue Router
// Vue Router se encarga de renderizar los componentes según la ruta seleccionada
</script>

<style>
/* Estilo global opcional */
#app {
  font-family: 'Arial', sans-serif;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
