/*
1. Challenges for map():

Convert an array of numbers to their squares:
Write a function that takes an array of numbers and returns a new array where each number is squared.
*/
const numbers = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]

const squareNums = numbers.map(num => num ** 2);
console.log(squareNums); // [1, 4, 9, 16]

console.log('----------------------------------');
/*
Extract property from an array of objects:
Given an array of user objects, use map() to create an array of just the user names.
*/
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// Expected output: ['Alice', 'Bob', 'Charlie']

function onlyUsers(array) {
  return array.name;
}

const userNames = users.map(onlyUsers);
console.log(userNames); // ['Alice', 'Bob', 'Charlie']

// or

const userNames1 = users.map(names => names.name);
console.log(userNames1); // ['Alice', 'Bob', 'Charlie']

console.log('----------------------------------');
/*
Convert Fahrenheit to Celsius:
Write a function that takes an array of temperatures in Fahrenheit and converts them to Celsius.  °C = (°F - 32) × 5/9
*/
const fahrenheitTemps = [32, 68, 100];
// Expected output: [0, 20, 37.78]

function toCelsius(temps) {
  return (temps - 32) * 5/9;
}

const fahrenheitToCelsius = fahrenheitTemps.map(toCelsius);
console.log(fahrenheitToCelsius); // [0, 20, 37.77777777777778]

/*
2. Challenges for filter():

Filter even numbers from an array:
Write a function that takes an array of numbers and returns only the even numbers.
*/
const filterNumbers = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

/*
Find people over a certain age:
Given an array of user objects, use filter() to return users who are 30 or older.
*/
const filterUsers = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// Expected output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

/*
Filter out words shorter than 5 letters:
Given an array of words, use filter() to return only the words that have 5 or more letters.
*/
const filterWords = ['apple', 'hi', 'banana', 'cat', 'elephant'];
// Expected output: ['apple', 'banana', 'elephant']


/*
3. Challenges for reduce():
Sum all numbers in an array:
Write a function that uses reduce() to return the sum of all numbers in an array.
*/
const reduceNumbers = [1, 2, 3, 4];
// Expected output: 10

/*
Find the longest word in an array:
Use reduce() to find the longest word in an array of words.
*/
const words = ['apple', 'banana', 'grape', 'strawberry'];
// Expected output: 'strawberry'

/*
Count occurrences of values in an array:
Write a function that takes an array and returns an object with the count of each value using reduce().
*/
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
// Expected output: { apple: 3, banana: 2, orange: 1 }
