/*
  We need to create classes for primary, middle, and high schools. Because these
  classes share properties and methods, each will inherit from a parent School
  class.
*/

// PARENT CLASS
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  // Getters
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(num) {
    if (typeof num === "number") {
      this._numberOfStudents = num;
    } else {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    }
  }

  // Methods
  quickFacts() {

  }

  pickSubstituteTeacher() {

  }
}


// CHILDREN CLASSES
// Primary
class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  // Getters
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Middle 
class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
  }
}

// High
class High extends School {
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  // Getters
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const indianaAve = new Primary("Indiana", "Primary", 45, "Yes");
const school19 = new Primary("Bear", "Primary", 108, "Yes");

console.log(indianaAve.name);
console.log(indianaAve.numberOfStudents);
console.log(school19.numberOfStudents);

school19.numberOfStudents = "204";

console.log(school19.numberOfStudents);
