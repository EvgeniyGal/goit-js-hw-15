function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  body: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
};

function handlerBackgroundColor() {
  const color = getRandomHexColor();
  elements.body.style.backgroundColor = color;
  elements.spanColor.textContent = color;
}

elements.changeColorBtn.addEventListener('click', handlerBackgroundColor);
