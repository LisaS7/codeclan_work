import { deepStrictEqual, strictEqual, ok } from "assert";
import Taxi from "../taxi.js";

describe("Taxi", () => {
  let taxi;
  beforeEach(function () {
    taxi = new Taxi("Toyota", "Carina", "Bob");
  });

  it("should have a manufacturer", function () {
    const actual = taxi.manufacturer;
    const expected = "Toyota";
    deepStrictEqual(actual, expected);
  });
  it("should have a model", function () {
    const actual = taxi.model;
    const expected = "Carina";
    strictEqual(actual, expected);
  });
  it("should have a driver", function () {
    const actual = taxi.driver;
    const expected = "Bob";
    strictEqual(actual, expected);
  });
  describe("passengers", function () {
    it("should start with no passengers", function () {
      deepStrictEqual(taxi.passengers, []);
    });
    it("should be able to return the number of passengers", function () {
      strictEqual(taxi.numberOfPassengers(), 0);
    });
    it("should be able to add passenger", function () {
      taxi.addPassenger("Alec");
      ok(taxi.passengers.includes("Alec"));
    });
    it("should be able to remove a passenger by name", function () {
      taxi.addPassenger("Alec");
      taxi.addPassenger("Bob");
      taxi.addPassenger("Chris");
      taxi.removePassengerByName("Bob");
      deepStrictEqual(taxi.passengers, ["Alec", "Chris"]);
    });
    it("should be able to remove all passengers", function () {
      taxi.addPassenger("Alec");
      taxi.addPassenger("Bob");
      taxi.addPassenger("Chris");
      taxi.removeAllPassengers();
      strictEqual(taxi.numberOfPassengers(), 0);
    });
  });
});
