let computer = {
  cpu: 12,
  gpu: 10,
};

let lenovo = {
  screen: "HD",
  __proto__: computer,
};

console.log("Lenovo cpu - ", lenovo.cpu, "lenovo gpu - ", lenovo.gpu);

let car = {
  wheels: 4,
  engine: "basic engine",
  seats: 5,
};

let tesla = {
  driver: "AI",
  engine: "electric engine",
};

Object.setPrototypeOf(tesla, car);
console.log("tesla - ", Object.getPrototypeOf(tesla).wheels);
