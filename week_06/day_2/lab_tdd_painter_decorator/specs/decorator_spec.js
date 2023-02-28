import Decorator from "../models/decorator.js";
import Paint from "../models/paint.js";
import Room from "../models/room.js";
import { deepStrictEqual, strictEqual, ok } from "assert";

describe("Decorator", function () {
  let decorator;
  this.beforeEach(function () {
    decorator = new Decorator();
  });

  it("should start with empty paint stock", function () {
    const actual = decorator.stock;
    const expected = [];
    deepStrictEqual(actual, expected);
  });
  it("should be able to add a can of paint to stock", function () {
    const can1 = new Paint(7);
    decorator.addPaint(can1);
    ok(decorator.stock.includes(can1));
  });
  it("should be able to calculate liters of paint in stock", function () {
    const can1 = new Paint(7);
    const can2 = new Paint(12);
    decorator.addPaint(can1);
    decorator.addPaint(can2);

    const actual = decorator.paintInStock();
    const expected = 19;
    strictEqual(actual, expected);
  });
  it("should be able to calculate if it has enough paint to paint a room", function () {
    const room = new Room(15);
    const can1 = new Paint(17);
    decorator.addPaint(can1);
    ok(decorator.canPaint(room));
  });
  it("should be able to paint a room if it has enough paint in stock", function () {
    const room = new Room(15);
    const can1 = new Paint(17);
    decorator.addPaint(can1);
    decorator.paint(room);
    ok(room.painted);
    const remainingPaint = decorator.paintInStock();
    strictEqual(remainingPaint, 2);
  });
  it("should be able to remove empty cans from stock", function () {
    const can1 = new Paint(0);
    const can2 = new Paint(3);
    const can3 = new Paint(0);
    const can4 = new Paint(7);
    decorator.stock = [can1, can2, can3, can4];
    decorator.tidyUp();
    deepStrictEqual(decorator.stock, [can2, can4]);
  });
});
