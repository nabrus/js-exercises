/*
  Function `shoutGreetings()`

  Input: An array of strings.
  Output: New array of strings in all caps with an exclamation point appended
          on the end.

  Any technique can be used.
*/

const shoutGreetings = arr => arr.map(item => `${item.toUpperCase()}!`);

const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

console.log(shoutGreetings(greetings));
