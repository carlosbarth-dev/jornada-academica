// Eu repito o objeto aqui para conseguir executar este exercício sozinho.
const carro = {
    modelo: "Fiat Uno",
    ano: 2020,
    motor: 1.0,

    consumo: function (km) {
        // Eu adoto valores fictícios, pois o enunciado não define uma tabela de consumo.
        // Eu considero 14 km/L até motor 1.0, 12 km/L até 1.6 e 10 km/L acima disso.
        let quilometrosPorLitro;

        // Eu uso this para acessar o motor do carro que chamou este método.
        if (this.motor <= 1.0) {
            quilometrosPorLitro = 14;
        } else if (this.motor <= 1.6) {
            quilometrosPorLitro = 12;
        } else {
            quilometrosPorLitro = 10;
        }

        // Eu divido a distância pelo rendimento para obter a quantidade de litros.
        return km / quilometrosPorLitro;
    }
};

const distancia = 140;
console.log("Distância:", distancia, "km");
console.log("Consumo estimado:", carro.consumo(distancia).toFixed(2), "litros");
