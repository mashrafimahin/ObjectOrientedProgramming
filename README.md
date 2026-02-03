# 🚀 Object-Oriented Programming in JavaScript

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e.svg)
![OOP](https://img.shields.io/badge/OOP-Concepts-blue.svg)
![GitHub repo size](https://img.shields.io/github/repo-size/mashrafimahin/ObjectOrientedProgramming)

> A comprehensive collection of Object-Oriented Programming projects and exercises in JavaScript, designed to master OOP concepts through practical implementation.

## 📖 Table of Contents

- [✨ Features](#-features)
- [📦 Projects](#-projects)
- [🚀 Getting Started](#-getting-started)
- [💻 Usage](#-usage)
- [🎯 OOP Concepts Covered](#-oop-concepts-covered)
- [📞 Contact](#-contact)

## ✨ Features

- 🎯 **Hands-on Learning**: Practical projects to reinforce OOP concepts
- 📚 **Comprehensive Coverage**: All major OOP principles implemented
- 🔧 **Real-world Examples**: Projects based on real-life scenarios
- 📖 **Well Documented**: Clear code comments and explanations
- 🚀 **Modern JavaScript**: ES6+ features and best practices
- 🧪 **Test Cases**: Each project includes working test cases

## 📦 Projects

### 🏦 Bank Account System

![Bank Account](https://img.shields.io/badge/Bank_Account-System-blue.svg)

A complete banking system demonstrating core OOP concepts.

**Features:**

- ✅ Account creation with name, age, and initial balance
- ✅ Secure balance management (private fields)
- ✅ Deposit and withdrawal functionality
- ✅ Balance inquiry

**OOP Concepts:**

- Class definition and constructor
- Private fields (using # syntax)
- Encapsulation and data hiding
- Instance methods

**Usage:**

```javascript
const account = new BankAccount("John Doe", 25, 1000);
console.log(account.CheckBalance()); // "Your current account balance is 1000$."
console.log(account.Deposite(500)); // "Your new balance is 1500$."
console.log(account.WithDraw(200)); // "Your requested amount 200$ withdraw is successful..."
```

---

### 👨‍🎓 Student Management System

![Student Management](https://img.shields.io/badge/Student_Management-System-orange.svg)

A comprehensive student grade management system.

**Features:**

- ✅ Student profile creation
- ✅ Grade assignment and management
- ✅ Average calculation
- ✅ Grade point conversion (A+, A, B, C, D, F)
- ✅ Academic result generation

**OOP Concepts:**

- Static methods for utility functions
- Object manipulation and iteration
- Data transformation and aggregation
- Instance method composition

**Usage:**

```javascript
const student = new Student("Alice", 20, {
  English: 98,
  Math: 100,
  Physics: 96,
});

console.log(student.getSummary());
// {
//   name: "Alice",
//   AvarageScore: 98,
//   Result: { English: "A+", Math: "A+", Physics: "A+" }
// }
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- Basic understanding of JavaScript
- Familiarity with ES6+ syntax

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/mashrafimahin/ObjectOrientedProgramming.git
cd ObjectOrientedProgramming
```

2. **Run the projects:**

```bash
# Run Bank Account System
node "Bank Account System/BankAcc.js"

# Run Car Rental System
node "Car Rental System/index.js"

# Run Student Management System
node "StudentManagement/index.js"

# Run Shape Calculator
node "Shape Calculator/index.js"
```

## 💻 Usage

Each project is self-contained and can be run independently. The projects are designed to:

1. **Demonstrate OOP Concepts**: Each project focuses on specific OOP principles
2. **Provide Working Examples**: All projects include test cases and working code
3. **Encourage Experimentation**: Modify the code to understand how changes affect behavior
4. **Build Foundation**: Progress from simple to complex OOP implementations

### Running Individual Projects

```bash
# Navigate to project directory
cd "Bank Account System"

# Run the project
node BankAcc.js
```

### Understanding the Code

Each project includes:

- **Clear comments** explaining the OOP concepts being demonstrated
- **Test cases** showing how to use the classes
- **Documentation** of the design decisions

## 🎯 OOP Concepts Covered

### Core Principles

- ✅ **Encapsulation**: Data hiding and controlled access
- ✅ **Abstraction**: Hiding complex implementation details
- ✅ **Inheritance**: Code reusability and hierarchy (planned)
- ✅ **Polymorphism**: Multiple forms and method overriding (planned)

### Advanced Concepts

- ✅ **Private Fields**: Using # syntax for true privacy
- ✅ **Static Methods**: Utility functions and class-level operations
- ✅ **Instance Methods**: Object-specific behaviors
- ✅ **State Management**: Object lifecycle and state changes
- ✅ **Data Validation**: Input validation and error handling
- ✅ **Method Chaining**: Fluent interfaces and readable code

### JavaScript-Specific Features

- ✅ **ES6 Classes**: Modern class syntax
- ✅ **Arrow Functions**: Lexical this binding
- ✅ **Destructuring**: Clean data extraction
- ✅ **Template Literals**: String interpolation
- ✅ **Map/Set Objects**: Advanced data structures

### Ideas for New Projects

- 🏠 **Library Management System**
- 🛒 **E-commerce Shopping Cart**
- 🎮 **Game Character System**
- 🏥 **Hospital Management System**
- 📚 **Task Management Application**

## 📞 Contact

**Mashrafi Imahin** - [GitHub Profile](https://github.com/mashrafimahin)

**Project Link**: [https://github.com/mashrafimahin/ObjectOrientedProgramming](https://github.com/mashrafimahin/ObjectOrientedProgramming)

**Email**: [Direct Mail](mailto:mashrafi.devs@gmail.com)

---

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=mashrafimahin/ObjectOrientedProgramming&type=Date)](https://star-history.com/#mashrafimahin/ObjectOrientedProgramming&Date)

**Made with ❤️ for JavaScript developers learning OOP**
