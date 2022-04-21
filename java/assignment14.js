
// Problem 1
let employees = [
  {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raise: true,
  },
  {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raise: true,
  },
  {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raise: false,
  },
];
console.log('Problem 1', employees);

// Problem 2
let company = {
  companyName: "Tech Stars",
  website: "www.techstars.site",
  employees: employees,
}
console.log('Problem 2', company);

// Problem 3
function addEmployee(firstName, department, designation, salary, raise) {
  let employee = {firstName, department, designation, salary, raise};
  employees.push(employee);
}
addEmployee("Anna", "Tech", "Executive", 25600, false);
console.log('Problem 3', company)

// Problem 4
let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}
console.log('Problem 4', totalSalary);

// Problem 5
for (let i = 0; i < employees.length; i++) {
  if (employees[i].raise === true){
    employees[i].salary = employees[i].salary *1.1;
  }
}
console.log('Problem 5', employees);

// Problem 6
let workingFromHome = ['Anna', 'Sam'];
for (let i = 0; i < employees.length; i++) {
  if (workingFromHome.includes(employees[i].firstName)){
    employees[i].wfh = true;
  }
  else {
    employees[i].wfh = false;
  }
}
console.log('Problem 6', employees);
