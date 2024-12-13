/*
Combina arrays:

Crea dos arrays, uno con nombres y otro con edades.
Usa concat para combinarlos en uno solo.
Usa join para convertirlos en una cadena de texto con comas.
*/ 

let nombres = ["Antonio", "Marcos", "Emilio"];
let edades = [25, 30, 35];

// Concatena arrays
let combinados = nombres.concat(edades);
console.log("Arrays combinados:", combinados);

// Convierte cadena de texto
let texto = combinados.join(", ");
console.log("Texto combinado:", texto);