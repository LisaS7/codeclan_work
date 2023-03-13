import React from "react";
import Calculator from "../containers/Calculator";
import { buttonMap } from "./button_map";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  let runningTotal;

  function chainClicks(buttons) {
    for (const button of buttons) {
      const buttonElement = container.getByTestId(buttonMap[button]);
      fireEvent.click(buttonElement);
    }
  }
  beforeEach(() => {
    container = render(<Calculator />);
    runningTotal = container.getByTestId("running-total");
  });

  it("should change running total on number enter", () => {
    chainClicks([4]);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add two numbers", () => {
    chainClicks([1, "+", 4, "="]);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract one number from another", () => {
    chainClicks([7, "-", 4, "="]);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should multiply two numbers", () => {
    chainClicks([3, "*", 5, "="]);
    expect(runningTotal.textContent).toEqual("15");
  });

  it("should divide one number by another", () => {
    chainClicks([2, 1, "/", 7, "="]);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should concatenate multiple number buttons", () => {
    chainClicks([1, 1, 5]);
    expect(runningTotal.textContent).toEqual("115");
  });

  it("should chain multiple operations", () => {
    chainClicks([3, "+", 4, "*", 2, "="]);
    expect(runningTotal.textContent).toEqual("14");
  });

  it("should clear the running total without affecting the calculation", () => {
    chainClicks([2, "+", 4, "+", 5, "C", 1, "="]);
    expect(runningTotal.textContent).toEqual("7");
  });
});
