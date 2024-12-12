Instrucciones:

    Crea una aplicación Vue.js usando la Composition API.

    Implementa una lista de tareas donde:

        Cada tarea se represente como un objeto reactivo con las siguientes propiedades:

            nombre: (String) Título de la tarea.

            completado: (Boolean) Indica si la tarea está completada.

            fechaLimite: (Date) Fecha límite para completar la tarea.

        La lista de tareas debe ser un arreglo reactivo.

    Proporciona las siguientes funcionalidades:

        Agregar tareas: Un formulario con campos para ingresar nombre y fecha límite. La tarea se agrega con completado en false.

        Marcar como completado: Cada tarea debe tener un botón para cambiar el estado completado a true.

        Eliminar tareas: Botón para eliminar tareas de la lista.

        Mostrar tareas pendientes/completadas: Un filtro para alternar entre mostrar tareas pendientes y completadas.

Requisitos técnicos:

    Usa ref o reactive para gestionar el estado de las tareas y la lista.

    Utiliza computed para calcular y mostrar la lista filtrada.

    Usa un formulario controlado con el evento @submit.prevent para agregar nuevas tareas.

    Implementa directivas como v-for, v-if, y v-bind.
