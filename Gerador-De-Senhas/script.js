const btnCopy = document.querySelector('.fa-solid');

let ramdonChar = "";
let password = "";

document.querySelector('#button-generator').addEventListener('click', function () {
    let ramdonChar = "";
    let password = "";
    const length = document.querySelector('#length-char').value;

    const upperCase = document.querySelector('#uppercase-char');
    const lowerCase = document.querySelector('#lowercase-char');
    const number = document.querySelector('#number');
    const symbols = document.querySelector('#symbols');


    if (upperCase.checked) ramdonChar += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowerCase.checked) ramdonChar += 'abcdefghijklmnopqrstuvwxyz';
    if (symbols.checked) ramdonChar += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    if (number.checked) ramdonChar += '0123456789';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * ramdonChar.length);
        password += ramdonChar.charAt(randomIndex);
    }
    document.querySelector('#password-content').textContent = password;
});

btnCopy.addEventListener('click', function () {
    const passwordContent = document.querySelector('#password-content').textContent;

    if (passwordContent == "") {
        alert('Primeiro gere uma senha!')
    } else {
        navigator.clipboard.writeText(passwordContent);
        alert('Senha copiada para a área de transferência!');
    }
});