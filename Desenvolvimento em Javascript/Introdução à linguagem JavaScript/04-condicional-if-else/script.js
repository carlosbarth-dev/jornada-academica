// Eu recebo um texto pelo prompt; ao cancelar, recebo null.
const entrada = prompt("Qual é a sua idade em anos completos?");

if (entrada === null) {
    console.log("Consulta cancelada.");
} else if (entrada.trim() === "") {
    // Eu verifico o campo vazio antes de converter, pois Number("") resulta em zero.
    console.log("Informe uma idade.");
} else {
    const idade = Number(entrada);

    if (!Number.isInteger(idade) || idade < 0) {
        console.log("Informe uma idade válida, inteira e não negativa.");
    } else if (idade < 18) {
        console.log("A pessoa é menor de idade.");
    } else if (idade > 65) {
        // Eu sigo o limite do enunciado: somente acima de 65 entra nesta categoria.
        console.log("A pessoa é idosa, conforme o critério deste exercício.");
    } else {
        console.log("A pessoa é maior de idade.");
    }
}
