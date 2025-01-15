Instrucciones

    Seleccionar cinco elementos de Bootstrap
    Visita la documentación oficial de Bootstrap y selecciona cinco elementos comunes, como botones, modales, menús desplegables, alertas, o pestañas.

    Consulta las prácticas de WAI-ARIA
    Ve a las WAI-ARIA Authoring Practices y revisa cómo implementar los atributos necesarios para los elementos seleccionados.

    Implementa los siguientes atributos WAI-ARIA:
        Role: Define el propósito del elemento (por ejemplo, role="dialog" para un modal).
        Property: Agrega propiedades que describen al elemento (como aria-labelledby o aria-describedby).
        State: Gestiona los estados del elemento (por ejemplo, aria-expanded="true/false" para menús desplegables).
        Tabindex: Controla el orden de navegación del teclado (tabindex="0", -1, etc.).

    Documenta las mejoras
        Modifica el código HTML para incluir los atributos WAI-ARIA.
        Explica por qué seleccionaste cada atributo y cómo mejora la accesibilidad.
    Entrega

La entrega será el enlace a un repositorio en github que contendrá:

    Un archivo HTML con los cinco elementos sin la mejora (directamente el código de bootstrap) y mejorados. 
    Un README describiendo las mejoras implementadas.

Ejemplo
Elemento seleccionado: Modal de Bootstrap

Código original (documentación de Bootstrap):

<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <p>Contenido del modal...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

Código mejorado con WAI-ARIA:

<div class="modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalTitle">Título del modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body" id="modalDescription">
        <p>Contenido del modal...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>