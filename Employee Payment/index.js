//! OOP - Employee Payroll System

//! Problem:
//* Full-time employees
//* Part-time employees
//* Contract employees
//* Different salary calculations

//! OOP Concepts:
//* Abstract behavior
//* Polymorphism
//* Code reuse

//! Entitie:
//* Employee (base)
//* FullTimeEmployee
//* PartTimeEmployee

//! Solution:
class Employee {
  #name;
  #payRate;
  #time;
  constructor(name, payRate, workHour) {
    this.#name = name;
    this.#payRate = payRate;
    this.#time = workHour;
  }

  getName() {
    return this.#name;
  }

  getPayRate() {
    return this.#payRate;
  }

  getWorkTime() {
    return this.#time;
  }

  getSalary() {
    throw new Error("Salary scale must be included");
  }

  getSummary() {
    return {
      employeName: this.#name,
      countedDay: new Date().getUTCDate(),
      hourlyRate: this.#payRate,
      currentTotal: this.getSalary(),
    };
  }
}

class FullTimeEmployee extends Employee {
  constructor(name, payRate, workHour) {
    super(name, payRate, workHour);
  }

  getSalary() {
    let days = new Date().getUTCDate();
    return this.getPayRate() * this.getWorkTime() * days;
  }
}

class PartTimeEmployee extends Employee {
  constructor(name, payRate, workHour) {
    super(name, payRate, workHour);
  }

  getSalary() {
    let days = new Date().getUTCDate();
    return this.getPayRate() * this.getWorkTime() * days;
  }
}

class ContractEmployee extends Employee {
  constructor(name, payRate, workHour) {
    super(name, payRate, workHour);
  }

  getSalary() {
    return this.getPayRate() * this.getWorkTime();
  }

  getSummary() {
    return {
      ...super.getSummary(),
      duration: this.getWorkTime(),
    };
  }
}

//! Testcases:
const full = new FullTimeEmployee("Alice", 100, 8);
const part = new PartTimeEmployee("Bob", 50, 3);
const contract = new ContractEmployee("Alyah", 200, 20);

full.getSummary();
part.getSummary();
contract.getSummary();
