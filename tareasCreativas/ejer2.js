/*
Simula un carrito de compras:

Cada producto es un objeto con nombre, precio y cantidad.
Calcula el precio total usando reduce.
Filtra los productos con cantidad mayor a 1.
*/ 

let carrito = [
    { nombre: "Portatil Gaming", precio: 1400, cantidad: 1 },
    { nombre: "Samsung Galaxy Tab S9", precio: 500, cantidad: 2 }
  ];
  
  // Calcula el precio total
  let precioTotal = carrito.reduce((total, prod) => total + prod.precio * prod.cantidad, 0);
  console.log("Precio total del carrito:", precioTotal);
  
  // Filtra productos con cantidad mayor 1
  let productosCantidadMayorUno = carrito.filter(prod => prod.cantidad > 1);
  console.log("Productos con cantidad mayor que 1:", productosCantidadMayorUno);