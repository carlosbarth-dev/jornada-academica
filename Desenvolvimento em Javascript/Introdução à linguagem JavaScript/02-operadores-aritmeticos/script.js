// Eu escolho dois números e posso alterá-los para experimentar outros resultados.
const primeiroNumero = 10;
const segundoNumero = 3;

console.log("Soma:", primeiroNumero + segundoNumero);
console.log("Subtração:", primeiroNumero - segundoNumero);
console.log("Multiplicação:", primeiroNumero * segundoNumero);

// Eu evito dividir por zero e calcular o resto com divisor zero.
if (segundoNumero !== 0) {
    console.log("Divisão:", primeiroNumero / segundoNumero);
    // Eu uso % para obter o resto da divisão, e não uma porcentagem.
    console.log("Resto:", primeiroNumero % segundoNumero);
} else {
    console.log("Não posso calcular divisão e resto com divisor zero.");
}
