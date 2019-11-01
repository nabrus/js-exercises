"use strict";

var _employee = _interopRequireWildcard(require("./employee"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Employee from "./employee";
// import { Employee, cadre, tax, benefits, bonus, reimbursement } from "./employee";
function getEmployeeInformation(inputSalary) {
  _employee["default"].salary = inputSalary;
  console.log('Cadre: ' + (0, _employee.getCadre)());
  console.log('Tax: ' + (0, _employee.calculateTax)());
  console.log('Benefits: ' + (0, _employee.getBenefits)());
  console.log('Bonus: ' + (0, _employee.calculateBonus)());
  console.log('Reimbursement Eligibility: ' + (0, _employee.reimbursementEligibility)() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);