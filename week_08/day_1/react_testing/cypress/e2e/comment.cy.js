describe("comment", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("should have 2 comments", () => {
    cy.get("#comment-list > li").should("have.length", 2);
  });
  it("should be able to add a comment", () => {
    cy.get("#name-input").type("Spock");
    cy.get("#comment-input").type("Meow");
    cy.get("#comment-form").submit();
    cy.get("#comment-list > li").should("have.length", 3);
  });
  it("should have buttons", () => {
    cy.findByRole("button");
  });
});
