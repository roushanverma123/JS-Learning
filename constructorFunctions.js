// creating objects using functions -- this is also called functional contructors
// good practice is to use Capital first letter for the functional constructor name
function Car(company, model) {
  this.company = company;
  this.mode = model;

  //checking if the functional constructor is really being called using new keyword
  //   if not then we throw error
  if (!new.target) {
    throw new Error("Car must be called using new keyword");
  }
  this.describe = function () {
    return `this is a new ${this.company}'s latest ${model}"`;
  };
}

let myToyota = new Car("toyota", "camry");
let myTesla = new Car("tesla", "model 3");
console.log(myTesla.describe());
console.log(myToyota.describe());
