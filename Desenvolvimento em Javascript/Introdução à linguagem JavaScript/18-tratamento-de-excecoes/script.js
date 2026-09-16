function verificarNumero(numero) {
    if (numero < 0) {
        // Eu lanço um erro para interromper a função quando recebo um número negativo.
        throw new Error("O número não pode ser negativo.");
    }

    return `Número aceito: ${numero}`;
}

// Eu testo um positivo, zero e um negativo para observar sucesso e erro.
const numeros = [8, 0, -3];
for (const numero of numeros) {
    try {
        console.log(verificarNumero(numero));
    } catch (erro) {
        // Eu trato o erro para que o programa continue e exibo sua mensagem.
        console.log("Erro tratado:", erro.message);
    }
}
console.log("Eu cheguei ao final mesmo depois de tratar a exceção.");
