/*
Crea un buscador simple:

Dado un array de palabras, implementa una función que busque palabras que comiencen con una letra específica usando filter.
*/ 

const palabrasBuscar = ["COD BO2", "COD MW3", " COD BO3 Zombies", "Fortnite"];
const buscarPorLetra = letra => palabrasBuscar.filter(palabra => palabra.startsWith(letra));
console.log("Palabras que empiezan con 'C':", buscarPorLetra("C"));