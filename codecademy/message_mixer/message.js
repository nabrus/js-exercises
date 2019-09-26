// Step 7: use require() statement for import
// const MessageMixer = require('./messageMixer.js');

// Step 12: using import keyword
// import MessageMixer from "./messageMixer";

// Step 16: import named variables
import { countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords, replaceFirstOccurence, encode, palindrome, pigLatin } from "./messageMixer";

function displayMessage() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("What is the color of the sky?"));
  console.log(pigLatin("What is the color of the sky?", "ay"));
}

displayMessage();
