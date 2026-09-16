const mensagem = "Estou aprendendo JavaScript";

// Eu começo a contar as posições em zero, então charAt(0) devolve o primeiro caractere.
console.log("Primeiro caractere:", mensagem.charAt(0));
// Eu procuro a posição inicial do trecho; se ele não existir, recebo -1.
console.log("Posição de JavaScript:", mensagem.indexOf("JavaScript"));
console.log("Busca inexistente:", mensagem.indexOf("Python"));
console.log("Em maiúsculas:", mensagem.toUpperCase());

// Eu obtenho uma nova string com replace; o texto original não é alterado.
console.log("Texto substituído:", mensagem.replace("aprendendo", "praticando"));
console.log("Texto original:", mensagem);
