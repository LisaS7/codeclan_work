const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let park;
  const dino1 = new Dinosaur("Ankylosaurus", "Herbivore", 12);
  const dino2 = new Dinosaur("Corythosaurus", "Herbivore", 20);
  const dino3 = new Dinosaur("Velociraptor", "Carnivore", 45);
  const dino4 = new Dinosaur("Ceratosaurus", "Carnivore", 28);
  const dino5 = new Dinosaur("Struthiomimus", "Omnivore", 24);
  const dino6 = new Dinosaur("Ankylosaurus", "Herbivore", 11);

  beforeEach(function () {
    let dinos = [dino1, dino2, dino3, dino4, dino5, dino6];
    park = new Park("Landmark", 8, dinos);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Landmark");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 8);
  });

  it("should have a collection of dinosaurs", function () {
    const actual = park.dinos.length;
    assert.strictEqual(actual, 6);
  });

  it("should be able to add a dinosaur to its collection", function () {
    dinoAdd = new Dinosaur("Gallimimus", "Omnivore", 18);
    park.addDino(dinoAdd);
    const actual = park.dinos.includes(dinoAdd);
    assert.ok(actual);
  });

  it("should be able to remove a dinosaur from its collection", function () {
    park.removeDino(dino3);
    const actual = park.dinos.includes(dino3);
    assert.strictEqual(actual, false);
  });

  it("should be able to find the dinosaur that attracts the most visitors", function () {
    const actual = park.mostPopularDino();
    assert.strictEqual(actual, dino3);
  });

  it("should be able to find all dinosaurs of a particular species", function () {
    const actual = park.dinosBySpecies("Ankylosaurus");
    assert.deepStrictEqual(actual, [dino1, dino6]);
  });

  it("should be able to calculate the total number of visitors per day", function () {
    const actual = park.dailyVisitors();
    assert.strictEqual(actual, 140);
  });

  it("should be able to calculate the total number of visitors per year", function () {
    const actual = park.annualVisitors();
    assert.strictEqual(actual, 51100);
  });

  it("should be able to calculate total revenue for one year", function () {
    const actual = park.yearlyRevenue();
    assert.strictEqual(actual, 51100 * 8);
  });

  it("should be able to remove dinos by species", function () {
    park.removeBySpecies("Ankylosaurus");
    assert.deepStrictEqual(park.dinos, [dino2, dino3, dino4, dino5]);
  });

  it("should be able to group dinos by diet", function () {
    const actual = park.dinosByDiet();
    const expected = { Herbivore: 3, Carnivore: 2, Omnivore: 1 };
    assert.deepStrictEqual(actual, expected);
  });
});
