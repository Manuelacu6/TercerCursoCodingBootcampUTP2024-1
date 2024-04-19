const imprimirV17 = () => {
    const filas = 10;
    const columnas = 19;
    
    for (let fila = 0; fila < filas; fila++) {
        let lineaActual = "";
        
        for (let columna = 0; columna < columnas; columna++) {
            if (columna === fila) {
                lineaActual += "Z";
            } else if (columnas - columna === fila + 1) {
                lineaActual += "Z";
            } else if (columna < fila) {
                lineaActual += " ";
            } else {
                lineaActual += " ";
            }
        }
        
        console.log(lineaActual);
    }
};

imprimirV17();


//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación