"use strict";

var _employee = require("./employee");

// import Employee from "./employee";
function getEmployeeInformation(inputSalary) {
  _employee.Employee.salary = inputSalary;
  console.log('Cadre: ' + (0, _employee.cadre)());
  console.log('Tax: ' + (0, _employee.tax)());
  console.log('Benefits: ' + (0, _employee.benefits)());
  console.log('Bonus: ' + (0, _employee.bonus)());
  console.log('Reimbursement Eligibility: ' + (0, _employee.reimbursement)() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);