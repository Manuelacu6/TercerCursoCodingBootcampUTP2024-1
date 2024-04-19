const readlineSync = require("readline-sync");

const calcularFactorial = () => {
  let numeroUsuario = parseInt(
    readlineSync.question(`Por favor, ingrese un número para calcular su factorial: `)
  );
  let resultado = 1;
  while (numeroUsuario < 1) {
    numeroUsuario = parseInt(
      readlineSync.question(`No es correcto, intenta de nuevo: `)
    );
  }
  for (i = 1; i <= numeroUsuario; i++) {
    resultado *= i;
  }
  console.log('El factorial de este numero es ${resultado}');
};

calcularFactorial();

//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación