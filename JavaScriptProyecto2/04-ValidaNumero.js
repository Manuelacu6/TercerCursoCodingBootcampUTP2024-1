const readlineSync = require("readline-sync");

const leer15Numeros = () => {
    console.log("Hola, necesito 15 números diferentes de 0 de ti.");

    let totalNumeros = [];
    let numerosMayoresQue150 = 0;
    let numerosNegativos = 0;
    let sumaPositivos = 0;
    let contadorPositivos = 0;
    let maxNumero, minNumero;

    // Pedir 15 números distintos de 0
    for (let i = 0; i < 15; i++) {
        let numero;
        do {
            numero = parseInt(readlineSync.question(
                i === 0 ? "Escribe el primer numero: " :
                i === 14 ? "Escribe el último numero: " :
                "Escribe el siguiente numero: "
            ));

            if (numero === 0) {
                console.log("No puedes escribir 0. Inténtalo de nuevo.");
            }
        } while (numero === 0);

        // Guardar el número y actualiza valores
        totalNumeros.push(numero);
        if (i === 0) {
            maxNumero = minNumero = numero;
        } else {
            if (numero > maxNumero) maxNumero = numero;
            if (numero < minNumero) minNumero = numero;
        }
        if (numero > 150) numerosMayoresQue150++;
        if (numero < 0) {
            numerosNegativos++;
        } else {
            sumaPositivos += numero;
            contadorPositivos++;
        }
    }

    //  resultados
    const promedioPositivos = sumaPositivos / contadorPositivos;

    console.log(`Cantidad de numeros mayores que 150: ${numerosMayoresQue150}`);
    console.log(`El numero mas grande es: ${maxNumero}, y el más bajo es: ${minNumero}`);
    console.log(`Cantidad de numeros negativos: ${numerosNegativos}`);
    console.log(`El promedio de numeros positivos es: ${promedioPositivos}`);
};

leer15Numeros();



//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación