/*
Encuentra la palabra más larga:

Dado un array de palabras, encuentra la más larga usando reduce.
*/ 

let palabrasLargas = ["Messi", "Iniesta", "Neymar", "Xavi"];
let palabraMasLarga = palabrasLargas.reduce((max, palabra) => (palabra.length > max.length ? palabra : max));
console.log("Palabra mas larga:", palabraMasLarga);