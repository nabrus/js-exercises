import { uniq } from "lodash";
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

const ages = [1, 14, 56, 5, 14, 1, 1, 1];
// using lodash to get the uniq array of ages
console.log(uniq(ages));
