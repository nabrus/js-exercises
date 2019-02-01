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
// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   let i = 0;

//   while (i < arr.length) {
//     newArr.push(arr.slice(i, i + size));
//     i += size;
//   }
//   console.log(newArr);
// }

function chunkArrayInGroups(arr, size) {
  
}


chunkArrayInGroups(["a", "b", "c", "d"], 2);
