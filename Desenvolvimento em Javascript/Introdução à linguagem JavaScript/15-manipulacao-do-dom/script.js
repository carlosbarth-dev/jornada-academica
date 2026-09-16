// Eu encontro os elementos do HTML pelos identificadores.
const mensagem = document.getElementById("msg");
const botao = document.getElementById("alterar-mensagem");

// Eu aguardo o clique para executar a função que modifica a página.
botao.addEventListener("click", function () {
    // Eu uso textContent para inserir texto no elemento.
    mensagem.textContent = "Eu alterei esta mensagem usando JavaScript!";
    mensagem.style.color = "white";
    mensagem.style.backgroundColor = "#24563c";
    mensagem.style.padding = "16px";
    mensagem.style.borderRadius = "8px";
});
