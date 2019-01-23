/*
  Remove all falsy values from an array.

  Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

  Hint: Try converting each value to a Boolean.
*/

// function bouncer(arr) {
//   const nonFalsy = arr.filter(item => typeof item !== "boolean" && item !== false);
//   console.log(nonFalsy);
// }

function bouncer(arr) {
  const nonFalsy = arr.filter(item => {
    if (item) {
      return item;
    }
  });
  console.log(nonFalsy);
}

bouncer([7, "ate", "", false, 9]); // [ 7, "ate", 9 ]
