import { sum, kebabCase } from "npm:lodash";
import { addTax } from "./checkout";

console.log(kebabCase("Steve is sooooo cool"));

console.log(addTax(100, 0.15));
