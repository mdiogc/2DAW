class Mago {
    constructor(nombre, hechizo) {
        this.nombre = nombre;
        this.hechizo = hechizo;
    }
}

class Hechizo {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

const mago1 = new Mago("Gandalf", new Hechizo("Expelliarmus", 80));
const mago2 = new Mago("Saruman", new Hechizo("Avada Kedavra", 90));

document.getElementById('dueloBtn').onclick = function() {
    const resultado = mago1.hechizo.poder > mago2.hechizo.poder ? mago1.nombre : mago2.nombre;
    document.getElementById('resultadoDuelo').textContent = "El ganador es: " + resultado;
};
