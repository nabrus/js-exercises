/*
  Build Tower
  Build Tower by the following given argument:
  number of floors (integer and always greater than 0).

  Tower block is represented as *
  JS: returns an Array

  Test.assertDeepEquals(towerBuilder(1), ["*"]);
  Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
  Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);

*/

// 1.
function towerBuilder(nFloors) {
  const twr = [];
  let space = "";
  let star = "";

  for (let i = 1; i <= nFloors; i++) {
    space = (" ").repeat(nFloors - i);
    star = ("*").repeat((2 * i) - 1);
    twr.push(space + star + space);
  }
  return twr;
}

console.log(towerBuilder(5));

// 2.
const towerBuilderA = (nFloors) => Array
  .from(Array(nFloors).keys())
  .map(i => 2 * i + 1)
  .reverse()
  .map((i, index) => " ".repeat(index) + '*'.repeat(i) + " ".repeat(index))
  .reverse();

  //3.
function towerBuilderB(n) {
  return Array.from({length: n}, function(v, k) {
    const spaces = ' '.repeat(n - k - 1);
    return spaces + '*'.repeat(k + k + 1) + spaces;
  });
}

  // 4.
function towerBuilderC(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
              + "*".repeat((i * 2)+ 1)
              + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

