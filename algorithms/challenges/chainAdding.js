// A Chain adding function

/*
  A function that adds numbers (args) together.
  add(1)(2); // returns 3

  Can take multible args chained together when called.
  add(1)(2)(3); // 6
  add(1)(2)(3)(4) // 10

  A single call returns the number passed in.
  add(1); // 1

  The returned value can be stored in a var and be reused
  const addTwo = add(2);
  addTwo; // 2
  addTwo + 5; // 7
  addTwo(3); // 5

  Input/Output: valid whold numbers

  */

function add(n) {
  return secondArg => n + secondArg;
}

console.log(add(2)(2));
console.log(add(2));


/* without arrow fn */
// function add(n) {
//   // const oneArg = add(n);

//   return function (secondArg) {
//     console.log(n + secondArg);
//     return n + secondArg;
//   }
// }

// add(2)(2);
// add(2);
