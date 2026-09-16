// Eu guardo uma função sem nome em uma constante para chamá-la depois.
const calcularAreaTriangulo = function (base, altura) {
    // Eu calculo a área multiplicando base por altura e dividindo por dois.
    return (base * altura) / 2;
};

const base = 8;
const altura = 5;
console.log("Área do triângulo:", calcularAreaTriangulo(base, altura), "unidades quadradas");
