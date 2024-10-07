# Guía para Crear y Gestionar Bases de Datos con PHP y XAMPP
## Iniciar el Servidor XAMPP

1. Abre el Panel de Control de XAMPP.
2. Inicia **Apache** y **MySQL** haciendo clic en "Start" junto a cada uno.

## 3. Acceder a phpMyAdmin

1. Abre un navegador web y escribe la siguiente dirección:

http://localhost/phpmyadmin/


2. Esto te llevará a **phpMyAdmin**, una herramienta web que te permite gestionar bases de datos MySQL.

## 4. Crear una Base de Datos

1. En phpMyAdmin, busca y selecciona la opción "Base de datos" en la parte superior.
2. En el campo "Crear base de datos", introduce el nombre de tu base de datos (por ejemplo, `mi_base_de_datos`).
3. Selecciona el **intercalado** (collation) que deseas (por ejemplo, `utf8_general_ci`) y haz clic en "Crear".

## 5. Crear Tablas y Campos

1. Una vez que has creado la base de datos, selecciona tu base de datos en el panel de la izquierda.
2. Verás un formulario para crear una nueva tabla. Escribe el nombre de la tabla (por ejemplo, `usuarios`) y define el número de columnas que deseas (por ejemplo, `3`), luego haz clic en "Continuar".
3. Ahora deberías estar en una página donde puedes definir los campos de tu tabla. Aquí es donde defines cada columna:
- **Nombre del campo**: el nombre del campo (por ejemplo, `id`, `nombre`, `email`).
- **Tipo**: el tipo de dato (por ejemplo, `INT`, `VARCHAR`, `TEXT`, `DATE`, etc.).
- **Longitud/Valores**: si aplica, define la longitud (por ejemplo, `255` para un `VARCHAR`).
- **Marcar como `AUTO_INCREMENT`**: si deseas que `id` se incremente automáticamente (usualmente para la clave primaria).
- **Marcar como `PRIMARY KEY`**: si este campo es la clave primaria.

4. Una vez que hayas definido todos los campos, haz clic en "Guardar".

## 6. Conectar PHP a la Base de Datos

Ahora que has creado la base de datos y las tablas, puedes conectar tu aplicación PHP a la base de datos. Crea un archivo PHP (por ejemplo, `conexion.php`) y utiliza el siguiente código para realizar la conexión:

```php
<?php
$servidor = "localhost"; // El servidor de la base de datos
$usuario = "root"; // El usuario de la base de datos (por defecto es root)
$contraseña = ""; // La contraseña (por defecto está vacía)
$base_de_datos = "mi_base_de_datos"; // El nombre de la base de datos

// Crear conexión
$conn = new mysqli($servidor, $usuario, $contraseña, $base_de_datos);

// Comprobar la conexión
if ($conn->connect_error) {
 die("Error de conexión: " . $conn->connect_error);
}
echo "Conexión exitosa";
?>
```

## Guarda el archivo como conexion.php en la carpeta htdocs dentro de tu instalación de XAMPP (por ejemplo, C:\xampp\htdocs\mi_proyecto\conexion.php).

- Abre un navegador y accede a la dirección:


http://localhost/mi_proyecto/conexion.php