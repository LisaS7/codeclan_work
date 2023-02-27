// Function declaration
function sayHello(person = "Alec") {
  // default parameter
  return `Hello ${person}!`;
}

console.log(sayHello("Spock"));

// Function expression
var add = function (num1, num2) {
  return num1 + num2;
};

function calculateTotal(numberArray) {
  var total = 0;
  for (var num of numberArray) {
    total += num;
  }
  return total;
}

var numbers = [1, 5, 10];

console.log(`Sum numbers: ${calculateTotal(numbers)}`);

var objectHasKey = function (object, searchString) {
  for (var key in object) {
    if (searchString === key) {
      return true;
    }
  }
  return false;
};

var person = {
  name: "Spock",
  age: 9,
};

var keyIsFound = objectHasKey(person, "age");
var keyNotFound = objectHasKey(person, "monsterTruck");

console.log(`Found key: ${keyIsFound}`);
console.log(`Found key: ${keyNotFound}`);

// arrow function
var multiply = (num1, num2) => num1 * num2;

console.log(`9 x 9 = ${multiply(9, 9)}`);
