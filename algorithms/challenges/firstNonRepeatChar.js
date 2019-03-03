/*
  Write a function named first_non_repeating_letter that takes a string input,
  and returns the first character that is not repeated anywhere in the string.

  For example, if given the input 'stress', the function should return 't',
  since the letter t only occurs once in the string, and occurs first in the
  string.

  As an added challenge, upper- and lowercase letters are considered the same
  character, but the function should return the correct case for the initial
  letter. For example, the input 'sTreSS' should return 'T'.

  If a string contains all repeating characters, it should return an empty
  string ("") or None.

  */

 
 // My solution: Using a nested for loop
 function firstNonRepeatingLetter(s) {
   const arr1 = s.toLowerCase().split("");
   let result = "";
   let count = 0;
   
   for (let i = 0; i < arr1.length; i += 1) {
     count = 0;
     for (let y = 0; y < arr1.length; y += 1) {
       if (arr1[i] === arr1[y]) {
         count += 1;
        }
      }
      if (count < 2) {
        result = s[i]; // return the string index for correct case of char
        break;
      }
    }
    return result;
  }
  
  // Other solutions

  // 1.
  function firstNonRepeatingLetter(s) {
    let str = s.toLowerCase();
    for(let i = 0; i < str.length; i++) {
      if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
        return s[i];
      }
    }
    return "";
  }

  // 2.
  function firstNonRepeatingLetter(s) {
    var t=s.toLowerCase();
    for (var x=0;x<t.length;x++)
      if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
        return s[x];
    return "";
  }

  // 3.
  function firstNonRepeatingLetter(s) {
    var unique = {};
    
    if(s.length === 0) return '';
    
    s.split('').forEach(function(val, i) { 
      var lowerVal = val.toLowerCase();
      if(!unique.hasOwnProperty(lowerVal)) {
        unique[lowerVal] = [];
      }
      unique[lowerVal].push(val);
    });
    
    for(var prop in unique) {
      if(unique[prop].length === 1) return unique[prop][0];
    }
    
    return '';
    
  }
  
  firstNonRepeatingLetter("a"); // a
  firstNonRepeatingLetter("stress"); // t
  firstNonRepeatingLetter("moonmen"); // e
