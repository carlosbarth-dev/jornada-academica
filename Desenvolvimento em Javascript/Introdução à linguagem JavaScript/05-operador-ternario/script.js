const entrada = prompt("Qual é a sua idade em anos completos?");

if (entrada === null) {
    console.log("Consulta cancelada.");
} else if (entrada.trim() === "") {
    console.log("Informe uma idade.");
} else {
    // Eu converto o texto em número para fazer a comparação.
    const idade = Number(entrada);

    if (!Number.isInteger(idade) || idade < 0) {
        console.log("Informe uma idade válida, inteira e não negativa.");
    } else {
        // Eu leio o ternário como: condição ? resultado verdadeiro : resultado falso.
        const mensagem = idade >= 18 ? "Maior de idade." : "Menor de idade.";
        console.log(mensagem);
    }
}
