// Definir las cartas del mazo UNO
const colors = ['rojo', 'amarillo', 'verde', 'azul'];
const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'salta', 'reversa', '+2'];
let deck = [];

// Crear el mazo
for (let color of colors) {
    for (let value of values) {
        deck.push({ color, value });
        if (value !== '0') {
            deck.push({ color, value }); // Añadir dos de cada carta excepto '0'
        }
    }
}

// Añadir cartas especiales
const specialCards = ['comodín', 'comodín+4'];
for (let i = 0; i < 4; i++) {
    deck.push({ color: 'especial', value: specialCards[0] });
    deck.push({ color: 'especial', value: specialCards[1] });
}

// Barajar el mazo
deck = deck.sort(() => Math.random() - 0.5);

// Repartir cartas a los jugadores
const player = [];
const computer = [];
for (let i = 0; i < 7; i++) {
    player.push(deck.pop());
    computer.push(deck.pop());
}

// Mostrar las cartas del jugador
console.log('Tus cartas:', player);

// Función para jugar una carta
function playCard(player, cardIndex) {
    const card = player[cardIndex];
    console.log(`Jugador juega ${card.color} ${card.value}`);
    player.splice(cardIndex, 1); // Eliminar la carta jugada del jugador
    // Aquí puedes añadir la lógica para verificar si la carta es válida y aplicar efectos
}

// Función para que el ordenador juegue una carta
function computerPlay() {
    const cardIndex = Math.floor(Math.random() * computer.length);
    const card = computer[cardIndex];
    console.log(`Ordenador juega ${card.color} ${card.value}`);
    computer.splice(cardIndex, 1); // Eliminar la carta jugada del ordenador
    // Aquí puedes añadir la lógica para verificar si la carta es válida y aplicar efectos
}

// Ejemplo de jugar una carta
playCard(player, 0);
computerPlay();
