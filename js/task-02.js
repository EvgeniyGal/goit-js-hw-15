const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = input.value + 'px';

function handlerFontSize(e) {
  text.style.fontSize = e.currentTarget.value + 'px';
}

input.addEventListener('input', handlerFontSize);
