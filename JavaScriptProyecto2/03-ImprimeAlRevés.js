const readlineSync = require('readline-sync');
function invertirCadenaNumerica() {
  const numeroEntrada = readlineSync.question('Ingresa un número: ');

  // Invierte la cadena numérica
  const numeroInvertido = numeroEntrada.split('').reverse().join('');

  // Imprime el número invertido
  console.log('El numero invertido es:', numeroInvertido);
}

invertirCadenaNumerica();
//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación
