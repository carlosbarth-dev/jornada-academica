// Eu reúno cinco frutas em um array, que é uma lista ordenada.
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
console.log("Lista inicial:", frutas.join(", "));

// Eu posso alterar os itens de um array declarado com const, sem reatribuir a variável.
frutas.push("Abacaxi");
console.log("Depois de push:", frutas.join(", "));

// Eu retiro o último item com pop e guardo o valor removido.
const frutaRemovida = frutas.pop();
console.log("Fruta removida:", frutaRemovida);

// Eu copio os índices 1 e 2; o limite 3 não entra e a lista original é preservada.
const parteDasFrutas = frutas.slice(1, 3);
console.log("Recorte com slice:", parteDasFrutas.join(", "));

// Eu uso join para transformar a lista em texto com o separador escolhido.
console.log("Lista final:", frutas.join(" | "));
