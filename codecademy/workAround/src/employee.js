let Employee = {
  salary: 100000,

};


let payGrades = {
  entryLevel: {
    taxMultiplier: 0.05, benefits: ["health"], minSalary: 10000, maxSalary: 49999,
  },
  midLevel: {
    taxMultiplier: 0.1, benefits: ["health", "housing"], minSalary: 50000, maxSalary: 99999,
  },
  seniorLevel: {
    taxMultiplier: 0.2, benefits: ["health", "housing", "wellness", "gym"], minSalary: 100000, maxSalary: 200000,
  },
};

Employee.getCadre = function() {
  if (salary >= payGrades.entryLevel.minSalary && salary <= payGrades.entryLevel.maxSalary) {
    return "entryLevel";
  } else if (salary >= payGrades.midLevel.minSalary && salary <= payGrades.midLevel.maxSalary) {
    return "midLevel";
  } else return "seniorLevel";
};

Employee.calculateTax = function() {
  return payGrades[Employee.getCadre()].taxMultiplier * salary;
};

Employee.getBenefits = function() {
  return payGrades[Employee.getCadre()].benefits.join(", ");
};

Employee.calculateBonus = function() {
  return 0.02 * salary;
};

Employee.reimbursementEligibility = function() {
  let reimbursementCosts = {
    health: 5000, housing: 8000, wellness: 6000, gym: 12000 
  };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[Employee.getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
};
