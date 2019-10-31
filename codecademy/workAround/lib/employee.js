"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cadre = getCadre;
exports.tax = calculateTax;
exports.benefits = getBenefits;
exports.bonus = calculateBonus;
exports.reimbursement = reimbursementEligibility;
exports.Employee = void 0;
var Employee = {
  salary: 100000
};
exports.Employee = Employee;
var payGrades = {
  entryLevel: {
    taxMultiplier: 0.05,
    benefits: ["health"],
    minSalary: 10000,
    maxSalary: 49999
  },
  midLevel: {
    taxMultiplier: 0.1,
    benefits: ["health", "housing"],
    minSalary: 50000,
    maxSalary: 99999
  },
  seniorLevel: {
    taxMultiplier: 0.2,
    benefits: ["health", "housing", "wellness", "gym"],
    minSalary: 100000,
    maxSalary: 200000
  }
};

function getCadre() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return "entryLevel";
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return "midLevel";
  } else return "seniorLevel";
}

function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

function getBenefits() {
  return payGrades[getCadre()].benefits.join(", ");
}

function calculateBonus() {
  return 0.02 * Employee.salary;
}

function reimbursementEligibility() {
  var reimbursementCosts = {
    health: 5000,
    housing: 8000,
    wellness: 6000,
    gym: 12000
  };
  var totalBenefitsValue = 0;
  var employeeBenefits = payGrades[getCadre()].benefits;

  for (var i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }

  return totalBenefitsValue;
} // export default Employee;