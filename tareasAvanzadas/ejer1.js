/*
Iteración en arrays multidimensionales:

Crea una tabla (array bidimensional) con nombres de estudiantes y sus calificaciones.
Accede y modifica una calificación específica.
Usa flat para convertir el array bidimensional en uno unidimensional.
*/ 

let tabla = [
    ["Antonio", 10],
    ["Marcos", 8],
    ["Emilio", 6]
  ];
  
  // Modifica nota especifica
  tabla[1][1] = 95;
  console.log("Tabla modificada:", tabla);
  
  // Convierte array bidimensional/unidimensional
  let tablaUnidimensional = tabla.flat();
  console.log("Array unidimensional:", tablaUnidimensional);