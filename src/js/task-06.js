const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const dataLength = Number(input.getAttribute('data-length'));
  const inputValue = input.value.trim();
  
  if (inputValue.length === dataLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
