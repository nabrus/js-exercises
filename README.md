# JavaScript Exercises and Examples

This repository is a container for my ongoing learning of JavaScript. Review material, lessons, examinations, etc are stored here.

## [ES6](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6) Index

*  [Arrow Functions](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/arrow_functions)
    *  [`this` Keyword](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/arrow_functions/arrow-func-this.html): Lexical scope—arrow functions bind `this` to the enclosing (function or global) scope.
    *  [Exercise 1](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/arrow_functions/arrow-func-ex1.html): Using arrow functions with array methods—`.filter()`, `.map()`, and `.reduce()`.
    *  [Exercise 2](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/arrow_functions/arrow-func-ex2.html): Using it with `.filter()` again. 

*  [Default Parameters](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/Default_Params/default-parameters.html)

*  [Template Strings](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/template_strings)
    *  [Template Literals (Strings)](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/template-strings-intro.html): Introduction.
    *  [HTML Fragments](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/template-strings-fragments.html): Example using template strings for a multi-line markup string.
    *  [Nesting Template Strings](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/template-strings-looping.html): Looping over an array and creating a list item for each element.
    *  [`if` Statement](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/template-strings-if.html): Using a *ternary operator* inside a template string.
    *  [Render Function](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/template-strings-render-functions.html): Render an `<ul>` list from an array of keywords using a function and template strings.
    *  [Tagged Templates](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/tagged-templates.html): A more advanced form of template literals, tags allow you to parse template literals with a function.
    *  [Tagged Template Exercise](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/tagged-templates-dictonary.html): Dictionary obj example. Adding abbr tags to a sentence.
    *  [Sanitizing Data](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/template_strings/tagged-templates-sanitize.html): An example using tagged templates to sanitize data using [DOMPurify](https://www.npmjs.com/package/dompurify). A library that prevents **XSS** attacks. 

*  [String Improvements](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/additional_string_improvements)
    *  [New String Methods](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/additional_string_improvements/string-methods.html): `.startsWith()`, `.endsWith()`, `.includes()`, and `.repeat()`.

*  [Destructuring](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/destructuring)
    *  [Intro](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/destructuring/destructuring-intro.html): Destructuring objects.
    *  [Destructuring Arrays](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/destructuring/destructuring-arrays.html)
    *  [Swapping Variables](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/destructuring/swapping-vars-destructuring.html): Easily switching variables using destructuring.
    *  [Destructuring in Action](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/destructuring/destructuring-and-functions.html): More examples including *Named Parameters*.

*  [Object Literal Upgrades](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/Object_Literal_Upgrades/object-literal-upgrades.html): Object property value shorthand *destructuring*, object method definitions, and *computed property* names.

*  [Iterables and Looping](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/Iterables_n_Looping)
    *  [The `for...of` loop intro](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/Iterables_n_Looping/for-of-intro.html): Examples of different ways for looping over an iterable. Introducing the `for...of` loop—best used on iterating over array values directly instead of the indices. Keywords such as `break` & `continue` can be used.
    *  [More Examples](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/Iterables_n_Looping/for-of-examples.html): Deeper dive into what an *iterable* is.
    *  [Objects](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/Iterables_n_Looping/for-of-object.html): Iterating over an object using `for...in`.

*  [New Array Methods](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/array_of_improvements)
    *  [`.from()` & `.of()`](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/array_of_improvements/array-from-and-of.html)
    *  [`.find()` & `.findIndex()`](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/array_of_improvements/array-finding.html)
    *  [`.some()` & `.every()`](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/array_of_improvements/array-some-and-every.html)

*  [Spread & Rest syntax (parameters)](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/spread_rest_syntax-parameters)
    *  [Spread Syntax Intro](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/spread_rest_syntax-parameters/spread-intro.html)
    *  [Spread Exercise](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/spread_rest_syntax-parameters/jumping-letters.html): Using **spread** on a string to animate the letters when hovering on them.
    *  [Spread Examples](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/spread_rest_syntax-parameters/more-spread-examples.html): Used as an alternative to `Array.from()`, creating a new array from an object property, and removing an object form an array of objects.
    *  [More Spread Examples](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/spread_rest_syntax-parameters/spreading-into-a-function.html): Combining two arrays and passing arguments to a function.
    *  [Rest Parameters](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/spread_rest_syntax-parameters/rest-params.html): Used in functions and in destructuring.

*  [Promises](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/promises)
    *  [Introduction](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/promises/promises-intro.html)
    *  [Creating Promises](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/promises/creating-promises.html): Using the promise constructor:    
    `new Promise( /* executor */ function(resolve, reject) { ... } );`
    *  [Chaining Promises](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/promises/chaining-promises.html): Example of chaining two promises in steps via simulating a database query. Awaiting the first step to fulfill in order to use the data returned in processing the second step.
    *  [Multiple Promises](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/promises/multiple-promises.html): Working with multiple promises all at the same time instead of in steps using `Promise.all(..)`.

*  [Symbols](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/symbols/symbols.html): Examples of the primitive data type *symbol*, why and how it's used. 

*  [Modules](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/JS_modules_and_npm/es6modules): An introduction to JavaScript modules and webpack tooling.
    * [Creating Your Own Modules](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/JS_modules_and_npm/es6modules/src): Importing and exporting, both `default export` and *named* `export`, in modules.

*  [Classes](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/classes)
    * [A Review On Prototypal Inheritance](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/classes/inheritance-review.html): Creating an object using a constructor function with methods defined on the constructor's prototype. 
    * [Classes Introduction](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/classes/classes.html): Creating a `class` with `get`ters, `set`ters, and a `static` method.
    *  [Extending Classes](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/classes/extending-classes.html): Using `extends` to create a child (sub) class from a parent (super) class. `super` keyword used inside the child class to call the parents constructor.
    *  [Extending Arrays](https://github.com/nabrus/js-exercises/blob/master/wesbos-es6/classes/extending-arrays.html): Extending arrays from the native built-ins. A review of `for...of` and `for...in` loops using this example.

```js
// Generator Syntax
function* gen() { 
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"

```
 
*  [Generators](https://github.com/nabrus/js-exercises/tree/master/wesbos-es6/generators)

### Source Material
*  [MDN web docs](https://developer.mozilla.org)
*  [You Don't Know JS (book series)](https://github.com/getify/You-Dont-Know-JS) by Kyle Simpson.
*  [ES6 FOR EVERYONE!](https://es6.io/) from fullstack developer Wes Bos.