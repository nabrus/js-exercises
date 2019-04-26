/*
  Function `greetAliens()` that takes in an array of strings and uses
  a `for` loop to print a greeting with each string in the array.

  Output: "Oh powerful [stringElement], we humans offer our unconditional
  surrender!" for each element of the array. To the console.
*/

function greetAliens(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
