$(document).ready(function(){
    $("#agregar-tarea").click(function() {
        const tarea = $("#nueva-tarea").val();
        if (tarea.trim() !== "") {
            const nuevaTarea = `
                <li>
                    <span class="nombre-tarea">${tarea}</span>
                    <button class="editar-tarea">Editar</button>
                    <button class="eliminar-tarea">Eliminar</button>
                </li>`;
            $("#lista-tareas").append(nuevaTarea);
            $("#nueva-tarea").val(""); 
        }
    });

    // Función para eliminar una tarea
    $(document).on("click", ".eliminar-tarea", function() {
        $(this).parent().remove(); 
    });

    // Función para editar una tarea
    $(document).on("click", ".editar-tarea", function() {
        const nombreActual = $(this).siblings(".nombre-tarea").text();
        const nuevoNombre = prompt("Editar misión:", nombreActual);
        if (nuevoNombre && nuevoNombre.trim() !== "") {
            $(this).siblings(".nombre-tarea").text(nuevoNombre);
        }
    });

    // Función para limpiar todas las tareas
    $("#limpiar-tareas").click(function() {
        $("#lista-tareas").empty(); 
    });
});
