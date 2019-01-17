/*
  Truncate a string (first argument) if it is longer than the given maximum
  string length (second argument). Return the truncated string with a ...
  ending.
*/


// My solution
function truncateString(str, num) {
  const shorter = str.slice(0, num);
  console.log(str.length >= num ? `${shorter}...` : str);
  return str.length >= num ? `${shorter}...` : str;

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
