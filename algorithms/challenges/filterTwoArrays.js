/*
  Function `justCoolStuff()`

  Input: Two arrays of strings
  Output: An array with items present in both arrays.

  Must use `Array.prototype.filter()` method.
*/

function justCoolStuff(arr1, arr2) {
  return arr1.filter(match => arr2.includes(match));
}

/* eslint quotes: [2, "single"] */

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

console.log(justCoolStuff(myStuff, coolStuff));
