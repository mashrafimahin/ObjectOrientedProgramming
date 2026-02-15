// Storage
class SubscriptionStorage {
  static data = new Map();

  static save(user, subscription) {
    this.data.set(user, subscription);
  }

  static get(user) {
    return this.data.get(user);
  }

  static remove(user) {
    this.data.delete(user);
  }
}

// Plan
class Plan {
  #type;
  #pricePerDay;
  #duration;

  constructor(type, pricePerDay, duration) {
    this.#type = type;
    this.#pricePerDay = pricePerDay;
    this.#duration = duration;
  }

  getDetails() {
    return {
      plan: this.#type,
      pricePerDay: this.#pricePerDay,
      duration: this.#duration,
      totalCost: this.#pricePerDay * this.#duration,
    };
  }
}

// Billinng
class BillingStrategy {
  calculate(plan) {
    throw new Error("Strategy must implement calculate()");
  }
}

class MonthlyBillingStrategy extends BillingStrategy {
  calculate(plan) {
    return plan.getDetails();
  }
}

// Subscription Entity
class Subscription {
  #user;
  #plan;
  #timeLeft;

  constructor(user, plan) {
    this.#user = user;
    this.#plan = plan;
    this.#timeLeft = plan.getDetails().duration;
  }

  getUser() {
    return this.#user;
  }

  getStatus() {
    return {
      ...this.#plan.getDetails(),
      timeLeft: this.#timeLeft,
    };
  }

  reduceTime(days) {
    this.#timeLeft -= days;

    if (this.#timeLeft <= 0) {
      SubscriptionStorage.remove(this.#user);
      return "Subscription expired";
    }

    return this.getStatus();
  }
}

// Billing Service
class BillingService {
  #strategy;

  constructor(strategy) {
    this.#strategy = strategy;
  }

  purchase(user, plan) {
    const billingInfo = this.#strategy.calculate(plan);

    const subscription = new Subscription(user, plan);
    SubscriptionStorage.save(user, subscription);

    return {
      message: "Subscription activated",
    };
  }
}

// Expiration Service
class ExpirationService {
  static reduceUserTime(user, days) {
    const sub = SubscriptionStorage.get(user);

    if (!sub) {
      return { plan: "free" };
    }

    return sub.reduceTime(days);
  }
}

// Plan Factory
class PlanFactory {
  static free() {
    return new Plan("free", 0, 0);
  }

  static premiumMonthly() {
    return new Plan("premium", 10, 30);
  }
}

// Test Cases
const billing = new BillingService(new MonthlyBillingStrategy());

// Buy premium plan
console.log(billing.purchase("Mahin", PlanFactory.premiumMonthly()));

// Check status
console.log(SubscriptionStorage.get("Mahin")?.getStatus());

// Reduce 10 days
console.log(ExpirationService.reduceUserTime("Mahin", 10));

// Reduce remaining days
console.log(ExpirationService.reduceUserTime("Mahin", 25));

// After expiration
console.log(SubscriptionStorage.get("Mahin") ?? { plan: "free" });
