const imprimirPiramideLetrasDiferentes = () => {
    // Define el número de filas para la pirámide
    let filas = 7;
    let columnas = 13;
    // Define un array de letras que se usarán para imprimir en cada fila de la pirámide
    let letras = ["P", "N", "L", "J", "H", "F", "D"];
  
    // Bucle externo para recorrer cada fila de la pirámide
    for (fila = 1; fila <= filas; fila++) {
        // Variable para construir la fila actual
        let filaActual = "";
  
        // Bucle interno para recorrer cada columna de la fila actual
        for (let columna = 1; columna <= columnas; columna++) {
            // Condición para determinar cuándo imprimir una letra o un espacio en blanco
            // Si la columna actual está dentro de los límites de la pirámide para la fila actual
            if (columna >= fila && columna <= columnas - fila + 1) {
                // Añade la letra correspondiente a la fila actual basada en su índice
                filaActual += `${letras[fila - 1]}`;
            } else {
                // Añade un espacio en blanco si la columna no está dentro de los límites de la pirámide
                filaActual += " ";
            }
        }
  
        // Imprime la fila actual en la consola
        console.log(filaActual);
    }
};

// Llama a la función para imprimir la pirámide de letras diferentes
imprimirPiramideLetrasDiferentes();


//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación