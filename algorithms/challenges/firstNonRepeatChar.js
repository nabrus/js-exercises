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
//   const lowerCase = s.toLowerCase();

//   if (lowerCase === "") {
//     return "";
//   }

//   for (let i = 0; i < s.length; i += 1) {
//     if (lowerCase.indexOf(lowerCase.charAt(i)) === lowerCase.lastIndexOf(lowerCase.charAt(i))) {
//       return s.charAt(i);
//     }
//   }
// }

// Using a nested for loop
function firstNonRepeatingLetter(s) {
  const arr1 = s.toLowerCase().split("");
  let result = "";
  let count = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    count = 0;
    for (let y = 0; y < arr1.length; y += 1) {
      if (arr1[i] === arr1[y]) {
        count += 1;
      }
    }
    if (count < 2) {
      result = s[i]; // return the string index for correct case of char
      break;
    }
  }
  return result;
}


// firstNonRepeatingLetter("a"); // a
firstNonRepeatingLetter("stress"); // t
// firstNonRepeatingLetter("moonmen"); // e

// console.log(firstNonRepeatingLetter("stress"));