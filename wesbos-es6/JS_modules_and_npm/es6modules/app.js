import { uniq } from "lodash";
import insane from "insane";
import jsonp from "jsonp";
import apiKey from "./src/config"; // when using a default export any
console.log(apiKey);               // variable (apiKey) name can be used


const ages = [1,14,56,5];

console.log(uniq(ages));
