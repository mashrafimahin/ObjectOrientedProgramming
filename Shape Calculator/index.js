//! OOP - Shape Calculator

//! Calculate area & perimeter for:
//* Circle
//* Rectangle
//* Triangle

//! Rules:
//* Each shape overrides methods
//* One base class Shape

//! OOP Concepts:
//* Inheritance
//* Polymorphism
//* Method overriding

//! Solution:
class Shape {
  #type;
  constructor(shape) {
    this.#type = shape;
  }

  getType() {
    return this.#type;
  }

  // general area
  getArea() {
    throw new Error("Values must be inputed");
  }

  getPerimeter() {
    throw new Error("Values must be inputed");
  }
}

class Circle extends Shape {
  #radius;
  constructor(radius) {
    super("Circle");
    this.#radius = radius;
  }

  // override
  getArea() {
    let value = this.#radius;
    let area = Math.abs(Math.PI * value * value);
    let rounded = Math.round(area * 100) / 100;
    return `${this.getType()} Area: ${rounded}`;
  }

  getPerimeter() {
    let perimeter = Math.round(Math.PI * 2 * this.#radius * 100) / 100;
    return `${this.getType()} perimeter: ${perimeter}`;
  }
}

class Rectangle extends Shape {
  #length;
  #height;
  constructor(length, height) {
    super("Rectangle");
    this.#height = height;
    this.#length = length;
  }

  getArea() {
    let abs = Math.abs(this.#length * this.#height);
    let rounded = Math.round(abs * 100) / 100;
    return `${this.getType()} Area: ${rounded}`;
  }

  getPerimeter() {
    let perimeter = 2 * (this.#length + this.#height);
    return `${this.getType()} perimeter: ${perimeter}`;
  }
}

class Triangle extends Shape {
  #length;
  #height;
  constructor(length, height) {
    super("Triangle");
    this.#length = length;
    this.#height = height;
  }

  // override
  getArea() {
    let area = Math.abs(0.5 * this.#height * this.#length);
    let rounded = Math.round(area * 100) / 100;
    return `${this.getType()} Area: ${rounded}`;
  }

  getPerimeter(restValue) {
    if (!restValue) throw Error("You have to input rest value of triangle");
    let perimeter = this.#length + this.#height + restValue;
    return `${this.getType()} perimeter: ${perimeter}`;
  }
}

//! Testcases:
const circle = new Circle(4);
const rectangle = new Rectangle(4, 5);
const triangle = new Triangle(4, 5);
circle.getPerimeter(); // 62.83
rectangle.getArea(); // 20
triangle.getArea(); // 10
