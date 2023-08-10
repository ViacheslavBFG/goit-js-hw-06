const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Отримання посилання на список ul#ingredients
const ingredientsList = document.getElementById("ingredients");

// Створення та додавання елементів <li> до списку
const liElements = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

// Додавання усіх елементів <li> за одну операцію до списку ul#ingredients
ingredientsList.append(...liElements);
