/*
  Note: variables are not global with modules. They are scoped
  to either their function, block, or the module. This is
  a benefit of modules, self contained files that helps avoid
  pollution of the global namespace and potential naming collisions.
*/

// Named Export
// variables
export const apiKey = "abc123";

export const url = "http:/wesbos.com";

// functions
export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

// exporting multiple variables at once
const age = 1000;
const cat = "Mose";

export { age as old, cat };
// `as` keyword used to rename

/*
  Default Export and Named Export

  default export: generally used to export the main
  part of what the module does. When importing a default export
  any variable name can be used.

  named export: Named exports are useful to export several values.
  During the import, it is mandatory to use the same name of the
  corresponding object.

  Note: Modules can have only one default export, but can have
  multiple named exports.
*/


// exporting as the default. Note: default exports get renamed
// to whatever name given when imported. So when importing this
// example, `apiKey` can be changed to something else.

// export default apiKey;
