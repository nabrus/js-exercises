/* eslint-disable */ 
/*
  Basic Algorithm Scripting: Return Largest Numbers in Arrays

  Return an array consisting of the largest number from each provided
  sub-array. For simplicity, the provided array will contain exactly 4
  sub-arrays.

  Remember, you can iterate through an array with a simple for loop,
  and access each member with array syntax arr[i].
*/

// my solution
// function largestOfFour(arr) {
//   let newArr = [];
//   for (const num of arr) {
//      newArr.push(Math.max(...num));
//   }
//   return newArr;
// }

// refactored
function largestOfFour(arr) {
  let newArr = [];
  arr.forEach(num => newArr.push(Math.max(...num)));
  return newArr;
}

// Basic: Procedural approach 
// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var sb = 1; sb < arr[n].length; sb++) {
//       if (arr[n][sb] > largestNumber) {
//         largestNumber = arr[n][sb];
//       }
//     }

//     results[n] = largestNumber;
//   }

//   return results;
// }

// Intermediate: Declarative approach
// function largestOfFour(arr) {
//   return arr.map(function(group){
//     return group.reduce(function(prev, current) {
//       return (current > prev) ? current : prev;
//     });
//   });
// }

// Advanced: Declarative approach
// function largestOfFour(arr) {
//   return arr.map(Function.apply.bind(Math.max, null));
// }

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // [27, 5, 39, 1001].

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) // [9, 35, 97, 1000000]

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]); // [25, 48, 21, -3]