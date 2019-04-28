/*
  Return an `true`/`false` value based on whether or not every item in the
  array is entirely `plant` based.

  Function `isTheDinnerVegan()`

  Input: Array of food objects — ex. { name: "cabbage", source: "plant" }.
  Output: Boolean value

  Test whether array objects contain `source: "plant"` using
  `Array.prototype.every()`.
*/

// function isTheDinnerVegan(food) {
//   if (food.source === "plant") {
//     return true;
//   }
//   return false;
// }

function isTheDinnerVegan(meal) {
  return meal.every(food => food.source === "plant");
}

/* eslint-disable quotes, no-console */

const dinner = [{ name: 'hamburger', source: 'meat' }, { name: 'cheese', source: 'dairy' }, { name: 'ketchup', source: 'plant' }, { name: 'bun', source: 'plant' }, { name: 'dessert twinkies', source: 'unknown' }];

/* eslint-enable quotes */

console.log(isTheDinnerVegan(dinner));
