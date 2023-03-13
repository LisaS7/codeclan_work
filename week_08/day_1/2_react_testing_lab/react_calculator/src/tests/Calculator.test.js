import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  let button1, button3, button4, button5, button7;
  let buttonPlus, buttonMinus, buttonMultiply, buttonEquals;
  let runningTotal;

  beforeEach(() => {
    container = render(<Calculator />);
    button1 = container.getByTestId("number1");
    button3 = container.getByTestId("number3");
    button4 = container.getByTestId("number4");
    button5 = container.getByTestId("number5");
    button7 = container.getByTestId("number7");
    buttonPlus = container.getByTestId("operator-add");
    buttonMinus = container.getByTestId("operator-subtract");
    buttonMultiply = container.getByTestId("operator-multiply");
    buttonEquals = container.getByTestId("operator-equals");
    runningTotal = container.getByTestId("running-total");
  });

  it("should change running total on number enter", () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add two numbers", () => {
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract one number from another", () => {
    fireEvent.click(button7);
    fireEvent.click(buttonMinus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("3");
  });

  it("should multiply two numbers", () => {
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("15");
  });
});
