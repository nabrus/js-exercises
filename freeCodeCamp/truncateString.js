/*
  Truncate a string (first argument) if it is longer than the given maximum
  string length (second argument). Return the truncated string with a ...
  ending.
*/


// My solution - passed tests, but not entirely correct? See below.
function truncateString(str, num) {
  const shortStr = str.slice(0, num);
  return num >= str.length ? str : `${shortStr}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
// A-tisket...

truncateString("Absolutely Longer", 2);
// Ab...

truncateString("Absolutely Longer", 4);
// Abso...

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
// A-tisket a-tasket A green and yellow basket

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
// A-tisket a-tasket A green and yellow basket


/*
  freeCodeCamps solutions - My solution counts only characters and
  just adding on the ellipsis `...`. Following what the tests show
  should be returned.

  But, solutions below count each `.` as one character. So an expression
  for the first three characters is required. There must have been a
  change to this exercise since solutions were posted. They fail current
  first two tests.
*/

// Basic:
//   function truncateString1(str, num) {
//   if (str.length > num && num > 3) {
//     console.log(str.slice(0, (num - 3)) + '...');
//     return str.slice(0, (num - 3)) + '...';
//   } else if (str.length > num && num <= 3) {
//     return str.slice(0, num) + '...';
//   } else {
//     return str;
//   }

// }

// truncateString1("Absolutely Longer", 4); // A...


// Advanced:
// function truncateString2(str, num) {
//   if (str.length <= num) {
//     return str;
//   } else {
//     return str.slice(0, num > 3 ? num - 3 : num) + '...';
//   }
// }
// truncateString2("A-tisket a-tasket A green and yellow basket", 8);
// A-tis...
