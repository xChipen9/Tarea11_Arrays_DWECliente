/*
Genera una matriz identidad:

Usa un bucle para crear un array bidimensional que represente una matriz identidad
*/ 

const matrizIdentidad = Array.from({ length: 3 }, (_, i) =>
  Array.from({ length: 3 }, (_, j) => (i === j ? 1 : 0))
);
console.log("Matriz identidad:", matrizIdentidad);