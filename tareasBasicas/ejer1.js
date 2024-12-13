/*
Crea un array de tus comidas favoritas y:

Añade dos nuevas comidas al principio y al final del array.
Elimina la primera y última comida del array.
Encuentra la posición de una comida específica usando indexOf.

*/ 

let comidas = ["Pizza", "Hamburguesa", "Tacos"];

// Añade comidas principio y final
comidas.unshift("Sushi", "Ensalada");
comidas.push("Pasta", "Helado");
console.log("Comidas después de añadir:", comidas);

// Elimina primera y ultima comida
comidas.shift();
comidas.pop();
console.log("Comidas después de eliminar:", comidas);

// Encuentra posicion específica
let posicion = comidas.indexOf("Tacos");
console.log("Posición de Tacos:", posicion);