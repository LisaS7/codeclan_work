import { strictEqual } from "assert";
import Paint from "../models/paint.js";

describe("Paint", function () {
  let paint;

  this.beforeEach(function () {
    paint = new Paint(12);
  });

  it("should have a number of litres of paint", function () {
    const actual = paint.litres;
    const expected = 12;
    strictEqual(actual, expected);
  });

  it("Should be able to check if it is empty", function () {
    const actual = paint.isEmpty;
    const expected = false;
    strictEqual(actual, expected);
  });

  it("Should be able to empty itself of paint", function () {
    paint.empty();
    const actual = paint.isEmpty;
    const expected = true;
    strictEqual(actual, expected);
  });
});
