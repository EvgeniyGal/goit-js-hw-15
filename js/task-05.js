function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  divBoxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  inputNumber: document.querySelector('#controls > input'),
};

function createBoxes(amount) {
  let strDivs = [];
  let size = 30;

  for (let i = 1; i <= amount; i++) {
    strDivs += `<div style = "background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
    size += 10;
  }

  elements.divBoxes.innerHTML = strDivs;
}

function handlerCreateBtnClick() {
  createBoxes(elements.inputNumber.value);
}

function handlerDestroyBtnClick() {
  elements.divBoxes.innerHTML = '';
  elements.inputNumber.value = '';
}

elements.destroyBtn.addEventListener('click', handlerDestroyBtnClick);

elements.createBtn.addEventListener('click', handlerCreateBtnClick);
