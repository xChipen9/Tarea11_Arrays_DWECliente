/*
Crea un array de colores primarios y:

Inserta un nuevo color en la segunda posición usando splice.
Extrae los dos últimos colores en un nuevo array con slice.
*/ 

let colores = ["Rojo", "Azul", "Amarillo"];

// Inserta color en segunda posicion
colores.splice(1, 0, "Naranja");
console.log("Nuevos Colores:", colores);

// Saca los dos ultimos colores
let ultimosColores = colores.slice(-2);
console.log("Dos ultimos colores:", ultimosColores);