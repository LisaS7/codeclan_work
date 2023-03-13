import Counter from "../components/Counter";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("Counter", () => {
  let counter;

  beforeEach(() => {
    counter = render(<Counter />);
  });

  it("should start the counter at zero", () => {
    const counterH1 = counter.getByTestId("counter");
    expect(counterH1.textContent).toEqual("0");
  });

  it("should increment counter on click", () => {
    const counterH1 = counter.getByTestId("counter");
    const upButton = counter.getByTestId("button-up");
    fireEvent.click(upButton);
    expect(counterH1.textContent).toEqual("1");
  });

  it("should decrement counter on click", () => {
    const counterH1 = counter.getByTestId("counter");
    const downButton = counter.getByTestId("button-down");
    fireEvent.click(downButton);
    expect(counterH1.textContent).toEqual("-1");
  });
});
