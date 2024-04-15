const prompt = require('prompt-sync')(); // Importa la librería prompt-sync

// 1. Mayores y Menores: Dada una lista de números, encuentra el número mas grande y el mas pequeño de la lista.
const lista = [5,12,3,8,1]
console.log("El numero mayor es: ");
console.log(Math.max(...lista));

console.log("El numero menor es: ");
console.log(Math.min(...lista));

/* 2. Concatenación de Listas: Crea dos listas con diferentes elementos, 
luego combínalas en una sola lista y ordénalos.*/
const lista1 = [5, 2, 8, 1];
const lista2 = [9, 4, 6, 3];
console.log('lista N1: ', lista1);
console.log('lista N2: ', lista2);

const listaCombinada = [...lista1, ...lista2];// Combinacion y tipo de array
console.log('listas combinadas: ', listaCombinada);

listaCombinada.sort((a, b) => a - b);// Ordenar la lista combinada con sort
console.log('Lista combinada ordenada:', listaCombinada);


// Inversión de una Lista: Escribe un programa que invierta los elementos de una Lista.
const listas1 = [5, 2, 8, 1];
const listas2 = [9, 4, 6, 3];
console.log('lista N1: ', lista1);
console.log('lista N2: ', lista2); 

const listacombinada = [...lista1, ...lista2];
console.log('listas combinadas:', listacombinada);

listacombinada.sort((a, b) => -Math.random());
console.log('lista combianda al reves:', listacombinada);

/*
Fecha y Hora de publicación: 10:00 am
Autores. Ing(Manuela Cardona Usme) y Ing(Robert Carvajal Rodriguez)
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira: Programa de Ingeniería de Sistemas y Computación
*/