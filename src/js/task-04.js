const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector("#value");

let counterValue = 0;

function updateCounterDisplay() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterDisplay();
});


incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateCounterDisplay();
});


updateCounterDisplay();
