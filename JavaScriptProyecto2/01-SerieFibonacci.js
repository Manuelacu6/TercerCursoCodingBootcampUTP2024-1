function fibonacci() {
    let anterior = 0, final = 1, suma = 0;
    let secuencia = ""; // Inicializar cadena vacía para la secuencia

    for (let i = 0; suma <= 10000; i++) {
        suma = anterior + final;
        final = anterior;
        secuencia += anterior + " "; // Sumar número con separador de espacios
        anterior = suma;
    }

    console.log("Numeros de Fibonacci del 0 al 10000:", secuencia); // Imprime toda la secuencia horizontal
}
fibonacci();


//19/04/2024 12:08 am
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación
