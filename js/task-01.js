const input = document.querySelector('#validation-input');

const handrerInputChack = e => {
  const str = e.currentTarget.value;
  e.currentTarget.classList.toggle('valid', str.length === 6);
  e.currentTarget.classList.toggle('invalid', str.length !== 6);
};

input.addEventListener('blur', handrerInputChack);
