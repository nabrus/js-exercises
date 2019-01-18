/*
  Truncate a string (first argument) if it is longer than the given maximum
  string length (second argument). Return the truncated string with a ...
  ending.
*/


// My solution
function truncateString(str, num) {
  const shortStr = str.slice(0, num);
  return num >= str.length ? str : `${shortStr}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Absolutely Longer", 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
