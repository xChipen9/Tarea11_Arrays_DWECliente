/*
Análisis de texto:

Convierte un texto en un array de palabras.
Cuenta la cantidad de palabras únicas.
*/ 

let texto = "Analisis de texto con Javascript";
let palabrasTexto = texto.split(" ");
let palabrasUnicas = [...new Set(palabrasTexto)];
console.log("Palabras unicas:", palabrasUnicas);