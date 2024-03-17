let counter = 0;

document.querySelector('#addition').addEventListener('click', addition);
document.querySelector('#subtraction').addEventListener('click', subtraction);
document.querySelector('#button').addEventListener('click', reset);
const result = document.querySelector('#counter-result');

function addition() {
    counter = counter + 1;
    result.textContent = counter;
}

function subtraction() {
    counter = counter - 1;
    result.textContent = counter;
}

function reset() {
    counter = 0;
    result.textContent = counter;  
}

