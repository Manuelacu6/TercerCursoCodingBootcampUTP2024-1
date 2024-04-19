const imprimirFlechaDerecha19 = () => {
    const filasSuperiores = 6;
    const filasInferiores = 5;
    const columnas = 10;
    const espaciosAdicionales = " ".repeat(30);

    // Función para imprimir una fila
    const imprimirFila = (longitud, espacioFinal) => {
        let linea = "A".repeat(longitud) + " ".repeat(columnas - longitud) + espacioFinal;
        console.log(linea.split("").reverse().join(""));
    };

    // Parte superior de la flecha
    for (let fila = 1; fila <= filasSuperiores; fila++) {
        imprimirFila(fila, espaciosAdicionales);
    }

    // Parte inferior de la flecha
    for (let fila = filasInferiores; fila >= 0; fila--) {
        imprimirFila(fila, espaciosAdicionales);
    }
};

imprimirFlechaDerecha19();

//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación