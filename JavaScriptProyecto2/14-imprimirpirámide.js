const imprimirPiramide14 = () => {
    let filas = 7;
    let columnas = 13;
  
    for (let fila = 1; fila <= filas; fila++) {
        let filaActual = "";
  
        for (let columna = 1; columna <= columnas; columna++) {
            if (columna >= fila && columna <= columnas - fila + 1) {
                filaActual += "P";
            } else {
                filaActual += " ";
            }
        }
  
        // Imprimir la fila actual
        console.log(filaActual);
    }
};
imprimirPiramide14();

//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación