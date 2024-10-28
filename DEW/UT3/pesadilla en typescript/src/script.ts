// Ejercicio D1S1.1.1
const message: string = "Bienvenido a la pesadilla de TypeScript!";
const output1 = document.getElementById("output1");
if (output1) output1.innerText = message;

// Ejercicio D1S1.1.2
const Freddy = {
    nombre: "Freddy Krueger",
    edad: 40,
    pesadilla: "Pesadillas de Elm Street"
};
const output2 = document.getElementById("output2");
if (output2) output2.innerText = `Nombre: ${Freddy.nombre}, Edad: ${Freddy.edad}, Pesadilla: ${Freddy.pesadilla}`;

// Ejercicio D1S2.1.1
function atacar(arma: string): void {
    const output3 = document.getElementById("output3");
    if (output3) output3.innerText = `Freddy ataca con ${arma}`;
}
atacar("guante con cuchillas");

// Ejercicio D1S2.1.2
function saltar(metros: number = 5): void {
    const output4 = document.getElementById("output4");
    if (output4) output4.innerText = `Freddy salta ${metros} metros`;
}
saltar(); // Llamada sin parámetro, usa el valor por defecto
saltar(10); // Llamada con parámetro

// Ejercicio D1S2.2.1
class Pesadilla {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return `${this.nombre.toUpperCase()} está aquí!`;
    }
}
const pesadillaTradicional = new Pesadilla("Freddy");
const output5 = document.getElementById("output5");
if (output5) output5.innerText = pesadillaTradicional.gritar();

// Ejercicio D1S2.2.2
class PesadillaFlecha {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar = (): string => {
        return `${this.nombre.toUpperCase()} está aquí!`;
    };
}
const pesadillaFlecha = new PesadillaFlecha("Freddy");
const output6 = document.getElementById("output6");
if (output6) output6.innerText = pesadillaFlecha.gritar();
