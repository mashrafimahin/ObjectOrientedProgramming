//! OOP - Notification System

//! Send notifications via:
//* Email
//* SMS
//* Push notification

//! Rules:
//* Same method: send()
//* Different implementations

//! OOP Concepts:
//* Polymorphism
//* Open–Closed Principle

//! Solution:
class Notification {
  #method;
  constructor(method) {
    this.#method = method;
  }

  send() {
    return { mode: this.#method };
  }
}

class Email extends Notification {
  #subject;
  #body;
  constructor(subject, body) {
    super("Email");
    this.#subject = subject;
    this.#body = body;
  }

  send() {
    return {
      ...super.send(),
      subject: this.#subject,
      body: this.#body,
    };
  }
}

class SMS extends Notification {
  #message;
  constructor(message) {
    (super("SMS"), (this.#message = message));
  }

  send() {
    return {
      ...super.send(),
      message: this.#message,
    };
  }
}

class Push extends Notification {
  #notification;
  constructor(notification) {
    (super("Notification"), (this.#notification = notification));
  }

  send() {
    return {
      ...super.send(),
      notification: this.#notification,
    };
  }
}

//! Testcases:
const subj = "Going  for a trip.";
const body = "This is body where we implemented description about vacation.";
const email = new Email(subj, body);
const sms = new SMS(body);
const push = new Push(subj);
