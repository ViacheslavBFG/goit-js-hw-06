// Отримання списку всіх категорій
const categoriesList = document.querySelectorAll('#categories .item');

// Виведення кількості категорій
console.log('Number of categories:', categoriesList.length);

// Ітерація по кожній категорії
categoriesList.forEach(category => {
  // Отримання заголовка категорії
  const categoryName = category.querySelector('h2').textContent;

  // Отримання списку елементів в категорії
  const categoryElements = category.querySelectorAll('ul li');

  // Виведення інформації про категорію
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});