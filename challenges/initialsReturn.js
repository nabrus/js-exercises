/*

  Write a function to convert a name into initials. This kata strictly
  takes two words with one space in between them.

  The output should be two capital letters with a dot separating them.

  It should look like this:

  Sam Harris => S.H

  Patrick Feeney => P.F
*/

// My solution:
function returnInitials(name) {
  const nameArr = name.toUpperCase().split(" ");
  const inits = `${[...nameArr[0]][0]}.${[...nameArr[1]][0]}`;
  return inits;
}

returnInitials("Steve Urban"); // S.U
returnInitials("Indiana Jones"); // I.J
returnInitials("Bugs Bunny"); // B.B
returnInitials("luke skywalker"); // L.S
returnInitials("jeffery lebowski"); // J.L
