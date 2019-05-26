/*
  In this Lodash project, you will be implementing some of the most exciting
  functionality from the widely-popular lodash.js library. You will be
  implementing ten methods that add new functionality for numbers, strings,
  objects, and arrays. -codecademy
*/

const _ = {

  /* NUMBER METHODS */

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

  // Implement _.clamp(): following codecademy implement steps
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  // Implement .inRange(): My solution
  inRange(num, endNum, startNum = 0) {
    [endNum, startNum] = [startNum, endNum];
    if (startNum > endNum) {
      [startNum, endNum] = [endNum, startNum];
    }
    return num >= startNum && num < endNum;
  },

  // Codecademy .inRange() ideate list followed
  inRange1(num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      const tmpEnd = end;
      end = start;
      start = tmpEnd;
    }

    return num >= start && num < end;
  },

  // Codecademy .inRange() implement steps
  inRange2(num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      const tmpEnd = end;
      end = start;
      start = tmpEnd;
    }

    const isInRange = num >= start && num < end;
    return isInRange;
  },

  /* STRING METHODS */

  // Implement .words(): My solution
  words(str) {
    return str.split(" ");
  },

  // Codecademy .words() implement solution steps
  words1(string) {
    const words = string.split(" ");
    return words;
  },

  // Implement .pad(): My solution
  // pad(str, length) {
  //   if (length <= str.length) return str;

  //   const totalPadding = length - str.length;
  //   const spaces = Math.floor(totalPadding / 2) + str.length;
  //   const beginPad = str.padStart(spaces);
  //   let result = "";

  //   if (length % 2 === 0) {
  //     result = beginPad.padEnd(spaces + totalPadding / 2);
  //   } else {
  //     result = beginPad.padEnd(spaces + Math.ceil(totalPadding / 2));
  //   }
  //   return result;
  // },

  pad(str, length) {
    if (length <= str.length) return str;

    const startingPad = Math.floor((length - str.length) / 2); // 2
    const endingPad = str.length + startingPad - length; // 2
    const prefix = str.padStart(startingPad + str.length); // 4
    const paddedResult = prefix.padEnd(endingPad + startingPad + str.length);

    return paddedResult;
  },
};


// Do not write or modify code below this line.
module.exports = _;
