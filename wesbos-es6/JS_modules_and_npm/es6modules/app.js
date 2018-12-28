import { uniq, shuffle } from "lodash";
import insane from "insane";
import jsonp from "jsonp";
// import apiKey from "./src/config"; // import default syntax
import {
  apiKey as key,
  url,
  sayHi,
  old,
  cat,
} from "./src/config"; // import named variable syntax
// `as` keyword used to rename variable on import

console.log(key, url, old, cat);

sayHi("Steve");

// using lodash to get the uniq array of ages
const ages = [1, 14, 56, 5, 14, 1, 1, 1];
console.log(uniq(ages));
// lodash shuffle
const tracks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(shuffle(tracks));
