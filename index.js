const button = document.querySelector('.decript_button');

let encriptMessage = document.querySelector('#crypt_message');

let answerMessage = document.querySelector('#answer-area');

function  edwardDecrypt() {
 let encriptValue = [...encriptMessage.value];
result = encriptValue.filter((item, index, arr) => {
    return (item!==arr[index-1] && item!==arr[index+1]);

  });
 answerMessage.value = result.join('');
}

button.addEventListener('click', edwardDecrypt) ;