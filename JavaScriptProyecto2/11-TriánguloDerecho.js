function imprimirFigura() {
    let caracter = "A";
    let espacio = " ";

    for (let fila = 1; fila <= 25; fila++) {

        for (let i = 0; i < (25 - fila) * 2; i++) {
            process.stdout.write(espacio);
        }

        for (let columna = 1; columna <= fila; columna++) {
            process.stdout.write(caracter + espacio);
        }

        console.log(); 
    }
}


imprimirFigura();


//19/04/2024 08:30 am
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación