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

  it("should chain multiple operations", () => {
    clickButtons([4, "+", 5, "*", 3, "-", 2, "="]);
    cy.get(".display").should("contain", "25");
  });

  it("should output negative number", () => {
    clickButtons([3, "-", 9, "="]);
    cy.get(".display").should("contain", "-6");
  });

  it("should output decimal", () => {
    clickButtons([5, "/", 2, "="]);
    cy.get(".display").should("contain", "2.5");
  });

  it("should output large number", () => {
    clickButtons([9, 9, 9, 9, 9, 9, 9, 9, "*", 9, 9, 9, 9, 9, 9, 9, 9, "="]);
    cy.get(".display").should("contain", "9999999800000000");
  });

  it("should show error when asked to divide by zero", () => {
    clickButtons([5, "/", 0, "="]);
    cy.get(".display").should("contain", "error: div 0");
  });
});
