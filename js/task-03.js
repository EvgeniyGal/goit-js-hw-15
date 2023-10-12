const loginForm = document.querySelector('.login-form');

function handlerCheckForm(e) {
  e.preventDefault();
  const target = e.currentTarget;
  const email = target.email.value;
  const password = target.password.value;

  if (email && password) {
    const user = { email, password };
    console.log(user);
    target.reset();
  } else {
    alert('You must feel both email and password!');
  }
}

loginForm.addEventListener('submit', handlerCheckForm);
