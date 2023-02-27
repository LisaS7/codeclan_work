console.log("Hello World");

// declare a variable
var greeting = "Hello";

// check type
console.log(typeof "abc");

// string methods and properties
"abc".toUpperCase();
"abc".length;

// convert to string or number
String(9);
Number("3");

// String interpolation
var person = "Spock";
console.log(`Hello ${person}!`);

// If statements
if (1 > 0) {
  console.log("this is true!");
} else if (0 > 3) {
  console.log("this is not true!");
} else {
  console.log("this will never print!");
}

// Falsey
0;
("");
null;
undefined;
false;
NaN;

// Truthy
("0");
("false");
// [] empty array
// {} empty object
