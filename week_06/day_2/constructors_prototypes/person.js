const Person = function (name, pet) {
  this.name = name;
  this.pet = pet;
};

Person.prototype.greet = function () {
  console.log(`Greetings, my name is ${this.name}`);
};

Person.prototype.feedPet = function (food) {
  const message = `${this.name} fed ${this.pet.name} a ${food}`;
  console.log(message);
  this.pet.eat(food);
};

// shaggy.hello = function () {
//   console.log(`Hello, I'm ${this.name}`);
// };

// shaggy.hello();

module.exports = Person;
