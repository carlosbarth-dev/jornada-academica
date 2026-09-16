const botao = document.getElementById("carregar-noticias");
const status = document.getElementById("status");
const lista = document.getElementById("noticias");

botao.addEventListener("click", function () {
    if (location.protocol === "file:") {
        status.textContent = "Abra esta atividade pelo Live Server, conforme o LEIA-ME.txt.";
        return;
    }

    // Eu limpo as notícias anteriores para evitar duplicatas ao carregar novamente.
    lista.textContent = "";
    status.textContent = "Carregando notícias...";
    botao.disabled = true;

    const requisicao = new XMLHttpRequest();
    requisicao.open("GET", "noticias.xml", true);
    requisicao.timeout = 10000;

    requisicao.onload = function () {
        if (requisicao.status < 200 || requisicao.status >= 300) {
            status.textContent = `Não foi possível carregar as notícias. HTTP ${requisicao.status}.`;
            return;
        }

        // Eu transformo o texto recebido em um documento XML que posso consultar.
        const leitor = new DOMParser();
        const xml = leitor.parseFromString(requisicao.responseText, "application/xml");
        if (xml.querySelector("parsererror")) {
            status.textContent = "O arquivo XML contém um erro de formatação.";
            return;
        }

        const noticias = xml.querySelectorAll("noticia");
        for (const noticia of noticias) {
            const tituloXml = noticia.querySelector("titulo");
            const resumoXml = noticia.querySelector("resumo");

            // Eu verifico os campos antes de tentar acessar seus textos.
            if (!tituloXml || !resumoXml) {
                lista.textContent = "";
                status.textContent = "Cada notícia precisa de título e resumo.";
                return;
            }

            const artigo = document.createElement("article");
            const titulo = document.createElement("h2");
            const resumo = document.createElement("p");

            // Eu insiro os dados como texto, sem interpretá-los como código HTML.
            titulo.textContent = tituloXml.textContent;
            resumo.textContent = resumoXml.textContent;
            artigo.appendChild(titulo);
            artigo.appendChild(resumo);
            lista.appendChild(artigo);
        }

        status.textContent = noticias.length === 0
            ? "Nenhuma notícia encontrada."
            : `${noticias.length} notícias carregadas.`;
    };
    requisicao.onerror = function () {
        status.textContent = "Falha de conexão. Verifique se o servidor local está ativo.";
    };
    requisicao.ontimeout = function () {
        status.textContent = "O tempo de espera acabou. Tente novamente.";
    };
    requisicao.onloadend = function () {
        botao.disabled = false;
    };

    requisicao.send();
});
