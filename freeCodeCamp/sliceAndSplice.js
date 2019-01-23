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


function frankenSplice(arr1, arr2, n) {
  const newArr2 = arr2.slice();
  arr1.forEach(num => num.splice(n, 0, newArr2));
  console.log(newArr2);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
