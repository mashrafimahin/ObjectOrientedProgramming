//! OOP - Bank Account System

//! Description
//? Create a system where users can:
//* > Create a bank account
//* > Deposit money
//* > Withdraw money
//* > Check balance
//? OOP Concepts:
//* > Class
//* > Encapsulation
//* > Methods vs properties
//? Hints:
//* > BankAccount class
//* > Private balance (use convention or #balance)
//* > Methods: deposit(), withdraw()

//! Solution:
class BankAccount {
  #balance;
  #age;

  constructor(name, age, balance) {
    this.name = name;
    this.#age = age;
    this.#balance = balance;
  }

  CheckBalance() {
    return `Your current account balance is ${this.#balance}$.`;
  }

  Deposite(amount) {
    this.#balance += amount;
    return `Your new balance is ${this.#balance}$.`;
  }

  WithDraw(amount) {
    this.#balance -= amount;
    return `Your requested amount ${amount}$ withdraw is successfull. New balance is ${this.#balance}$.`;
  }
}

//! Testcases:
const Mahin = new BankAccount("Mashrafi", 20, 50000);
const data = {
  checkBalance: Mahin.CheckBalance(),
  DepositeMoney: Mahin.Deposite(5000),
  WithdrawMoney: Mahin.WithDraw(7000),
};
console.log(data);
