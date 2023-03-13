import { buttonMap } from "./button_map";

describe("Calculator", () => {
  function clickButtons(buttons) {
    for (let button of buttons) {
      cy.get(buttonMap[button]).click();
    }
  }

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    clickButtons([2]);
    cy.get(".display").should("contain", "2");
  });

  it("should update the running total display", () => {
    clickButtons([3, 1, 5]);
    cy.get(".display").should("contain", "315");
  });

  it("should update the display for operations", () => {
    clickButtons([1, "+", 2, "+"]);
    cy.get(".display").should("contain", "3");
  });
});
