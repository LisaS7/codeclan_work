import Counter from "../components/Counter";
import React from "react";
import { render } from "@testing-library/react";

describe("Counter", () => {
  let counter;

  beforeEach(() => {
    counter = render(<Counter />);
  });

  it("should start the counter at zero", () => {
    const counterH1 = counter.getByTestId("counter");
    expect(counterH1.textContent).toEqual("0");
  });

  xit("should increment counter on click", () => {});

  xit("should decrement counter on click", () => {});
});
