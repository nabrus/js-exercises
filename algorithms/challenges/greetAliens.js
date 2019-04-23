/* 
  Function `greetAliens()` that takes in an array of strings and uses
  a `for` loop to print a greeting with each string in the array.
  
  Output: "Oh powerful [stringElement], we humans offer our unconditional 
  surrender!" for each element of the array.
*/ 

function greetAliens(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!
    `);
  }
  return newArr.join("");
}


const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);