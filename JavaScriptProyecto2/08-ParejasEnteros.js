function generarParejas() {
    let contador = 0;
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 2; j++) {
            console.log(contador, i);
            contador++;
        }
    }
}

console.log("Parejas de enteros generadas:");
generarParejas();


//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación