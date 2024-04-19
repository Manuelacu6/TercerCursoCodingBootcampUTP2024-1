
function imprimirTablasdemultiplicación(numero) {
  // Muestra la tabla de multiplicar del número dado
  console.log("Tabla del " + numero);
  
  // Recorre los números del 1 al 10
  for (let i = 1; i <= 10; i++) {
      // Calcula el resultado de multiplicar 'numero' por 'i' y lo muestra en la consola
      console.log(numero + " x " + i + " = " + (numero * i));
  }
}
// Por cada número, llama a la función 'imprimirTablasdemultiplicación' para mostrar su tabla de multiplicar
for (let num = 1; num <= 10; num++) {
  // Llama a la función para mostrar las tablas
  imprimirTablasdemultiplicación(num);
}



//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación