const counterValue = 0; // Початкове значення лічильника
const valueSpan = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Встановлення початкового значення лічильника
valueSpan.textContent = counterValue;

// Обробка кліків на кнопку зменшення
decrementBtn.addEventListener("click", () => {
  valueSpan.textContent = counterValue - 1;
});

// Обробка кліків на кнопку збільшення
incrementBtn.addEventListener("click", () => {
  valueSpan.textContent = counterValue + 1;
});
