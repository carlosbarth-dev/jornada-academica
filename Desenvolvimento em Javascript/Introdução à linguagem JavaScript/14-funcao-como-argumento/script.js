// Eu recebo um número e uma função que define a operação a executar.
function aplicarOperacao(numero, operacao) {
    return operacao(numero);
}

function dobrar(numero) {
    return numero * 2;
}

function elevarAoQuadrado(numero) {
    return numero * numero;
}

// Eu passo dobrar sem parênteses para enviar a função, em vez de executá-la agora.
// Eu chamo essa função recebida como argumento de callback.
console.log("Dobro de 5:", aplicarOperacao(5, dobrar));
console.log("Quadrado de 5:", aplicarOperacao(5, elevarAoQuadrado));
