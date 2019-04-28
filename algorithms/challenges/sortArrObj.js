/*
  Sorting an array of objects by one of it's properties in ascending order.

  Function `sortSpeciesByTeeth()`

  Input: An array of species objects — ex
  `{ speciesName: "shark", numTeeth: 50 }.
  Output: An array sorted in ascending order based on num of teeth.

  Use a named comparison function or an anonymous function for your argument
  to `.sort()`.
*/

/* eslint-disable quotes, no-console */

const speciesArray = [{ speciesName: 'shark', numTeeth: 50 }, {speciesName: 'dog', numTeeth: 42 }, { speciesName: 'alligator', numTeeth: 80 }, { speciesName: 'human', numTeeth: 32 }];

/* eslint-enable quotes */

function sortSpeciesByTeeth(arr) {
  return arr.sort((a, b) => a.numTeeth - b.numTeeth);
}

console.log(sortSpeciesByTeeth(speciesArray));

// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]
