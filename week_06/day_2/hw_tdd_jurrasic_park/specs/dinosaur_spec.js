import { strictEqual } from "assert";
import Dinosaur from "../models/dinosaur.js";

describe("Dinosaur", function () {
  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur("t-rex", "carnivore", 50);
  });

  it("should have a species", function () {
    const actual = dinosaur.species;
    strictEqual(actual, "t-rex");
  });

  it("should have a diet", function () {
    const actual = dinosaur.diet;
    strictEqual(actual, "carnivore");
  });

  it("should have an average number of visitors it attracts per day", function () {
    const actual = dinosaur.guestsAttractedPerDay;
    strictEqual(actual, 50);
  });
});
