// Cannot use the .reverse() method
// Write your code here:

// My solution: returns a new array
function reverseArray(arr) {
  const result = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    result.push(arr[i]);
  }
  return result;
}

// An "in line" reversal of elements. Mutating the original array.
function mutateArray(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}


// Test
const sentence = ["sense.", "make", "all", "will", "This"];

console.log(sentence);
console.log(mutateArray(sentence));
console.log(sentence);
// console.log(reverseArray(sentence));
// Should print ['This', 'will', 'all', 'make', 'sense.'];
