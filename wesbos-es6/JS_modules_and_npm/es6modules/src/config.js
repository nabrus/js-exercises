// Named Export
export const apiKey = "abc123";

export const url = "http:/wesbos.com";

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 1000;
const cat = "Mose";

export { age as old, cat };
/*
  Default Export and Named Export

  default export: generally used to export the main
  part of what the module does. When importing a default export
  any variable name (apiKey) can be used.

  named export: Named exports are useful to export several values.
  During the import, it is mandatory to use the same name of the
  corresponding object.

  Note: Modules can have only one default export, but can have
  multiple named exports.
*/

/*
  exporting as the default. Note: default exports get renamed
  to whatever name given when imported.
*/

// export default apiKey;
