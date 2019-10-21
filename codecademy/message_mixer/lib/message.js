"use strict";

var _messageMixer = _interopRequireDefault(require("./messageMixer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// module.exports = MessageMixer;
function displayMessage() {
  console.log(_messageMixer["default"].countCharacter("What is the color of the sky?", "t"));
  console.log(_messageMixer["default"].capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(_messageMixer["default"].reverseWord("What is the color of the sky?"));
  console.log(_messageMixer["default"].reverseAllWords("What is the color of the sky?"));
  console.log(_messageMixer["default"].replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(_messageMixer["default"].encode("What is the color of the sky?"));
  console.log(_messageMixer["default"].palindrome("What is the color of the sky?"));
  console.log(_messageMixer["default"].pigLatin("What is the color of the sky?", "ay "));
}

displayMessage();