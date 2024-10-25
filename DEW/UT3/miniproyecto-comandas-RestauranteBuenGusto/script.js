$(document).ready(function () {
    let productosSeleccionados = {};

    $('.menu-btn').click(function () {
        const categoria = $(this).data('category');
        cargarSubCategorias(categoria);
    });

    function cargarSubCategorias(categoria) {
        $('.sub-menu').empty();
        $('.product-list').empty();
       
        const subcategorias = {
            'bebidas': ['Calientes', 'Refrescos', 'Alcohólicas'],
            'primer-plato': ['Sopa', 'Ensalada'],
            'segundo-plato': ['Carne', 'Pescado', 'Vegetariano'],
            'postres': ['Dulces', 'Frutas']
        };

        subcategorias[categoria].forEach(sub => {
            $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategory="${sub}">${sub}</button>`);
        });

        $('.sub-menu-btn').click(function () {
            const subcategoria = $(this).data('subcategory');
            cargarProductos(subcategoria);
        });
    }

    

    $('#enviarComanda').click(function () {
        if (Object.keys(productosSeleccionados).length > 0) {
            $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
            productosSeleccionados = {};
            mostrarProductosSeleccionados();
            $('.product-list').find('.cantidad').text(0);
        } else {
            alert('No hay productos seleccionados para enviar.');
        }
    });
});














        $(document).ready(() => {
            let productosSeleccionados = [];
            let datosProductos = {};
          
            fetch('productos.json')
              .then(response => response.json())
              .then(data => {
                datosProductos = data;
              })
              .catch(error => console.error('Error al cargar el archivo JSON:', error));
          
            $('.menu-btn').click(function() {
              let categoria = $(this).data('category');
              cargarSubCategorias(categoria);
            });
          
            function cargarSubCategorias(categoria) {
              $('.sub-menu').empty();
              
              if (categoria === 'bebidas') {
                subcategorias = ['Calientes', 'Refrescos', 'Alcohólicas'];
              } else if (categoria === 'primer-plato') {
                subcategorias = ['Sopa', 'Ensalada'];
              } else if (categoria === 'segundo-plato') {
                subcategorias = ['Carne', 'Pescado', 'Vegetariano'];
              } else if (categoria === 'postres') {
                subcategorias = ['Dulces', 'Frutas'];
              }
          
              subcategorias.forEach(subcategoria => {
                $('.sub-menu').append(`<button class="sub-menu-btn" data-subcategoria="${subcategoria}">${subcategoria}</button>`);
              });
            }
          
            $(document).on('click', '.sub-menu-btn', function() {
              let subcategoria = $(this).data('subcategoria');
              cargarProductos(subcategoria);
            });
          
            function cargarProductos(subcategoria) {
              $('.product-list').empty();
              let productos = datosProductos[subcategoria];
          
              productos.forEach(producto => {
                $('.product-list').append(`
                  <div class="product-item">
                    <span class="product-label">${producto.nombre}</span>
                    <div class="cantidad-control">
                      <button class="decrementar" data-id="${producto.id}">-</button>
                      <span class="cantidad" id="cantidad-${producto.id}">0</span>
                      <button class="incrementar" data-id="${producto.id}">+</button>
                    </div>
                  </div>
                `);
              });
            }
          
            $(document).on('click', '.incrementar', function() {
              let id = $(this).data('id');
              actualizarCantidad(id, 1);
            });
          
            $(document).on('click', '.decrementar', function() {
              let id = $(this).data('id');
              actualizarCantidad(id, -1);
            });
          
            function actualizarCantidad(id, cambio) {
              let cantidadElem = $(`#cantidad-${id}`);
              let cantidadActual = parseInt(cantidadElem.text());
              let nuevaCantidad = Math.max(cantidadActual + cambio, 0);
              cantidadElem.text(nuevaCantidad);
              actualizarProductosSeleccionados(id, nuevaCantidad);
            }
          
            function actualizarProductosSeleccionados(id, cantidad) {
              let producto = productosSeleccionados.find(item => item.id === id);
              let nombreProducto = obtenerNombreProducto(id);
          
              if (producto) {
                if (cantidad > 0) {
                  producto.cantidad = cantidad;
                } else {
                  productosSeleccionados = productosSeleccionados.filter(item => item.id !== id);
                }
              } else if (cantidad > 0) {
                productosSeleccionados.push({ id, nombre: nombreProducto, cantidad });
              }
              mostrarProductosSeleccionados();
            }
          
            function obtenerNombreProducto(id) {
              let nombre = '';
              Object.keys(datosProductos).forEach(subcategoria => {
                let productoEncontrado = datosProductos[subcategoria].find(producto => producto.id === id);
                if (productoEncontrado) {
                  nombre = productoEncontrado.nombre;
                }
              });
              return nombre;
            }
          
            function mostrarProductosSeleccionados() {
              $('#productos-seleccionados').empty();
              productosSeleccionados.forEach(item => {
                $('#productos-seleccionados').append(`<li>${item.nombre}: ${item.cantidad}</li>`);
              });
            }
          
            $('#enviarComanda').click(() => {
              $('#mensaje-confirmacion').fadeIn().delay(2000).fadeOut();
              productosSeleccionados = [];
              $('.cantidad').text(0);
              mostrarProductosSeleccionados();
            });
          });