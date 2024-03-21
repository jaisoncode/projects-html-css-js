//zona de calculo - calculo feito
const operationUsed = document.querySelector('#operation-used');
const ResultCalc = document.querySelector('#operation-result');

let clock = new Date();
let hours = clock.getHours();
let minutes = clock.getMinutes();

hours = hours < 10 ?  "0" + hours:minutes;
minutes = minutes < 10 ?  "0" + minutes:minutes;

document.querySelector("#hour").textContent = clock.getHours() + ":" + minutes;

//botoes da calculadora
const botoes = document.querySelectorAll('.btn');

let expressionUsed = [];
let resultado;
let adicionar = [];
let calculo = [];

botoes.forEach(button => {
    button.addEventListener('click', (event) => {
        if (button.value == 1 ||
            button.value == 2 ||
            button.value == 3 ||
            button.value == 4 ||
            button.value == 5 ||
            button.value == 6 ||
            button.value == 7 ||
            button.value == 8 ||
            button.value == 9 ||
            button.value == 0) {
            addCaracter(button.value);

        } else if (button.value == "+" ||
            button.value == "-" ||
            button.value == "*" ||
            button.value == "." ||
            button.value == "/" ||
            button.value == "%"
        ) {
            if (expressionUsed.length === 0 ||
                expressionUsed.slice(-1) === "+" ||
                expressionUsed.slice(-1) === "-" ||
                expressionUsed.slice(-1) === "*" ||
                expressionUsed.slice(-1) === "/" ||
                expressionUsed.slice(-1) === ".") {
            } else {
                addCaracter(button.value);

            }
        } else if (button.value == "=") {
            calulator();
            updatePrevios();
        } else if (button.value == "clean") {
            expressionUsed = [];
            updatePrevios();

        } else {
            expressionUsed = expressionUsed.slice(0, -1);
        }
        calulator()
    });
});

function updatePrevios() {
    operationUsed.textContent = expressionUsed;
    ResultCalc.textContent = resultado;
}

function addCaracter(button) {
    adicionar += button;
    expressionUsed += adicionar;
    adicionar = [];
    updatePrevios();
}

function calulator() {
    if (expressionUsed.slice(-1) === "+" ||
        expressionUsed.slice(-1) === "-" ||
        expressionUsed.slice(-1) === "*" ||
        expressionUsed.slice(-1) === "/" ||
        expressionUsed.slice(-1) === "." ||
        expressionUsed.slice(-1) === "%") {
    } else {
        resultado = eval(expressionUsed);
        updatePrevios();
    }
}

