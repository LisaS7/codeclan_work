const Pet = require("./pet.js");
const Person = require("./person.js");

const spock = new Pet("Spock", "cat");
const lisa = new Person("Lisa", spock);

lisa.feedPet("chicken wing");
