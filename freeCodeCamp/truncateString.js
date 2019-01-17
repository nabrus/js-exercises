function truncateString(str, num) {
  const shorter = str.slice(0, num);
  console.log(`${shorter}...`);
  return `${shorter}...`;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Absolutely Longer", 2);
