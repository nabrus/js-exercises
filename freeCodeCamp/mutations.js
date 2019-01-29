/*
  Return true if the string in the first element of the array contains all of
  the letters of the string in the second element of the array.

  For example, ["hello", "Hello"], should return true because all of the
  letters in the second string are present in the first, ignoring case.

  The arguments ["hello", "hey"] should return false because the string "hello"
  does not contain a "y".

  Lastly, ["Alien", "line"], should return true because all of the letters in
  "line" are present in "Alien".
*/

// My solution:
function mutation(arr) {
  let arr1 = arr[0].toLowerCase();
  let arr2 = arr[1].toLowerCase();

  for (let i = 0; i < arr2.length; i += 1) {
    if (arr1.indexOf(arr2[i]) < 0) {
      console.log(false)
    }
  }
  console.log(true);
}

// freeCodeCamp solutions
// Basic
function mutation1(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

 // Intermediate
 function mutation2(arr) {
  return arr[1].toLowerCase()
    .split('')
    .every(function(letter) {
      return arr[0].toLowerCase()
        .indexOf(letter) != -1;
    });
}

mutation(["hey", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true
mutation(["hello", "neo"]); // false
mutation(["voodoo", "no"]); // false
