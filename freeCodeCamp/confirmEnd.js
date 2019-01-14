/*
Check if a string (first argument, str) ends with the given target string
(second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced
in ES2015. But for the purpose of this challenge, we would like you to use one
of the JavaScript substring methods instead.
*/

// My solution
function confirmEnding(str, target) {
  const endLength = -(target.length);
  const strEnd = str.slice(endLength);

  if (strEnd === target) {
    return true;
  }
  return false;
}

// refactored
function confirmEnding(str, target) {
  const endLength = -(target.length);
  const strEnd = str.slice(endLength);

  return strEnd === target ? true : false;
}

confirmEnding("Bastian", "n");

// freeCodeCamp Solution: Intermediate (Declarative approach)
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  return str.slice(str.length - target.length) === target;
}
