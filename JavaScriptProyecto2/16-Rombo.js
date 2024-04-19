const imprimirRombo16 = () => {
    // Configuración
    const n = 4;

    // Función para imprimir una línea de un rombo
    const imprimirLinea = (espacios, letras) => {
        console.log(" ".repeat(espacios) + "z".repeat(letras));
    };

    // Parte superior del rombo
    for (let i = 0; i < n; i++) {
        imprimirLinea(n - i, 2 * i + 1);
    }

    // Parte inferior del rombo
    for (let i = n - 2; i >= 0; i--) {
        imprimirLinea(n - i, 2 * i + 1);
    }

};

imprimirRombo16();

//19/04/2024 12:00 pm
//v 1.0
//Ing(c) Manuela Cardona Usme.
//Javascript
//ECMAScript 6.0
//Universidad Tecnológica de Pereira
//Programa de Ingeniería de Sistemas y Computación
  