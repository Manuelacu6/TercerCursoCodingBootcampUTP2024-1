const prompt = require('prompt-sync')(); // Importa la librería prompt-sync

function main() {
   
    while (true) {
      console.log("\nMenú de opciones");
      console.log("1. Convertir de Celsius a Fahrenheit");
      console.log("2. calcular de imc");
      console.log("3. Generador de nombres de usuario");
      console.log("4. Función Fibonacci (con ciclos)");

      console.log("salir: salir del menu");
      
      const option = prompt("Seleccione una opción: "); // solicita una opción

      switch (option) {

        /* 1. Conversor de Temperatura: Escribe un programa que convierte la temperatura de grados Celsius a Fahrenheit.
        El usuario debe poder ingresar la temperatura en grados celsius. Teniendo en cuenta que la fórmula 
        para convertir de celsius a fahrenheit es (9/5 * C°) + 32:*/

        case '1':        
            const Celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));  // solicita la temperatura en grados Celsius
            console.log( (9/5 * Celsius  ) +32 ); //formula
            main();
            break;

        /*2. Calculadora de IMC: Crea un programa que calcule el Índice de Masa Corporal 
        (IMC) a partir del peso (en kilogramos) y la altura (en metros) ingresados por 
        el usuario. Su fórmula es = Peso/(Altura)^2 */
        
        case '2':
            const peso = parseFloat(prompt("Ingrese su peso corporal en kilogramos:")); // solicita peso corporal
            const altura = parseFloat( prompt("Ingrese su altura:")); // solicita altura
            console.log( peso/(altura^2)); // formula 
            main();
            break;

        /*3. Generador de Nombre de Usuario: Solicita al usuario su nombre, apellido y año de 
        nacimiento, y genera un nombre de usuario combinándolos (por ejemplo, "AnaSmith1990").*/
        
        case '3':
            const nombre = prompt("Ingrese su nombre:");
            const apellido = prompt("Ingrese su apellido:");
            const añodenacimiento = prompt("Ingrese su año de nacimiento:");
            console.log( 'nombre:' + nombre );
            console.log('apellido:' + apellido);
            console.log('añodenacimiento:' + añodenacimiento);
            main();
            break;

        /*4. Función Fibonacci (con ciclos): Implementa una función que calcule el n-ésimo número de 
        Fibonacci ingresado por el usuario.
        La serie de Fibonacci es una secuencia de números en la que cada número es la suma de los 
        dos anteriores. La secuencia comienza con los números 0 y 1, y los siguientes números se generan 
        sumando los dos números anteriores. La secuencia de Fibonacci se ve así: 0 1 1 2 3 5 8 13 21 …*/
        case '4':
               
        Fibonacci();

        break;


        case 'salir':
        console.log("saliste del menu");
        return;
        
        default:
        console.log("Opción inválida");
       }
   }
}


main(); 

// Función Fibonacci (con ciclos)
function Fibonacci () {
      const numero = parseInt(prompt('Ingrese un numero:'));  //creo la variable del numero del usuario
      console.log('El numero finonacci es n:' + (numero + numero)); 
      main();
    }
    
    
/*
Fecha y Hora de publicación: 10:00 am
Autores. Ing(Manuela Cardona Usme) y Ing(Robert Carvajal Rodriguez)
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira: Programa de Ingeniería de Sistemas y Computación
*/