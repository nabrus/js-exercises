/*
  Remove all falsy values from an array.

  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

  Hint: Try converting each value to a Boolean.
*/

// My solution

// function bouncer(arr) {
//   const nonFalsy = arr.filter(item => {
//     if (item) {
//       return item;
//     }
//   });
//   console.log(nonFalsy);
// }

// Refactored
function bouncer(arr) {
  const nonFalsy = arr.filter(item => item);
  return nonFalsy;
}

// freeCodeCamp's solution: Advanced
function bouncer1(arr) {
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]); // [ 7, "ate", 9 ]

bouncer(["a", "b", "c"]); // ["a", "b", "c"]

bouncer([false, null, 0, NaN, undefined, ""]); // []

bouncer([1, null, NaN, 2, undefined]); // [1, 2].
