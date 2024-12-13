/*
Busca en un array de objetos:

Crea un array de objetos que representen productos (nombre, precio, cantidad).
Encuentra el producto más caro usando reduce.
Usa find para buscar un producto por nombre.
Verifica si todos los productos tienen precio mayor a 10 con every.
*/ 

let productos = [
    { nombre: "Portatil Gaming", precio: 1250, cantidad: 5 },
    { nombre: "iPhone 16", precio: 1000, cantidad: 10 },
    { nombre: "Tablet Samsung Galaxy Tab S9", precio: 500, cantidad: 7 }
  ];
  
  // Encuentra producto mas caro
  let masCaro = productos.reduce((max, prod) => (prod.precio > max.precio ? prod : max));
  console.log("Producto mas caro:", masCaro);
  
  // Busca producto por nombre
  let buscarProducto = productos.find(prod => prod.nombre === "iPhone 16");
  console.log("Producto encontrado:", buscarProducto);
  
  // Verifica si el precio es mayor a 10
  let todosMayorQueDiez = productos.every(prod => prod.precio > 10);
  console.log("Todos los productos que tienen precio mayor que 10:", todosMayorQueDiez);