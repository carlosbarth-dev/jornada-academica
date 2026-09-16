// Eu recebo o nome como parâmetro para reutilizar a função com pessoas diferentes.
function saudacao(nome) {
    // Eu uso return para devolver o texto a quem chamou a função.
    return `Olá, ${nome}! Seja bem-vindo aos estudos de JavaScript.`;
}

// Eu chamo a função e uso console.log para mostrar o valor retornado.
console.log(saudacao("Ana"));
console.log(saudacao("Lucas"));
