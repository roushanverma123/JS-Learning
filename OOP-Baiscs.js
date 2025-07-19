let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,

  describe: function () {
    return `${this.make}'s new model ${this.model} was launched in year ${this.year}`;
  },
};

// console.log(car.describe());

//prototypal chain
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `Hail ${this.type}`;
};

let testAnimal = new Animal("Hydera!!!");
// console.log(testAnimal.speak());

class Vehicle {
  constructor(model, company) {
    this.model = model;
    this.company = company;
  }

  details() {
    return `The vehicle model : ${this.model} made by ${this.company}`;
  }
}
//inheritance
class Car extends Vehicle {
  constructor(model, company, type) {
    super(model, company);
    this.type = type;
  }

  carDetails() {
    return `The company ${this.company} made this car ${this.model} of type ${this.type}`;
  }
}

let myCar = new Car("Camry", "Toyota", "Automatic");
// console.log(myCar.details());
// console.log(myCar.carDetails());

//Encapsulation
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `Acount Balance : $${this.#balance}`;
  }
}

let myAcc = new BankAccount();
// console.log(myAcc.getBalance());
// console.log(myAcc.deposit(50000));
// console.log(myAcc.getBalance());

//abstraction - hides the complicated detials
class CoffeeMachine {
  start() {
    return `starting the machine`;
  }

  stop() {
    return `stopping the machine`;
  }

  brewcoffee() {
    return `brewing coffee`;
  }

  forth() {
    return `frothing the drink`;
  }

  steamWandOn() {
    return `steam wand on`;
  }

  steamWandOff() {
    return `steam wand off`;
  }
}

let myCaffee = new CoffeeMachine();
// console.log(myCaffee.start());
// console.log(myCaffee.brewcoffee());
// console.log(myCaffee.forth());
// console.log(myCaffee.steamWandOn());
// console.log(myCaffee.steamWandOff());
// console.log(myCaffee.stop());

//polymorphism
//method overriding
class Bird {
  fly() {
    return `the bird can fly`;
  }
}

class Penguin extends Bird {
  fly() {
    return `The Penguin Cannot fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly());
console.log(penguin.fly());

//getters and setters
// #place is used for private
class Test {
  #number = 10;
  static say() {
    return `this is a static method not dependent on the object `;
  }

  get number() {
    return `this is the number ${this.#number}`;
  }

  set number(value) {
    this.#number = value;
  }
}

let testObj = new Test();
console.log(testObj.number);
testObj.number = 1023;
console.log(testObj.number);

console.log(Test.say());
