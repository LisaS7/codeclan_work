import React from "react";
import Calculator from "../containers/Calculator";
import { render, fireEvent } from "@testing-library/react";

describe("Calculator", () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator />);
  });

  it("should change running total on number enter", () => {
    const button4 = container.getByTestId("number4");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual("4");
  });

  it("should add two numbers", () => {
    const button1 = container.getByTestId("number1");
    const button4 = container.getByTestId("number4");
    const buttonPlus = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("5");
  });

  it("should subtract one number from another", () => {
    const button4 = container.getByTestId("number4");
    const button7 = container.getByTestId("number1");
    const buttonPlus = container.getByTestId("operator-add");
    const buttonEquals = container.getByTestId("operator-equals");
    const runningTotal = container.getByTestId("running-total");
    fireEvent.click(button1);
    fireEvent.click(buttonPlus);
    fireEvent.click(button4);
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual("5");
  });
});
