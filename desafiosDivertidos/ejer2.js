/*
Genera números únicos:

Crea un array de números aleatorios únicos entre 1 y 100 usando bucles y includes.
*/ 

let numerosUnicos = [];
while (numerosUnicos.length < 10) {
  let num = Math.floor(Math.random() * 100) + 1;
  if (!numerosUnicos.includes(num)) {
    numerosUnicos.push(num);
  }
}
console.log("Numeros unicos:", numerosUnicos);