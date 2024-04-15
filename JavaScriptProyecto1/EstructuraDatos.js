const prompt = require('prompt-sync')(); // Importa la librería prompt-sync

function estructura() {
   
    while (true) {

    let condicion = true;

      console.log("\nMenú de opciones");
      console.log("1. Adivina el Número");
      console.log("2. Calculadora de Factorial");
      console.log("3. Contador de Vocales");
      console.log("salir: salir del menu");
      
      const option = prompt("Seleccione una opción: "); // solicita una opción

      switch (option) {

        /*1. Adivina el Número [0, 100): Escribe un programa que genere un número aleatorio y pida 
        al usuario que lo adivine. Si el usuario no acierta, indica si su número es demasiado 
        alto o demasiado bajo.*/
        case '1':
      
         const numeroRandom = Math.floor(Math.random() * 100);
            
         while(condicion){
            const valorUsuario = parseInt(prompt("Ingrese el numero a adivinar:")) 
            if(numeroRandom == valorUsuario){
                console.log("acertaste el numero");
                condicion = false;
            }else if(valorUsuario>numeroRandom){
                console.log("el numero es mayor intenta uno mas bajo");
            }else if(valorUsuario<numeroRandom){
                console.log("el numero es menor intente uno mas alto");
             }
            }
        estructura();
        break;

     
        /*2. Calculadora de Factorial: Crea un programa que calcule el factorial de un número ingresado 
        por el usuario. Utiliza tanto un ciclo for como un ciclo while para realizar el cálculo.
        El factorial de un entero positivo n, el factorial de n o n factorial se define en principio 
        como el producto de todos los números enteros positivos desde 1 hasta n.
        */
        case '2':
        CalculadoraDeFactorial();
        
        function CalculadoraDeFactorial() {
            // Solicita al usuario que ingrese un número
            let NumeroUsuario2 = prompt("Ingresa el número: ");
            let i = 1;
        
            // Verifica si el número ingresado es negativo
            if (NumeroUsuario2 < 0) {
                console.log("Ingresa un número válido, desde uno en adelante");
                CalculadoraDeFactorial(); // Llama recursivamente a la función para obtener un número válido
            }
        
            // Verifica si el número ingresado es 0 o 1 (casos especiales)
            if (NumeroUsuario2 == 1 || NumeroUsuario2 == 0) {
                console.log(Elfactoriales1);
                return; // Finaliza la función si el número es 0 o 1
            }
        
            // Calcula el factorial del número utilizando un bucle while
            while (NumeroUsuario2 > 1) {
                i = NumeroUsuario2 * i;
                NumeroUsuario2 = NumeroUsuario2 - 1;
            }
        
            // Imprime el resultado del factorial
            console.log(`El factorial es ${i}`);
        }

        estructura();
        break;
        
        /*3. Contador de Vocales: Desarrolla un programa que cuente cuántas vocales
        distintas hay en una frase proporcionada por el usuario y muestre las 
        vocales encontradas.*/

        case '3':
            
        ContarVocales();
           
        function ContarVocales() {
            // Solicita al usuario que escriba una frase
            let FraseUsuario = prompt("Escriba una frase: ");
        
            // Calcula el número de veces que aparece la letra "a" en la frase
            let NumeroVocalesA = (FraseUsuario.match(/[a]/gi) || []).length;
            // Calcula el número de veces que aparece la letra "e" en la frase
            let NumeroVocalesE = (FraseUsuario.match(/[e]/gi) || []).length;
            // Calcula el número de veces que aparece la letra "i" en la frase
            let NumeroVocalesI = (FraseUsuario.match(/[i]/gi) || []).length;
            // Calcula el número de veces que aparece la letra "o" en la frase
            let NumeroVocalesO = (FraseUsuario.match(/[o]/gi) || []).length;
            // Calcula el número de veces que aparece la letra "u" en la frase
            let NumeroVocalesU = (FraseUsuario.match(/[u]/gi) || []).length;
        
            // Imprime los resultados
            console.log(`"a" aparece ${NumeroVocalesA} veces`);
            console.log(`"e" aparece ${NumeroVocalesE} veces`);
            console.log(`"i" aparece ${NumeroVocalesI} veces`);
            console.log(`"o" aparece ${NumeroVocalesO} veces`);
            console.log(`"u" aparece ${NumeroVocalesU} veces`);
        }

        estructura();
        break;
            

        case 'salir': 
            console.log("saliste del menu");
            return;
        
        default:
            console.log("Opción inválida");
       }
   }
}


estructura(); 


/*
Fecha y Hora de publicación: 10:00 am
Autores. Ing(Manuela Cardona Usme) y Ing(Robert Carvajal Rodriguez)
Nombre del lenguaje utilizado: ECMASCRIPT 6.0
Versión del lenguaje utilizado: javascript 6.0
Universidad Tecnológica de Pereira: Programa de Ingeniería de Sistemas y Computación
*/