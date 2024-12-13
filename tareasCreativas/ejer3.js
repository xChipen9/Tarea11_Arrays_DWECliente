/*
Aplana arrays:

Usa un array anidado y aplanarlo con flat y flatMap.
*/ 

let arrayAnidado = [[1, 2], [3, 4], [5, [6, 7]]];
let arrayPlano = arrayAnidado.flat(2);
console.log("Array plano:", arrayPlano);