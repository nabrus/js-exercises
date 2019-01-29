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

function mutation(arr) {
  let arr1 = [...arr[0].toLowerCase()];
  let arr2 = [...arr[1].toLowerCase()];
  let idx = "";
  let yes = [];

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.indexOf(arr1[i]) !== -1) {
      yes.push(arr1[i]);
    }
  }
  console.log(yes);
}

mutation(["hey", "hey"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); // true
mutation(["hello", "neo"]); // false
mutation(["voodoo", "no"]); // false
