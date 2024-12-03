# Ejercicio 1: Imagen sin texto alternativo
**Cambio realizado**:  
Se añadió el atributo `alt` en la etiqueta `<img>` para proporcionar una descripción alternativa de la imagen. Esto ayuda a los usuarios con discapacidades visuales, permitiendo que los lectores de pantalla lean el texto alternativo en lugar de la imagen.

```html
<img src="playa.jpg" alt="Playa soleada con agua cristalina" />
```
# Ejercicio 2: Formulario sin etiquetas y mensajes de error

**Cambio realizado**:
Se añadieron etiquetas <label> para todos los campos de entrada, y se incluyeron mensajes de error dentro de elementos <span> con el atributo role="alert", lo que permite a los usuarios con discapacidad auditiva recibir alertas cuando ocurren errores.
```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre" required />
<span id="nombre-error" role="alert"></span>

```
# Ejercicio 3: Botón no accesible

**Cambio realizado**:
Se reemplazó un div por un button semántico para garantizar que el elemento sea correctamente reconocido como un botón por los lectores de pantalla y facilitar la interacción con el teclado.

```html
<button onclick="alert('Acción realizada')">Presionar</button>
```


# Ejercicio 4: Navegación sin estructura semántica

**Cambio realizado**:
Se añadió un elemento <nav> semántico para envolver la lista de navegación, ayudando a los usuarios a navegar rápidamente por las secciones clave de la página.

```html
<nav>
  <ul>
    <li><a href="#home">Inicio</a></li>
    <li><a href="#services">Servicios</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>
```

# Ejercicio 5: Tabla sin encabezados

**Cambio realizado**:
Se añadió una sección <thead> para los encabezados de la tabla, con etiquetas <th> para asegurar que los lectores de pantalla puedan identificar las columnas adecuadamente.

```html
<thead>
  <tr>
    <th>Nombre</th>
    <th>Email</th>
    <th>Teléfono</th>
  </tr>
</thead>
```

# Ejercicio 6: Contenido dinámico sin notificación

**Cambio realizado**:
Se añadió el atributo aria-live="polite" al contenedor de notificaciones, lo que permite que los lectores de pantalla informen a los usuarios cuando el contenido cambia dinámicamente.

```html
<div aria-live="polite">
  <p>Este es un mensaje importante que debe ser anunciado por el lector de pantalla.</p>
</div>
```

# Ejercicio 7: Contraste bajo

**Cambio realizado**:
Se verificó que el contraste entre el texto y el fondo fuera suficiente, con el fin de garantizar la legibilidad para los usuarios con discapacidades visuales.

```html
<body style="background-color: #ffffff; color: #000000;">
```

# Ejercicio 8: Lista desplegable sin estado

**Cambio realizado**:
Se añadieron los atributos aria-expanded="false" y aria-controls="menu" al botón de la lista desplegable para indicar su estado (expandido o colapsado) y asociarlo con el menú correspondiente.

```html
<button aria-expanded="false" aria-controls="menu">Abrir Menú</button>
```

# Ejercicio 9: Página con contenido multimedia

**Cambio realizado**:
Se añadió un archivo de subtítulos en la etiqueta <track> dentro del <video>, permitiendo que los usuarios con discapacidades auditivas accedan a los subtítulos.

```html
<track kind="subtitles" src="subtitulos_es.vtt" srclang="es" label="Español" />
```


# Ejercicio 10: Página dinámica sin accesibilidad

**Cambio realizado**:
Se añadió el atributo aria-live="assertive" al contenedor de mensajes dinámicos para garantizar que los cambios sean anunciados inmediatamente por el lector de pantalla.

```html
<div aria-live="assertive">
  <p>Este es un mensaje importante.</p>
</div>
```
# Ejercicio 11: Página web de un producto

**Cambio realizado**:
Se añadió el atributo alt en la imagen para proporcionar una descripción alternativa de la imagen del producto.
```html
<img src="zapatos.jpg" alt="Zapatos deportivos de color negro y rojo" />
```

# Ejercicio 12: Blog con múltiples secciones

**Cambio realizado**:
Se utilizaron etiquetas semánticas como <header>, <section>, y <footer>, lo que mejora la estructura del documento y facilita la navegación a los usuarios.

```html
<header>
  <h1>Blog de Tecnología</h1>
</header>
```

# Ejercicio 13: Formulario de inscripción

**Cambio realizado**:
Se añadieron etiquetas <label> para los campos del formulario, mejorando la accesibilidad para los usuarios de lectores de pantalla.
```html
<label for="nombre">Nombre completo</label>
<input type="text" id="nombre" name="nombre" required />
```

# Ejercicio 14: Página con enlaces

**Cambio realizado**:
Se añadieron los atributos title a los enlaces para proporcionar información adicional sobre el destino del enlace a los usuarios.

```html
<a href="#home" title="Ir al inicio">Inicio</a>

```

# Ejercicio 15: Imagen con texto alternativo

**Cambio realizado**:
Se añadió un atributo alt en la imagen para proporcionar una descripción alternativa, mejorando la accesibilidad para usuarios con discapacidades visuales.

```html
<img src="playa.jpg" alt="Playa soleada con agua cristalina" />
```