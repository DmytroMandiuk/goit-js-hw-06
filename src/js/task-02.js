const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createEl = ingredients.map(item => {
  const ingredientsLiEl = document.createElement('li');
  ingredientsLiEl.classList.add('item');
  ingredientsLiEl.textContent = item;
  return ingredientsLiEl;
});

const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...createEl);
console.log(ingredientsEl);