/*
  In this Lodash project, you will be implementing some of the most exciting
  functionality from the widely-popular lodash.js library. You will be
  implementing ten methods that add new functionality for numbers, strings,
  objects, and arrays. -codecademy
*/

const _ = {

  // Implement _.clamp(): My solution
  myClamp(number, lower, upper) {
    if (number > lower && number < upper) {
      return number;
    }

    if (number < lower) {
      return lower;
    }

    if (number > upper) {
      return upper;
    }
  },

  // Implement _.clamp(): following codecademy steps
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

};


// Do not write or modify code below this line.
module.exports = _;
