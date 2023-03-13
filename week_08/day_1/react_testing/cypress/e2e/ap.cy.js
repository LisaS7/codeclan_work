describe("app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("starts the counter with zero", () => {
    cy.get("h1").should("contain", "0");
  });
});
