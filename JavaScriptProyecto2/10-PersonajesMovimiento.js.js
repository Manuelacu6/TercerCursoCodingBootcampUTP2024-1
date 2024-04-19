const numColumnas = 10; 
// generamos Bucle externo para recorrer cada fila
for (let i = 0; i < numColumnas; i++) {
    // Bucle interno para recorrer cada columna en la fila actual
    for (let j = 0; j < numColumnas; j++) {
        // Si la columna es igual a la fila actual, imprime la letra 'A'
        if (j === i) {
            // Utiliza process.stdout.write para imprimir 'A' sin salto de línea
            process.stdout.write("A"); 
        } else {
            // De lo contrario, imprime un espacio en blanco
            process.stdout.write(" "); 
        }
    }
    console.log(); 
}

//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación