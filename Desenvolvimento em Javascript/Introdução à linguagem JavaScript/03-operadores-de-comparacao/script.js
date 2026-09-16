// Eu altero estes valores para observar os três caminhos da comparação.
const primeiroNumero = 10;
const segundoNumero = 20;

// Eu uso === para comparar tanto o valor quanto o tipo, sem conversão automática.
if (primeiroNumero === segundoNumero) {
    console.log("Os números são iguais.");
} else if (primeiroNumero > segundoNumero) {
    console.log("O primeiro número é maior que o segundo.");
} else {
    console.log("O primeiro número é menor que o segundo.");
}

// Eu comparo um número com um texto para perceber a diferença entre == e ===.
console.log('10 == "10":', 10 == "10");
console.log('10 === "10":', 10 === "10");
console.log("Os números são diferentes?", primeiroNumero !== segundoNumero);
