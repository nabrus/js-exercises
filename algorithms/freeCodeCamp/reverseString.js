/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

/*
Or use the spread operator [...]
`return [...str].reverse().join("");`
*/

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
