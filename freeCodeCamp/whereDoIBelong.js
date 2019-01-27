/*
  Return the lowest index at which a value (second argument) should be
  inserted into an array (first argument) once it has been sorted. The
  returned value should be a number.

  For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it
  is greater than 1 (index 0), but less than 2 (index 1).

  Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the
  array has been sorted it will look like [3,5,20] and 19 is less than 20
  (index 2) and greater than 5 (index 1).
*/

// My solutions: using a for(...) loop
function getIndexToIns(arr, num) {
  const sorted = arr.sort((a, b) => a - b);
  let index = "";
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] >= num) {
      index = i;
      break;
    } else if (sorted[i] < num) {
      index = i + 1;
    } else if (sorted.length === 0) {
      index = 0;
    }
  }
  // return index;
  console.log(index);
}

// Using for iterating 
// function getIndexToIns(arr, num) {
//   const sorted = arr.sort((a, b) => a - b);

// }

getIndexToIns([40, 60], 50); // 1
getIndexToIns([40, 4, 17, 6], 14); // 2
getIndexToIns([20, 3, 5], 14); // 2
getIndexToIns([10, 20, 30, 40, 50], 35); // 3
getIndexToIns([2, 5, 10], 15); // 3
getIndexToIns([], 1); // 0

// const test = [10, 20, 30, 40, 50].forEach((num, i) => console.log(num > 40, i));
