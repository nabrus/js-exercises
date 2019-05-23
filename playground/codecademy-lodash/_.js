/*
  In this Lodash project, you will be implementing some of the most exciting
  functionality from the widely-popular lodash.js library. You will be
  implementing ten methods that add new functionality for numbers, strings,
  objects, and arrays. -codecademy
*/

const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
};


// Do not write or modify code below this line.
module.exports = _;