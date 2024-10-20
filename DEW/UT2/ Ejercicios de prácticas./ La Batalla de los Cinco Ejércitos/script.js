class Ejercito {
    constructor(nombre, numeroSoldados, fuerza) {
        this.nombre = nombre;
        this.numeroSoldados = numeroSoldados;
        this.fuerza = fuerza;
    }
}

function simularBatalla(ejercitos) {
    let ganador = ejercitos[0];
    for (let i = 1; i < ejercitos.length; i++) {
        if (ejercitos[i].fuerza > ganador.fuerza) {
            ganador = ejercitos[i];
        }
    }
    return ganador;
}

function iniciarSimulacion() {
    const ejercitos = [
        new Ejercito("Ejército de Gondor", 1000, Math.floor(Math.random() * 21) + 80),
        new Ejercito("Ejército de Mordor", 1200, Math.floor(Math.random() * 21) + 70),
        new Ejercito("Ejército de Rohan", 800, Math.floor(Math.random() * 16) + 75),
        new Ejercito("Ejército de Isengard", 950, Math.floor(Math.random() * 16) + 85),
        new Ejercito("Ejército de Elfos", 700, Math.floor(Math.random() * 21) + 90)
    ];

    let resultado = '';
    ejercitos.forEach(ej => {
        resultado += `Ejército: ${ej.nombre}, Soldados: ${ej.numeroSoldados}, Fuerza: ${ej.fuerza}<br>`;
    });

    const ganador = simularBatalla(ejercitos);
    resultado += `<br><strong>El ganador de la batalla es:</strong> ${ganador.nombre} con fuerza ${ganador.fuerza}.`;

    document.getElementById('resultado').innerHTML = resultado;
}

document.getElementById('simular-btn').addEventListener('click', iniciarSimulacion);
