/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in
Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the
variable fahrenheit already defined and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature. Use the algorithm mentioned above
to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertToF(30)); // 86
console.log(convertToF(0)); // 32
console.log(convertToF(-30)); // -22
console.log(convertToF(-10)); // 14
console.log(convertToF(20)); // 68
