/*
Crea un array de números del 1 al 10 y:

Encuentra los números pares usando filter.
Duplica todos los números con map.
Calcula la suma total con reduce.

*/ 

let numeros = Array.from({ length: 10 }, (_, i) => i + 1);

// Encuentra numeros pares
let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

// Duplica todos los numeros
let duplicados = numeros.map(num => num * 2);
console.log("Números duplicados:", duplicados);

// Calcula suma total
let sumaTotal = numeros.reduce((acum, num) => acum + num, 0);
console.log("Suma total:", sumaTotal);