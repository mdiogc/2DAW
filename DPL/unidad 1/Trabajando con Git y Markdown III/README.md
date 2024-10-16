# Proyecto Blog Galpón

## Pasos para crear el repositorio y realizar los cambios

1. **Crear el directorio de trabajo y inicializar el repositorio:**
```bash
   mkdir ~/bloggalpon
   cd ~/bloggalpon
   git init
```
2. **Crear el archivo index.html con la estructura básica:**

```bash
echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog Galpón</title>
</head>
<body>
    <section>
        <h1>Bienvenido a Blog Galpón</h1>
    </section>
</body>
</html>' > index.html

```

3 . **Crear un commit indicando que se crea el esqueleto básico del index.html:**

```bash
git add index.html
git commit -m "Crear el esqueleto básico del index.html"
```


Añadir contenido al <head>:

```bash

echo '<link rel="stylesheet" href="style.css">' >> index.html

```

Crear un commit indicando que se añade la cabecera del index.html:

```bash

git add index.html

git commit -m "Añadir la cabecera del index.html"

```

Añadir contenido al <body>:

```bash

echo '<section>

<h1>Bienvenido a Blog Galpón</h1>

<article>

<h2>Título del Post</h2>

<p>Contenido del post aquí.</p>

</article>

</section>' >> index.html

```

Crear un commit indicando que se añade la estructura básica del body:

```bash

git add index.html

git commit -m "Añadir la estructura básica del body"

```


Crear un commit indicando que se añade toda la estructura de la zona de posts:

```bash

git add index.html

git commit -m "Añadir toda la estructura de la zona de posts"

```

Crear el archivo style.css y añadir información básica:

```bash

echo 'html {

font-family: Arial, sans-serif;

}

body {

background-color: #f4f4f4;

margin: 0;

padding: 0;

}' > style.css

```

Crear un commit indicando que se añaden las CSS de html y de body:

```bash

git add style.css

git commit -m "Añadir las CSS de html y de body"

```

Añadir la información para varios elementos HTML5:

```bash

echo 'header, section, article, aside, footer {

margin: 20px;

padding: 20px;

background: white;

border-radius: 5px;

}' >> style.css

```

Crear un commit indicando que se añaden las CSS de varios elementos HTML5:

```bash

git add style.css

git commit -m "Añadir las CSS de varios elementos HTML5: header, section, article, aside y footer"

```

Añadir el logotipo logo.png en el directorio raíz del proyecto: (Asegúrate de tener el archivo logo.png en la ubicación adecuada antes de ejecutar este comando).

```bash

cp /ruta/al/logo.png .

```

Crear un commit indicando que se añade el logotipo de Galpón:

```bash

git add logo.png

git commit -m "Añadir el logotipo de Galpón"

```

Añadir la información para section:

```bash

echo 'section {

border: 1px solid #ccc;

padding: 10px;

}' >> style.css

Crear un commit indicando que se añaden las CSS de section:

```bash

git add style.css

git commit -m "Añadir las CSS de section"

Añadir la información para footer:

```bash

echo 'footer {

background: #333;

color: white;

padding: 10px;

text-align: center;

}' >> style.css

Crear un commit indicando que se añaden las CSS del footer:

```bash

git add style.css

git commit -m "Añadir las CSS del footer"

Añadir la información para H1 y enlaces:

```bash

echo 'h1 {

color: #2c3e50;

}

a {

color: #2980b9;

text-decoration: none;

}' >> style.css

Crear un commit indicando que se añaden las CSS del H1 y de los enlaces:

```bash

git add style.css

git commit -m "Añadir las CSS del H1 y de los enlaces"

Crear una etiqueta de v1.0:

```bash

git tag v1.0

Crear una rama “desarrollo”:

```bash

git checkout -b desarrollo

Crear un directorio de images y mover logo.png:

```bash

mkdir images

mv logo.png images/

Crear un commit indicando que se mueve el logotipo a la carpeta images:

```bash

git add images/logo.png

git commit -m "Mover el logotipo a la carpeta images"

Crear un directorio de CSS y mover style.css:

```bash

mkdir CSS

mv style.css CSS/

Crear un commit indicando que se mueve la CSS a la carpeta CSS:

```bash

git add CSS/style.css

git commit -m "Mover la CSS a la carpeta CSS"

Cambiar las referencias a la CSS en el index.html y al logotipo:

```bash

sed -i 's|href="style.css"|href="CSS/style.css"|' index.html

sed -i 's|images/logo.png"|images/logo.png"|' index.html

Crear un commit indicando que se cambian las referencias a las CSS y a las imágenes:

```bash

git add index.html

git commit -m "Cambiar las referencias a las CSS y a las imágenes"

Crear una rama “bugfix” a partir de la “master”:

```bash

git checkout master

git checkout -b bugfix

Quitar los comentarios en las CSS:

```bash

sed -i '///border/d' CSS/style.css

Crear un commit indicando que se introducen los punteados:

```bash

git add CSS/style.css

git commit -m "Introducir los punteados en la barra derecha y en el footer"

Introducir como título “Galpón”:

```bash

sed -i 's|<title>.*</title>|<title>Galpón</title>|' index.html

Crear un commit indicando que se introduce el título en la página:

```bash

git add index.html

git commit -m "Introducir el título en la página"

Cambiar 2012 por 2014 en el footer y quitar (c): (Asumiendo que el footer tiene el año 2012).

```bash

sed -i 's|2012|2014|' index.html

Crear un commit indicando que se realizan pequeños ajustes en el footer:

```bash

git add index.html

git commit -m "Realizar pequeños ajustes en el footer"

Crear una etiqueta de v1.1:

```bash

git tag v1.1

Llevar estos cambios a la rama “master”:

```bash

git checkout master

git merge bugfix

Borrar la rama “bugfix”:

```bash

git branch -d bugfix

Llevar los cambios de la rama “desarrollo” a la rama “master”:

```bash

git merge desarrollo

Crear una etiqueta de v1.2:

```bash

git tag v1.2
