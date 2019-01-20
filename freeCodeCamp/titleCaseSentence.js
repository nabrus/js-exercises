/*
  Return the provided string with the first letter of each word capitalized.
  Make sure the rest of the word is in lower case.

  For the purpose of this exercise, you should also capitalize connecting words
  like "the" and "of".

  titleCase("I'm a little tea pot") should return a string.
  titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
  titleCase("sHoRt AnD sToUt") should return Short And Stout.
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My
  Handle Here Is My Spout.
*/

// My solution: passes tests. Another good way is to use `.replace(...)`
// See second freeCodeCamp solution below
function titleCase(str) {
  const arr = str.split(" ");
  const capital = arr.map(word => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase());
  return capital.join(" ");
}

titleCase("I'm a little tea pot"); // I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); // Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); // Here Is My Handle Here
// Is My Spout


// freeCodeCamp's solutions:

// Basic
// String.prototype.replaceAt = function(index, character) {
//   return this.substr(0, index) + character + this.substr(index+character.length);
// };

// function titleCase(str) {
//   var newTitle = str.split(' ');
//   var updatedTitle = [];
//   for (var st in newTitle) {
//       updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
//   }
//   return updatedTitle.join(' ');
// }

// Intermediate: Uses `.replace(...)`
function titleCase1(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

// Advanced: Using regex with `.replace(...)`
function titleCase2(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}
