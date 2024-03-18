const inputMin = document.querySelector('#min');
const inputMax = document.querySelector('#max');
const btnGenerator = document.querySelector('#btn-generator');
const resultGenerator = document.querySelector('#result');

btnGenerator.addEventListener('click', function() {
    const min = parseInt(inputMin.value); 
    const max = parseInt(inputMax.value);

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    resultGenerator.innerHTML = randomNumber;
});