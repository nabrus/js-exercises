/* eslint no-underscore-dangle: 0 */
const cat = "Mose";

const numbers = [2, 5, 6, 4, 22, 32];
const dblNums = numbers.map(num => num * 2);
console.log(dblNums);
const sum = numbers.reduce((acc, next) => acc + next);
console.log(sum);

class Rebels {
  constructor(name) {
    this._name = name;
    this._hasForce = false;
  }

  // Getters
  get name() {
    return this._name;
  }

  get force() {
    return this._hasForce;
  }

  // Setters
  set force(able) {
    if (able === "yes") {
      this._hasForce = true;
    }
  }

  // Methods
  greeting() {
    return `Hey, I'm ${this.name} and i dislike the empire.`;
  }
}

const luke = new Rebels("Luke Skywalker");
const han = new Rebels("Han Solo");

luke.force = "yes";
console.log(luke.force);
console.log(han.greeting());
