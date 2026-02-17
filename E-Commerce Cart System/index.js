//! OOP - E-Commerce Cart System

//! Problem:
//* Add/remove products -- done
//* Calculate total -- done
//* Apply discount -- done
//* Apply tax -- done

//! OOP Concepts:
//* Composition
//* Responsibility separation

//! Entities:
//* Cart -- done
//* Product -- done
//* Discount -- done

//! Solution:
class Cart {
  #storage;
  constructor() {
    this.#storage = new Map();
  }
  // save items inside storage
  setItems(obj, quantity = 1) {
    let temp = {
      name: obj.name,
      price: obj.price + obj.tax * quantity,
      quantity: quantity,
    };
    // set
    this.#storage.set(obj.name, temp);
    // message
    return `${quantity} ${temp.name}'s are added to cart. Current total price is: $${temp.price}`;
  }
  // remove items from storage
  removeItems(obj) {
    // remove
    this.#storage.delete(obj.name);
    // message
    return `All the ${obj.name}'s removed from the cart successfully.`;
  }
  // checkout
  checkOut() {
    let productNames = [];
    let totalPrice = 0;
    // loop
    for (const item of this.#storage) {
      productNames.push(item[0]);
      totalPrice += item[1].price;
    }
    // summary
    return {
      products: productNames,
      currentTotal: totalPrice,
    };
  }
}

class Product {
  constructor(name, price, tax = 1) {
    ((this.name = name), (this.price = price), (this.tax = tax));
  }
}

class Discount {
  #value;
  #discount;
  constructor(obj, value) {
    this.#discount = obj;
    this.#value = value;
  }
  // getDiscountedPrice
  getDiscountedPrice() {
    const temp = this.#discount.currentTotal;
    return {
      ...this.#discount,
      DiscountedPrice: Math.floor(temp - temp * this.#value),
    };
  }
}

//! Testcases:
const Apple = new Product("Apple", 10, 1.05);
const Banana = new Product("Banana", 5, 0.05);
const cart = new Cart();
// buy products
cart.setItems(Apple, 5);
cart.setItems(Banana, 10);
// checkout
cart.checkOut();
// req discount
const disc = new Discount(cart.checkOut(), 1 / 10);
console.log(disc.getDiscountedPrice());
