const botao = document.getElementById("carregar-texto");
const conteudo = document.getElementById("conteudo");

botao.addEventListener("click", function () {
    // Eu preciso abrir esta página por um servidor HTTP local para buscar o arquivo.
    if (location.protocol === "file:") {
        conteudo.textContent = "Abra esta atividade pelo Live Server, conforme o LEIA-ME.txt.";
        return;
    }

    const requisicao = new XMLHttpRequest();
    // Eu uso true para fazer uma requisição assíncrona, sem bloquear a página.
    requisicao.open("GET", "mensagem.txt", true);
    requisicao.timeout = 10000;
    conteudo.textContent = "Carregando...";
    botao.disabled = true;

    requisicao.onload = function () {
        // Eu só considero sucesso os códigos HTTP de 200 a 299.
        if (requisicao.status >= 200 && requisicao.status < 300) {
            conteudo.textContent = requisicao.responseText;
        } else {
            conteudo.textContent = `Não foi possível carregar o arquivo. HTTP ${requisicao.status}.`;
        }
    };
    requisicao.onerror = function () {
        conteudo.textContent = "Falha de conexão. Verifique se o servidor local está ativo.";
    };
    requisicao.ontimeout = function () {
        conteudo.textContent = "O tempo de espera acabou. Tente novamente.";
    };
    requisicao.onloadend = function () {
        // Eu libero o botão ao terminar, tanto em caso de sucesso quanto de falha.
        botao.disabled = false;
    };

    // Eu envio a requisição depois de definir como vou tratar a resposta.
    requisicao.send();
});
