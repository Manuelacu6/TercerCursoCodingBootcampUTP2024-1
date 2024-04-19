const imprimirPiramide213 = () => {
    let filas = 7;
    let columnas = 13;
  
    for (fila = 1; fila <= filas; fila++) {
        let filaActual = "";
        for (i = 0; i < 33; i++) {
            filaActual += " ";
        }
        for (let columna = 1; columna <= columnas; columna++) {
            if (columna >= fila && columna <= columnas - fila + 1) {
                filaActual += "P";
            } else {
                filaActual += " ";
            }
        }
        console.log(filaActual);
    }
};
imprimirPiramide213();

//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación