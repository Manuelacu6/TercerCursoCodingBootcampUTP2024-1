const readlineSync = require("readline-sync");

const sumarFactorial = () => {
    let numeroUsuario = parseInt(readlineSync.question('ingrese un número para calcular la suma de sus factoriales: '));

    while (numeroUsuario < 0) {
        numeroUsuario = parseInt(readlineSync.question('No es correcto, intenta de nuevo: '));
    }

    let sumaFactoriales = 0;
    let factorial = 1;

    // Calcular la suma de los factoriales desde 1 hasta el número ingresado
    for (let i = 1; i <= numeroUsuario; i++) {
        factorial *= i;

        sumaFactoriales += factorial;
        console.log(`este es el ciclo: ${i}, el factorial es:${factorial} y la suma acumulada de factoriales es:${sumaFactoriales}`
  );
    }

    console.log(`La suma de los factoriales hasta ${numeroUsuario} es: ${sumaFactoriales}`);
};

sumarFactorial();


//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación