describe("Calculator", () => {
  function clickButtons(buttons) {
    for (let button of buttons) {
      cy.get(button).click();
    }
  }

  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should have working number buttons", () => {
    cy.get("#number2").click();
    cy.get(".display").should("contain", "2");
  });

  it("should update the running total display", () => {
    clickButtons(["#number3", "#number1", "#number5"]);
    cy.get(".display").should("contain", "315");
  });
});
