const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додавання слухача події input до інпуту
nameInput.addEventListener('input', () => {
  // Отримання значення з інпуту
  const inputValue = nameInput.value.trim();

  // Оновлення текстового вмісту спану відповідно до значення інпуту
  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});