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

function reverseStringA(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseStringA("hello"));
console.log(reverseString("Howdy"));
console.log(reverseStringA("Howdy"));
console.log(reverseString("Greetings from Earth"));
console.log(reverseStringA("Greetings from Earth"));
