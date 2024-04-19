function fibonacci() {
    let anterior = 0, final = 1, suma = 0, totalsuma = 0; // variable suma total
    let secuencia = "";

    while (suma <= 100) {
      suma = anterior + final;
      final = anterior;
      totalsuma += anterior; // Suma total de cada numero 
      secuencia += anterior + " ";
      anterior = suma;
    }
    console.log("suma de Fibonacci de 0 a 100:", secuencia , totalsuma); // imprime la suma 
  }
  
fibonacci();

//19/04/2024 12:08 am
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación
