require("../..");

describe("Persist some data using cy.persist", () => {
  it("persists", () => {
    cy.persist({value: "myValue", log: true });
  });
});
describe("Retreive data using cy.getPersisted", () => {
  it("reteives", () => {
    cy.getPersisted("myKey").should("eql", "myValue");
  });
});
