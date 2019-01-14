// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {
  return str.split(" ")
    .reduce((highest, next) => { // comparing word length to each other
      return Math.max(highest, next.length);
    }, 0);
}

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // 6

console.log(findLongestWordLength("May the force be with you")); // 5

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology")); // 19
