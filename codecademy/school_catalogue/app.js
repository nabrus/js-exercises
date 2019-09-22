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
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randNum];
  }
}

// CHILDREN CLASSES
// Primary School
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, "primary", numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  // Getters
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

// Middle School
class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, "middle", numberOfStudents);
  }
}

// High School
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, "high", numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  // Getters
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const indianaAve = new PrimarySchool("Indiana Ave.", 45, "Yes");
const school19 = new PrimarySchool("Bear", 108, "Yes");

console.log(indianaAve.name);
console.log(indianaAve.numberOfStudents);
console.log(school19.numberOfStudents);

school19.numberOfStudents = "204";

console.log(school19.numberOfStudents);

indianaAve.quickFacts();

const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

console.log(School.pickSubstituteTeacher(["Henry", "Hena", "Debbie", "Kristen"]));
console.log(School.pickSubstituteTeacher(["Henry", "Hena", "Debbie", "Kristen"]));
console.log(School.pickSubstituteTeacher(["Henry", "Hena", "Debbie", "Kristen"]));