
## Inserción de registros en la base de datos.
Cambiamos y añadimos contenido al documento de conexión.

```php
<?php

    echo "<pre>";

    $conn = mysqli_connect( 'localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

    // sentencia sql para incertar datos en la base de datos
    $insert = "insert into users( name, email) values( 'marina', 'mdiogcasko@gmail.com')";

    // ejecuta una consulta en la base de datos
    $return = mysqli_query ( $conn, $insert);

    // muestra el valor de la sentencia por pantalla
    print_r( ( $return));

    // cerramos la conecion al servidor
    mysqli_close( $conn)

?>
```

Comprobamos que los datos hayan sido insertado en `phpMyAdmin`.


## Leer registros de la base de datos.
Leemos los datos con `mysqli_query` en un archivo que llamamos `leer.php`.

```php
<?php
echo "<pre>";

$conn = mysqli_connect('localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

$sql = 'select id, name, email, created from users';
$result = mysqli_query($conn, $sql);
print_r($result);

?>
```



Esta es la segunda forma leer datos, mediante `mysqli_fetch_all`.

```php
<?php
echo "<pre>";

$conn = mysqli_connect('localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

$sql = 'select id, name, email, created from users';
$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_all($result);
print_r($rows);

?>
```

Esta es la tercera forma de leer datos, muy similar a la segunda pero con un bucle `do`.

```php
<?php
$conn = mysqli_connect('localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

$sql = 'select id, name, email, created from users';
$result = mysqli_query($conn, $sql);
$rows = mysqli_fetch_array($result, MYSQLI_NUM);

do {
    $data[] = $rows;
} while ($rows = mysqli_fetch_array($result, MYSQLI_NUM));

echo "<pre>";
print_r($data);

?>
```


## Actualizar la base de datos.
Actualizamos los datos mediante un archivo `update.php` con el siguiente código.

```php
<?php

echo "<pre>";
$conn = mysqli_connect('localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

$sql = 'UPDATE users SET name = "vivian" WHERE id = 2';
$result = mysqli_query($conn, $sql);
print_r($result);

mysqli_close($conn);

?>
```


## Borrar la base de datos.
Borramos los datos mediante un archivo `update.php` con el siguiente código.

```php
<?php

echo "<pre>";
$conn = mysqli_connect('localhost', 'nombreUsuario', 'contraseñaUsuario', 'prueba');

$sql = 'DELETE FROM users WHERE id = 2';
$result = mysqli_query($conn, $sql);
print_r($result);

mysqli_close($conn);

?>
```