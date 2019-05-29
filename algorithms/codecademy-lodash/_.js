/*
  In this Lodash project, you will be implementing some of the most exciting
  functionality from the widely-popular lodash.js library. You will be
  implementing ten methods that add new functionality for numbers, strings,
  objects, and arrays using only JS. -codecademy
*/

const _ = {

  /* NUMBER METHODS */

  // Implement _.clamp(): My solution.
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

  // Implement _.clamp(): following codecademy implement steps.
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  // Implement _.inRange(): My solution.
  inRange(num, endNum, startNum = 0) {
    [endNum, startNum] = [startNum, endNum];
    if (startNum > endNum) {
      [startNum, endNum] = [endNum, startNum];
    }
    return num >= startNum && num < endNum;
  },

  // Codecademy _.inRange() ideate list followed.
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

  // Codecademy _.inRange() implement steps.
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

  // Implement _.words(): My solution.
  words(str) {
    return str.split(" ");
  },

  // Codecademy _.words() implement solution steps.
  words1(string) {
    const words = string.split(" ");
    return words;
  },

  // Implement _.pad(): My solution.
  pad(str, length) {
    if (length <= str.length) return str;

    const totalPadding = length - str.length;
    const spaces = Math.floor(totalPadding / 2) + str.length;
    const beginPad = str.padStart(spaces);
    let result = "";

    if (length % 2 === 0) {
      result = beginPad.padEnd(spaces + totalPadding / 2);
    } else {
      result = beginPad.padEnd(spaces + Math.ceil(totalPadding / 2));
    }
    return result;
  },

  // Following codecademy _.pad() ideate steps.
  pad1(str, length) {
    if (length <= str.length) return str;

    const startingPad = Math.floor((length - str.length) / 2);
    const endingPad = length - str.length - startingPad;
    const prefix = str.padStart(startingPad + str.length);
    const paddedResult = prefix.padEnd(startingPad + str.length + endingPad);
    // const paddedResult = prefix.padEnd(length); // also works

    return paddedResult;
  },

  // codecademy's _.pad() implement steps followed - they used .repeat().
  pad2(str, length) {
    if (length <= str.length) return str;

    const startPaddingLength = Math.floor((length - str.length) / 2);
    const endPaddingLength = length - str.length - startPaddingLength;
    // Concatenate a space repeated number of start padding length with the
    // string and the number of end padding length using .repeat().
    const paddingString = " ".repeat(startPaddingLength) + str + " ".repeat(endPaddingLength);

    return paddingString;
  },

  /* OBJECT METHODS */

  // Implement _.has(): My solution.
  has(obj, key) {
    return obj.hasOwnProperty(key);
  },

  // Following codecademy's _.has() ideate steps.
  has1(obj, key) {
    return obj[key] !== undefined;
  },

  // Following codecademy's _.has() implement steps.
  has2(object, key) {
    const hasValue = object[key] !== undefined;
    return hasValue;
  },

  // Implement _.invert(): My solution.
  invert(obj) {
    const invertedObj = {};

    for (let [key, value] of Object.entries(obj)) {
      invertedObj[value] = key;
    }
    return invertedObj;
  },

  // Following codecademy's _.invert() implement steps.
  invert1(object) {
    const invertedObject = {};

    for (let prop in object) {
      const originalValue = object[prop];
      invertedObject[originalValue] = prop;
    }
    return invertedObject;
  },

  // Implement _.findKey(): My solution.
  findKey(obj, fn) {
    for (let key in obj) {
      return fn(obj[key]) ? key : undefined;
    }
  },

  // Following codecademy's _.invert() ideate steps.
  findKey1(obj, fn) {
    for (let key in obj) {
      if (fn(obj[key])) {
        return key;
      }
    }
    return undefined;
  },

  // Following codecademy's _.invert() implement steps.
  findKey2(object, predicate) {
    for (let key in object) {
      const value = object[key];
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue) return key;
    }
    return undefined;
  },
};


// Do not write or modify code below this line.
module.exports = _;
