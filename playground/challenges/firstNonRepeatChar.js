/*
  Write a function named first_non_repeating_letter that takes a string input,
  and returns the first character that is not repeated anywhere in the string.

  For example, if given the input 'stress', the function should return 't',
  since the letter t only occurs once in the string, and occurs first in the
  string.

  As an added challenge, upper- and lowercase letters are considered the same
  character, but the function should return the correct case for the initial
  letter. For example, the input 'sTreSS' should return 'T'.

  If a string contains all repeating characters, it should return an empty
  string ("") or None.

  */

// function firstNonRepeatingLetter(s) {
//   // Split string into an array of characters

//   for (let i = 0; i < s.length; i++) {
//     if (s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))) {
//       console.log(s.charAt(i));
//       break;
//     }
//   }
// }

function firstNonRepeatingLetter(s) {
  const arr = s.toLowerCase().split("");
  const bucket = [[], 0];

  for (let i = 0; i < arr.length; i += 1 ) {
    for (let y = 0; y < arr.length; y += 1) {
      if (arr[i] === arr[y]) {
        bucket[0].push(arr[i]);
        if (bucket[1] === arr[i]) { break; }
      }
    }
  }
  console.log(bucket)
}

// firstNonRepeatingLetter("a"); // a
firstNonRepeatingLetter("stress"); // t
// firstNonRepeatingLetter("moonmen"); // e

// console.log(firstNonRepeatingLetter("stress"));