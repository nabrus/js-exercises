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
  let index = 0;
  for (let i = 0; i < sorted.length; i += 1) {
    if (sorted[i] >= num) {
      index = i;
      break;
    } else if (sorted[i] < num) {
      index = i + 1;
    }
  }
  // return index;
  console.log(index);
}


// freeCodeCamp solutions:

// Basic
function getIndexToIns1(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }
  return arr.length;
}

// Basic: initial direction I tried to take for solving.
function getIndexToIns2(arr, num) {

  arr.sort(function(a, b) {
  return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
  i++;
  }

  return i;
}

// Intermediate: clever solution, adding the number `num` to the array
// then find the index of it.
function getIndexToIns3(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

// Advanced: Same idea as last example
function getIndexToIns4(arr, num) {

  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
  
  }


getIndexToIns([40, 60], 50); // 1
getIndexToIns([40, 4, 17, 6], 14); // 2
getIndexToIns([20, 3, 5], 14); // 2
getIndexToIns([10, 20, 30, 40, 50], 35); // 3
getIndexToIns([2, 5, 10], 15); // 3
getIndexToIns([], 1); // 0
