/*
Ordena y reorganiza un array:

Genera un array de números aleatorios.
Ordénalo en orden ascendente usando sort.
Inviértelo con reverse.
*/ 

let numerosAleatorios = [12, 5, 8, 20, 1];

// Ordenar orden ascendente
numerosAleatorios.sort((a, b) => a - b);
console.log("Numeros ordenados:", numerosAleatorios);