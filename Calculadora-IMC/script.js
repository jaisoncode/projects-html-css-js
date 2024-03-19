const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');

document.querySelector('#result-value');
document.querySelector('#result-IMC');


function calcIMC(peso, altura) {
    let imc = peso / (altura * altura);
    console.log(imc);

    if (imc < 16.9) {
        let classificacao = 'Muito abaixo do peso';
        exibir(imc, classificacao)
    } else if (imc == 17 || imc <= 18.4) {
        let classificacao = 'Abaixo do peso';
        exibir(imc, classificacao)
    } else if (imc == 18.5 || imc <= 24.9) {
        let classificacao = 'Peso normal';
        exibir(imc, classificacao)
    } else if (imc == 25 || imc <= 29.9) {
        let classificacao = 'Acima do peso';
        exibir(imc, classificacao)
    } else if (imc == 30 || imc <= 34.9) {
        let classificacao = 'Obesidade grau I';
        exibir(imc, classificacao)
    } else if (imc == 35 || imc <= 40) {
        let classificacao = 'Obesidade grau II';
        exibir(imc, classificacao)
    } else {
        let classificacao = 'Obesidade grau III';
        exibir(imc, classificacao)
    }
}


btnCalcular.addEventListener('click', function () {
    calcIMC(inputPeso.value, inputAltura.value);
});

function exibir(imc, classificacao) {
    let code = `<div>
                    <span id="result-value">` + imc.toFixed(2) + `</span>
                    <span>Seu IMC</span>
                </div>
                <span id="result-desc">` + classificacao + `</span>`;
    document.querySelector('#result-IMC').innerHTML = code;
    document.querySelector('#result-IMC').classList.add('result-IMC');

}








