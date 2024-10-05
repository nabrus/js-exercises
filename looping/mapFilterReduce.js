

/*
1. Challenges for map():

Convert an array of numbers to their squares:
Write a function that takes an array of numbers and returns a new array where each number is squared.
*/
const numbers = [1, 2, 3, 4];
// Expected output: [1, 4, 9, 16]

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

/*
Convert Fahrenheit to Celsius:
Write a function that takes an array of temperatures in Fahrenheit and converts them to Celsius.
*/
const fahrenheitTemps = [32, 68, 100];
// Expected output: [0, 20, 37.78]


/*
2. Challenges for filter():

Filter even numbers from an array:
Write a function that takes an array of numbers and returns only the even numbers.
*/
const numbers = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

/*
Find people over a certain age:
Given an array of user objects, use filter() to return users who are 30 or older.
*/
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
// Expected output: [{ name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 }]

/*
Filter out words shorter than 5 letters:
Given an array of words, use filter() to return only the words that have 5 or more letters.
*/
const words = ['apple', 'hi', 'banana', 'cat', 'elephant'];
// Expected output: ['apple', 'banana', 'elephant']


/*
3. Challenges for reduce():
Sum all numbers in an array:
Write a function that uses reduce() to return the sum of all numbers in an array.
*/
const numbers = [1, 2, 3, 4];
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
