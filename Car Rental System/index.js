//! OOP - Car Rental System

//! Problem:
//* Cars can be rented and returned
//* Each car has availability status
//* Calculate rental price based on days

//! OOP Concepts:
//* State management
//* Behavior inside objects

//! Entities
//* Car
//* RentalService

//! Solution:
class Car {
  #name;
  #pricePerDay;
  #available;

  constructor(name, pricePerDay, available = true) {
    ((this.#name = name),
      (this.#pricePerDay = pricePerDay),
      (this.#available = available));
  }

  // export name
  getName() {
    return this.#name;
  }

  // export availability
  isAvailable() {
    return this.#available;
  }

  // change status
  unavailable() {
    return (this.#available = false);
  }
  available() {
    return (this.#available = true);
  }

  // price calculate
  totalPrice(duration) {
    return Math.ceil(this.#pricePerDay * duration);
  }
}

class RentalService {
  #cars;
  #rented;

  constructor(obj) {
    this.#cars = obj;
    this.#rented = new Map();
  }

  //  car list
  findCar() {
    return this.#cars.filter((c) => c.isAvailable()).map((c) => c.getName());
  }

  // rent car
  rentCar(name, duration) {
    let rented = this.#rented;
    let price;
    // checkpoint
    if (rented.has(name.toLowerCase())) {
      return "Sorry, this car is booked.";
    } else {
      // find exact car
      let carDetails = this.#cars.find((c) => {
        // calculate price
        price = c.totalPrice(duration);
        // change status
        c.unavailable();
        // return message
        return c.getName() === name.toLowerCase();
      });
      // save references
      rented.set(name.toLowerCase(), carDetails);
      // send message
      return `Your rent request for ${name.toUpperCase()} is successful and total cost is $${price}. You have to pay $${price / 2} advance. Enjoy your trip.`;
    }
  }

  // return car
  returnCar(name) {
    const lower = name.toLowerCase();
    let rented = this.#rented;
    let cars = this.#cars;
    // checkpoint
    if (rented.has(lower)) {
      cars.find((c) => {
        // change status
        c.available();
        return c.getName() === lower;
      });
      // remove references
      rented.delete(lower);
      // message
      return `Your car return request for ${name.toUpperCase()} is successfull. Thanks for choosing us.`;
    } else {
      return "Something is wrong. Please re-check your information.";
    }
  }
}

//! Testcases:
const cars = [
  new Car("bmw", 100),
  new Car("honda", 80, false),
  new Car("mustang", 150),
  new Car("lamborghini", 300, false),
];

const service = new RentalService(cars);

service.findCar();
service.rentCar("mustang", 10); // true
service.rentCar("mustang", 5); // false
service.returnCar("mustang"); // true
