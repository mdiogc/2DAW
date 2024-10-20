document.getElementById('codigoSecreto').oninput = function() {
    const mensaje = document.getElementById('mensaje');
    if (this.value === "Vengadores") {
        mensaje.textContent = "Assemble!";
    } else {
        mensaje.textContent = "Introduce el código secreto";
    }
};
