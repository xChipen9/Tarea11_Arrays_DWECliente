/*
Crea un sistema de inventario:

Usa un array para representar un inventario.
Implementa funciones para agregar, eliminar y buscar productos.
*/ 

let inventario = [];

function agregarProducto(nombre, precio, cantidad) {
  inventario.push({ nombre, precio, cantidad });
}

function eliminarProducto(nombre) {
  inventario = inventario.filter(prod => prod.nombre !== nombre);
}

function buscarProductoInventario(nombre) {
  return inventario.find(prod => prod.nombre === nombre);
}

agregarProducto("iPhone 16", 1000, 3);
eliminarProducto("iPhone 16");
console.log("Inventario actual:", inventario);