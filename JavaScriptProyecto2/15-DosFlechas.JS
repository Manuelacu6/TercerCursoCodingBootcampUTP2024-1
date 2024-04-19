const Dosflechas15 = () => {
    const filas = 7;
    const medio = Math.floor(filas / 2);

    for (let fila = 0; fila < filas; fila++) {
        let lineaActual = "                           "; // Espacios iniciales (27)
        
        for (let columna = 0; columna < filas; columna++) {
            if (fila === medio ||
                (fila < medio && columna <= fila) ||
                (fila < medio && columna >= filas - 1 - fila) ||
                (fila > medio && columna <= filas - 1 - fila) ||
                (fila > medio && columna >= fila)) {
                lineaActual += "A";
            } else {
                lineaActual += " ";
            }
        }
        
        console.log(lineaActual);
    }
};

Dosflechas15();


//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación