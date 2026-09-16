// Eu crio um parágrafo em memória; ele ainda não aparece na página.
const paragrafo = document.createElement("p");
paragrafo.textContent = "Eu criei este parágrafo dinamicamente com JavaScript.";

// Eu adiciono o elemento ao body para que ele passe a aparecer no documento.
document.body.appendChild(paragrafo);
