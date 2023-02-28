import { strictEqual, ok } from "assert";
import Room from "../models/room.js";

describe("Room", function () {
  let room;
  this.beforeEach(function () {
    room = new Room(100);
  });

  it("should have an area in sq meters", function () {
    const actual = room.area;
    const expected = 100;
    strictEqual(actual, expected);
  });

  it("should start not painted", function () {
    const actual = room.painted;
    const expected = false;
    strictEqual(actual, expected);
  });

  it("should be able to be painted", function () {
    room.paint();
    ok(room.painted);
  });
});
