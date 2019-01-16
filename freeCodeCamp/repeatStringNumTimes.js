/*eslint-disable*/

/*
  Repeat a given string str (first argument) for num times (second argument).
  Return an empty string if num is not a positive number.

  The built-in repeat()-method should not be used.
*/

// My solution: using while loop
function repeatStringNumTimes(str, num) {
  let repeatStr = "";

  while (num > 0) {
    repeatStr += str;
    num--
  }
  return repeatStr;
}

repeatStringNumTimes("abc", 3);



// recursion 
function repeatStr(str, num) {
  if (num <= 0) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStr(str, num - 1);
  }
}

repeatStr("abc", 3);

