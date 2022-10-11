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

// console.log(createEl);
const ingredientsEl = document.querySelector('#ingredients');
ingredientsEl.append(...createEl);
console.log(ingredientsEl);





// const allIngridints=ingredients.map(text => {
//    const el= document.createElement('li');
//     el.textContent = text;
//     el.classList.add("item");
//     return el;
//   });
// addIngredientsList.append(...allIngridints)