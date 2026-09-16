let contadorWhile = 1;

// Eu verifico a condição antes de executar o corpo do while.
console.log("Contagem com while:");
while (contadorWhile <= 5) {
    console.log(contadorWhile);
    contadorWhile++; // Eu avanço o contador para que o laço termine.
}

let contadorDoWhile = 1;

// Eu executo o corpo do do...while antes de verificar a condição.
console.log("Contagem com do...while:");
do {
    console.log(contadorDoWhile);
    contadorDoWhile++;
} while (contadorDoWhile <= 5);

// Eu demonstro a diferença começando com uma condição falsa.
let exemplo = 6;
while (exemplo <= 5) {
    console.log("Esta mensagem não aparece.");
    exemplo++;
}
do {
    console.log("No do...while eu executo pelo menos uma vez:", exemplo);
    exemplo++;
} while (exemplo <= 5);
