class Gema {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
}

class Thanos {
    constructor() {
        this.gemas = [];
    }

    recolectarGema(gema) {
        this.gemas.push(gema);
    }

    calcularPoderTotal() {
        return this.gemas.reduce((total, gema) => total + gema.poder, 0);
    }
}

const thanos = new Thanos();

document.getElementById('recolectarBtn').onclick = function() {
    const nuevaGema = new Gema("Gema Aleatoria", Math.floor(Math.random() * 100) + 1);
    thanos.recolectarGema(nuevaGema);
    document.getElementById('poderTotal').textContent = "Poder total: " + thanos.calcularPoderTotal();
};
