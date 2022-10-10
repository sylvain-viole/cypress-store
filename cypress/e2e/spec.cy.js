require("../..");

describe("Store some data using", () => {
  it("Stores value", () => {
    cy.store("myKey", "myValue", { log: true });
    cy.store("trueBoolean", true);
    cy.store("number", 666);
    cy.store("object", { foo: "bar" });
  });
});
describe("Get (and log) stored data using", () => {
  it("Gets stored values", () => {
    cy.getStored("myKey").should("eql", "myValue");
    cy.getStored("trueBoolean").should("be.true");
    cy.getStored("number").then((number) => {
      expect(number).to.be.a("number");
    });
    cy.getStored("object").its("foo").should("eql", "bar");
    cy.getStored("notThere").should("not.exist");
  });
  it("Logs stored datas", () => {
    cy.logStored();
  });
});

describe("Removing and flushing data", () => {
  it("Removes stored values", () => {
    cy.removeStored("myKey");
    cy.getStored("myKey").should("not.exist");
  });
  it("Flushes all stored values", () => {
    cy.flushStored();
    cy.getStored("object").should("not.exist");
  });
});
