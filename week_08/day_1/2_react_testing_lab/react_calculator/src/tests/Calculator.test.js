import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

function chainClicks(buttons) {
  for (const button of buttons) {
    fireEvent.click(button);
  }
}

describe("Calculator", () => {
  let container;
  let button1, button2, button3, button4, button5, button7;
  let buttonPlus, buttonMinus, buttonMultiply, buttonDivide, buttonEquals;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator />);
    button1 = container.getByTestId("number1");
    button2 = container.getByTestId("number2");
    button3 = container.getByTestId("number3");
    button4 = container.getByTestId("number4");
    button5 = container.getByTestId("number5");
    button7 = container.getByTestId("number7");
    buttonPlus = container.getByTestId("operator-add");
    buttonMinus = container.getByTestId("operator-subtract");
    buttonMultiply = container.getByTestId("operator-multiply");
    buttonDivide = container.getByTestId("operator-divide");
    buttonEquals = container.getByTestId("operator-equals");
    runningTotal = container.getByTestId("running-total");
  });

  it("should change running total on number enter", () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add two numbers", () => {
    chainClicks([button1, buttonPlus, button4, buttonEquals]);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract one number from another", () => {
    chainClicks([button7, buttonMinus, button4, buttonEquals]);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should multiply two numbers", () => {
    chainClicks([button3, buttonMultiply, button5, buttonEquals]);
    expect(runningTotal.textContent).toEqual("15");
  });

  it("should divide one number by another", () => {
    chainClicks([button2, button1, buttonDivide, button7, buttonEquals]);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should concatenate multiple number buttons", () => {
    chainClicks([button1, button1, button5]);
    expect(runningTotal.textContent).toEqual("115");
  });

  it("should chain multiple operations", () => {
    chainClicks([
      button3,
      buttonPlus,
      button4,
      buttonMultiply,
      button2,
      buttonEquals,
    ]);
    expect(runningTotal.textContent).toEqual("14");
  });
});
