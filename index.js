const button = document.querySelector('.decript_button');

let encriptMessage = document.querySelector('#crypt_message');

let answerMessage = document.querySelector('#answer-area');

function edwardDecrypt() {
    let encriptValue = encriptMessage.value;
    answerMessage.value = encriptValue.trim().replace(/(\w)\1/g, '');
}

button.addEventListener('click', edwardDecrypt);