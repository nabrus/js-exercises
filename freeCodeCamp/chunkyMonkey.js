/*
  Write a function that splits an array (first argument) into groups the
  length of size (second argument) and returns them as a two-dimensional
  array.

  chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"],
  ["c","d"]].

  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2],
  [3, 4, 5]].
*/

// My solution
// function chunkArrayInGroups(arr, size) {
//   let newArr = [];

//   while (arr.length > 0) {
//     newArr.push(arr.splice(0, size));
//   }
//   console.log(newArr);
// }

// refactor to eliminate .splice(..), it mutates orig array
// This is the advanced freeCodeCamp solution
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  let i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i + size));
    i += size;
  }
  console.log(newArr);
}


// freeCodeCamps solutions
// basic
// function chunkArrayInGroups(arr, size) {

//   var temp = [];
//   var result = [];

//   for (var a = 0; a < arr.length; a++) {
//     if (a % size !== size - 1)
//       temp.push(arr[a]);
//     else {
//       temp.push(arr[a]);
//       result.push(temp);
//       temp = [];
//     }
//   }

//   if (temp.length !== 0)
//     result.push(temp);
//   return result;
// }

// Intermediate
// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var arr2 = [];
//   for (var i = 0; i < arr.length; i+=size) {
//   arr2.push(arr.slice(i , i+size));
//   }
//   return arr2;
// }


chunkArrayInGroups(["a", "b", "c", "d"], 2);
