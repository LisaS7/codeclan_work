var sports = ["Strongman", "Crossfit", "Motocross"];

console.log(sports);

var numberOfElements = sports.length;

// Accessing array elements
var firstSport = sports[0];

// Array methods
sports.push("MotoGP");
sports.pop();
sports.unshift("Cycling"); // adds an element at the beginning

var removedSport = sports.splice(1, 1, "Cheese", "Banana"); // can remove and also add items
console.log(removedSport);
console.log(sports);
