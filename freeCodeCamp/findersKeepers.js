/*
  Create a function that looks through an array (first argument) and
  returns the first element in the array that passes a truth test
  (second argument). If no element passes the test, return undefined.

  findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
  should return 8.

  findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })
  should return undefined.
*/

// My solution: passed tests
function findElement(arr, func) {
  const answer = arr.filter(func);

  // works but sloppy code
  // if (answer !== undefined) {
  //   return answer[0];
  // }

  return answer ? answer[0] : undefined;
}

// freeCodeCamps solution: Basic
// function findElement(arr, func) {
//   let num = 0;

//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }

//   return undefined;
// }

findElement([1, 2, 3, 4], num => num % 2 === 0); // 2
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // 8
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // undefined
