// Eu uso uma função construtora para criar pessoas com os mesmos tipos de propriedade.
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

// Eu adiciono o método ao prototype para compartilhá-lo entre as pessoas criadas.
Pessoa.prototype.falar = function () {
    return `Olá! Eu sou ${this.nome} e tenho ${this.idade} anos.`;
};

// Eu uso new para criar um objeto e associá-lo ao prototype de Pessoa.
const primeiraPessoa = new Pessoa("Ana", 21);
const segundaPessoa = new Pessoa("Lucas", 24);
console.log(primeiraPessoa.falar());
console.log(segundaPessoa.falar());
console.log("As pessoas compartilham o método?", primeiraPessoa.falar === segundaPessoa.falar);
