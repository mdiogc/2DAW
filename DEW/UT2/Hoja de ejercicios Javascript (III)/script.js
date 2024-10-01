/* 1. Crear una función que genere un array aleatorio, usando 3 parámetros:
número de elementos (por defecto 10), valor mínimo del elemento (por defecto 100), 
valor máximo (por defecto 200). */
function generateRandomArray(num_items = 10, min_value = 100, max_value = 200) {
    let result = [];
    for (let i = 0; i < num_items; i++) {
        let value = Math.floor(Math.random() * (max_value - min_value + 1) + min_value);
        result.push(value);
    }
    return result;
}

/* 2. Usando la función del ejercicio 1, generar un array aleatorio de 20 elementos 
entre 20 y 100 y luego ordenarlo. */
let sorted_array = generateRandomArray(20, 20, 100).sort((a, b) => a - b);
console.log('\nEjercicio 02 - Ordenar array aleatorio');
console.log(sorted_array);

/* 3. Crear una función que mezcle los elementos de un array en orden aleatorio.
Probar con el array ordenado creado en el ejercicio anterior. */
function shuffleArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}
let shuffled_array = shuffleArray(sorted_array);
console.log('\nEjercicio 03 - Barajar array ordenado');
console.log(shuffled_array);

/* 4. Recorrer un array aleatorio generado con la función del ejercicio 1 
(15 elementos entre -10 y 20) y modificar otro array basado en ciertas condiciones. */
console.log('\nEjercicio 04 - Modificar array en base al valor');
let random_array = generateRandomArray(15, -10, 20);
let new_array = Array.from(random_array);

for (let value of random_array) {
    if (value <= -5) {
        console.log(`Valor: ${value} - Se elimina primer elemento: ${new_array.shift()} - Tamaño del array actual: ${new_array.length}`);
    } else if (value <= 0) {
        console.log(`Valor: ${value} - Se elimina último elemento: ${new_array.pop()} - Tamaño del array actual: ${new_array.length}`);
    } else if (value <= 10) {
        console.log(`Valor: ${value} - Se añade al inicio. Tamaño del array actual: ${new_array.unshift(value)}`);
    } else if (value <= 20) {
        console.log(`Valor: ${value} - Se añade al final. Tamaño del array actual: ${new_array.push(value)}`);
    }
}

/* 5. Crear una función que acepte un array y devuelva otro array con la raíz cuadrada de cada elemento.
Probar con un array aleatorio de 20 números entre 60 y 100. */
function sqrtArray(array) {
    return array.map(value => parseFloat(Math.sqrt(value).toFixed(2)));
}
console.log('\nEjercicio 05 - Array con raíces cuadradas');
random_array = generateRandomArray(20, 60, 100);
console.log(random_array);
let sqrt_array = sqrtArray(random_array);
console.log(sqrt_array);

/* 6. Crear una función que devuelva el valor máximo y mínimo del array, 
e indique el índice de estos valores (si se repite, informar solo la primera vez). */
function minMaxValues(array) {
    let max_value = Math.max(...array);
    let min_value = Math.min(...array);
    let max_index = array.indexOf(max_value);
    let min_index = array.indexOf(min_value);
    return { min_value, min_index, max_value, max_index };
}
console.log('\nEjercicio 06 - Valores mínimos y máximos del array');
random_array = generateRandomArray(20, -100, 100);
console.log(random_array);
console.log(minMaxValues(random_array));

/* 7. Crear un array de 50 números aleatorios entre 10 y 20. 
Informar si cada elemento aparece por primera vez o si es repetido. */
console.log('\nEjercicio 07 - Verificar aparición de números');
random_array = generateRandomArray(50, 10, 20);
let checked_values = new Set();
for (let value of random_array) {
    if (!checked_values.has(value)) {
        console.log(`El valor ${value} aparece por primera vez.`);
        checked_values.add(value);
    } else {
        console.log(`El valor ${value} ya apareció antes.`);
    }
}

/* 8. Modificar el ejercicio anterior para contar cuántas veces apareció un número antes. */
console.log('\nEjercicio 08 - Contar repeticiones de números');
random_array = generateRandomArray(50, 10, 20);
let value_counts = {};
for (let value of random_array) {
    if (value in value_counts) {
        value_counts[value]++;
        console.log(`El valor ${value} ya apareció ${value_counts[value]} veces.`);
    } else {
        value_counts[value] = 1;
        console.log(`El valor ${value} aparece por primera vez.`);
    }
}
