const imprimirVInversa18 = () => {
    // Arreglar la junta
    const filas = 10;
    const columnas = 19;
    
    for (let fila = 1; fila <= filas; fila++) {
        let lineaActual = "";
        
        for (let columna = 1; columna <= columnas; columna++) {
            if (fila === 1 && columna === 10) {
                for (let i = 0; i < 0; i++) {
                    lineaActual += "Z";
                }
                lineaActual += "Z";
                for (let i = 0; i < 0; i++) {
                    lineaActual += "Z";
                }
                break;
            }
            
            if (fila + columna === 11 || columna - fila === 9) {
                lineaActual += "Z";
            } else {
                lineaActual += " ";
            }
        }
        
        console.log(`${lineaActual} `);
    }
};

imprimirVInversa18();


//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación