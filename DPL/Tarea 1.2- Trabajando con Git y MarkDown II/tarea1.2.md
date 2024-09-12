# Tarea 1.2 - Trabajando con Git y Markdown II

Esta tarea es continuación de la anterior, por lo que utilizaremos el mismo repositorio. Todos los comandos, explicaciones y capturas de pantalla utilizados durante el ejercicio deben incluirse en este fichero `README.md`.

## Instrucciones

### 1. Crear una Rama `v0.2` (1 Punto)
- Crear una rama `v0.2` y posicionarse en ella.
    ```bash
    git checkout -b v0.2
    ```

### 2. Añadir el Fichero `2.txt` (1 Punto)
- Añadir un fichero `2.txt` en la rama `v0.2`.
    ```bash
    echo "Contenido del fichero 2.txt" > 2.txt
    git add 2.txt
    git commit -m "Añadido fichero 2.txt en la rama v0.2"
    ```

### 3. Crear una Rama Remota `v0.2` (1 Punto)
- Subir los cambios al repositorio remoto.
    ```bash
    git push origin v0.2
    ```

### 4. Merge Directo (1 Punto)
- Posicionarse en la rama `master` y hacer un merge de la rama `v0.2`.
    ```bash
    git checkout master
    git merge v0.2
    git push origin master
    ```

### 5. Merge con Conflicto (1 Punto)
- En la rama `master`, poner "Hola" en el fichero `1.txt` y hacer commit.
    ```bash
    git checkout master
    echo "Hola" > 1.txt
    git add 1.txt
    git commit -m "Añadido 'Hola' al fichero 1.txt en la rama master"
    ```

- Posicionarse en la rama `v0.2`, poner "Adios" en el fichero `1.txt` y hacer commit.
    ```bash
    git checkout v0.2
    echo "Adios" > 1.txt
    git add 1.txt
    git commit -m "Añadido 'Adios' al fichero 1.txt en la rama v0.2"
    ```

- Posicionarse de nuevo en la rama `master` y hacer un merge con la rama `v0.2` para generar el conflicto.
    ```bash
    git checkout master
    git merge v0.2
    ```

### 6. Listado de Ramas (1 Punto)
- Listar las ramas con merge y las ramas sin merge.
    ```bash
    git branch --merged
    git branch --no-merged
    ```

### 7. Arreglar Conflicto (1 Punto)
- Editar `1.txt` para resolver el conflicto y hacer un commit. 
    ```bash
    # Editar 1.txt manualmente para combinar cambios.
    git add 1.txt
    git commit -m "Resuelto conflicto en 1.txt"
    ```

### 8. Borrar Rama (1 Punto)
- Crear un tag `v0.2` y borrar la rama `v0.2`.
    ```bash
    git tag v0.2
    git push origin v0.2
    git branch -d v0.2
    git push origin --delete v0.2
    ```

### 9. Listado de Cambios (1 Punto)
- Listar los distintos commits con sus ramas y sus tags.
    ```bash
    git log --oneline --decorate --all --graph
    ```

### 10. Crear una Organización (1 Punto)
- Crear una organización llamada `orgdpl-tunombredeusuariodegithub`.

### 11. Crear Equipos (1 Punto)
- Crear dos equipos en la organización:
  - **Administradores**: Con más permisos.
  - **Colaboradores**: Con menos permisos.
- Añadir a `github.com/amarzar` y a dos compañeros en cada equipo.

### 12. Crear un `index.html` (1 Punto)
- Crear un archivo `index.html` en el repositorio de la organización para que se pueda ver como página web.

### 13. Crear Pull Requests (1 Punto)
- Hacer **fork** de dos repositorios de organizaciones en las que no seas administrador ni colaborador.
- Crear una rama en cada **fork** y modificar `index.html` añadiendo tu nombre.
- Hacer un **pull request** con cada rama.

### 14. Gestionar Pull Requests (1 Punto)
- Gestionar los **pull requests** en los repositorios de las organizaciones.

---

Asegúrate de seguir todos los pasos y de incluir todos los comandos utilizados junto con explicaciones y capturas de pantalla en este archivo `README.md`.
