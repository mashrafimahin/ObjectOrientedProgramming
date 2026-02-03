//! OOP - Student Management System

//! Problem:
//* Create students
//* Assign grades
//* Calculate average
//* Determine pass/fail

//! OOP Concepts:
//* Constructor
//* Instance methods
//* Data ownership

//! Entities:
//* Student
//* Optional: ClassRoom

//! Solution:
class Student {
  #age;
  #grade;

  constructor(name, age, grade) {
    this.name = name;
    this.#age = age;
    this.#grade = grade;
  }

  static getGrade(value) {
    if (value > 79 && value <= 100) return "A+";
    else if (value > 69 && value <= 79) return "A";
    else if (value > 59 && value <= 69) return "B";
    else if (value > 49 && value <= 59) return "C";
    else if (value > 34 && value <= 49) return "D";
    else return "F";
  }

  avgGrade() {
    let length = Object.keys(this.#grade).length;
    let sum = Object.values(this.#grade).reduce((acc, curr) => acc + curr, 0);
    return Math.round(sum / length);
  }

  getResult() {
    let newObj = {};

    for (let key in this.#grade) {
      let value = this.#grade[key];
      newObj[key] = Student.getGrade(value);
    }

    return newObj;
  }

  getSummary() {
    return {
      name: this.name,
      AvarageScore: this.avgGrade(),
      Result: this.getResult(),
    };
  }
}

//! Testcase:
// student 01
const scoreMahin = {
  English: 98,
  Math: 100,
  Physics: 96,
};
const Mahin = new Student("Mahin", 20, scoreMahin);

// student 02
const scoreMugdho = {
  English: 90,
  Math: 53,
  Bangla: 30,
  Science: 16,
};
const Mugdho = new Student("Mugdho", 15, scoreMugdho);

console.log(Mugdho.getSummary());
