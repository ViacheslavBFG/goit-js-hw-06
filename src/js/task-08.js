// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault(); // Забороняємо перезавантаження сторінки

//   const formData = new FormData(event.currentTarget);
//   const userData = {};

//   formData.forEach((value, name) => {
//     userData[name] = value;
//   });

//   if (!userData.email || !userData.password) {
//     alert('All fields must be filled out');
//     return;
//   }

//   console.log(userData);
//   loginForm.reset();
// }

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Забороняємо перезавантаження сторінки

  const formData = new FormData(event.currentTarget);
  const { email, password } = Object.fromEntries(formData.entries()); // Деструктуризация объекта formData

  if (!email || !password) {
    alert('All fields must be filled out');
    return;
  }

  console.log('Email:', email);
  console.log('Password:', password);
  loginForm.reset();
}