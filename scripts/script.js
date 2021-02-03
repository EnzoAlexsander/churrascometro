// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000 ml
// Refrigerante/Água - 1000 ml por pessoa + 6 horas 1500 ml

// Crianças valem por 0,5

let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function calcular() {
    console.log('Calculando...');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne =
        carnePorPessoa(duracao) * adultos +
        (carnePorPessoa(duracao) / 2) * criancas;

    let qtdTotalBebidas =
        bebidasPorPessoa(duracao) * adultos +
        (bebidasPorPessoa(duracao) / 2) * criancas;

    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de Bebidas</p>`;
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
