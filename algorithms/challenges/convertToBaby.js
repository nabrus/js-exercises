/*
  Write a function, `convertToBaby()`

  Input: An array as the argument.
  Output: New array with each string in the array prepended with `baby `.

  Cannot use `.map()`.

  Steps
  Loop through the arr.
  New arr variable starting out as an empty array.
  Using `push()` add the items from the provided arr into the new arr
  with baby prepended.
*/

function convertToBaby(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(`baby ${arr[i]}`);
  }
  return newArr;
}

const animals = ["panda", "turtle", "giraffe", "hippo", "sloth", "human"];

console.log(convertToBaby(animals));
