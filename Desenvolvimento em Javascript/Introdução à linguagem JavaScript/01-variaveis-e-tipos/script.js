// Eu pratico var, let e const com os cinco tipos pedidos no exercício.
// Eu uso var para conhecer a declaração antiga e let quando preciso reatribuir.
var curso = "Análise e Desenvolvimento de Sistemas";
let semestre = 4;
const estouEstudando = true;
let nota; // Eu ainda não atribuí uma nota, por isso o valor é undefined.
const observacao = null; // Eu uso null para representar uma ausência intencional.

console.log("Curso:", curso, "| Tipo:", typeof curso);
console.log("Semestre:", semestre, "| Tipo:", typeof semestre);
console.log("Estou estudando:", estouEstudando, "| Tipo:", typeof estouEstudando);
console.log("Nota:", nota, "| Tipo:", typeof nota);
console.log("Observação:", observacao, "| Tipo:", typeof observacao);
// Eu observo uma particularidade histórica: typeof null retorna "object".
// Eu não posso reatribuir uma constante; com let, posso atualizar o valor.
semestre = 5;
console.log("Exemplo de atualização do semestre:", semestre);
