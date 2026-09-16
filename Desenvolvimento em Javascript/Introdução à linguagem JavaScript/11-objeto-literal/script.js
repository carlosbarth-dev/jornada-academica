// Eu reúno características de um carro em propriedades de um objeto literal.
const carro = {
    modelo: "Fiat Uno",
    ano: 2020,
    motor: 1.0
};

// Eu acesso cada propriedade usando o nome do objeto seguido de um ponto.
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);
console.log("Motor:", carro.motor.toFixed(1));
