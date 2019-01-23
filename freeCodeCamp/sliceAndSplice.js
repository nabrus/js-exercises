/*
  You are given two arrays and an index.

  Use the array methods slice and splice to copy each element of the first
  array into the second array, in order.

  Begin inserting elements at index n of the second array.

  Return the resulting array. The input arrays should remain the same after
  the function runs.

  frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
*/

// My solution: passes tests, ugly code
// function frankenSplice(arr1, arr2, n) {
//   const arr3 = arr1.slice();
//   const arr4 = arr2.slice();
//   arr4.splice(n, 0, ...arr3);
//   return arr4;
// }

// Refactored after reading first two hints
function frankenSplice1(arr1, arr2, n) {
  const newArr2 = arr2.slice();
  newArr2.splice(n, 0, ...arr1);
  return newArr2;
}

function frankenSplice(arr1, arr2, n) {
  const newArr2 = arr2.slice();

  // for (let i = 0; i < arr1.length; i += 1) {
  //   newArr2.splice(n, 0, i);
  // }
  // console.log(newArr2);

  // let i = 0;
  // while (i < arr1.length) {
  //   newArr2.splice(n, 0, arr1[i]);
  //   i += 1;
  // }
  // console.log(newArr2);

  arr1.forEach(num => newArr2.splice(n, 0, num));
  n += 1;
  console.log(newArr2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
