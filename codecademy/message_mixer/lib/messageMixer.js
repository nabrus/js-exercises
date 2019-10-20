"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var MessageMixer = {};

MessageMixer.countCharacter = function (inputString, inputCharacter) {
  var count = 0;
  var string = inputString.toLowerCase();
  var character = inputCharacter.toLowerCase();

  for (var i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count += 1;
    }
  }

  return count;
};

MessageMixer.capitalizeFirstCharacterOfWords = function (string) {
  var arr = string.split(" ");

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    arr[i] = word[0].toUpperCase() + word.substring(1);
  }

  return arr.join(" ");
};

MessageMixer.reverseWord = function (word) {
  return word.split("").reverse().join("");
};

MessageMixer.reverseAllWords = function (sentence) {
  var words = sentence.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = MessageMixer.reverseWord(words[i]);
  }

  return words.join(" ");
};

MessageMixer.replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
  return string.replace(toBeReplaced, replaceWith);
};

MessageMixer.replaceAllOccurrences = function (string, toBeReplaced, replaceWith) {
  return string.split(toBeReplaced).join(replaceWith);
};

MessageMixer.encode = function (string) {
  var replacementObject = {
    a: "@",
    s: "$",
    i: "!",
    o: "0"
  };

  for (var key in replacementObject) {
    string = MessageMixer.replaceAllOccurrences(string, key, replacementObject[key]);
  }

  return string;
};

MessageMixer.palindrome = function (str) {
  var reversed = MessageMixer.reverseWord(str);
  return "".concat(str, " ").concat(reversed);
};

MessageMixer.pigLatin = function (sentence, character) {
  return sentence.split(" ").join(character + " ");
}; // module.exports = MessageMixer;


var _default = MessageMixer;
exports["default"] = _default;