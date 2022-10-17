+(
  /// <reference path="../../src/index.d.ts" />
  require("../../src")
);

const assertedValidValueTypes = [
  { type: "string", value: "bonjour" },
  { type: "boolean", value: true },
  { type: "number", value: 123 },
  { type: "array", value: [1, "a", true] },
  { type: "object", value: { key: "value" } },
];

const assertedErrorKeyTypes = [
  { type: "boolean", value: true },
  { type: "number", value: 123 },
  { type: "array", value: [1, "a", true] },
  { type: "object", value: { key: "value" } },
];

describe("Handles errors", () => {
  let expectedError;

  beforeEach(() => {
    cy.on("fail", (error) => {
      expect(error.message).to.eql(expectedError.message);
      return true;
    });
  });
  it("cy.store() Missing key results in type error", () => {
    expectedError = { message: 'Missing "key" parameter' };
    cy.store();
  });

  assertedErrorKeyTypes.forEach((iteration) => {
    it(`cy.store() Key of type ${iteration.type} results in type error`, () => {
      expectedError = { message: '"key" parameter must be of type "string"' };
      cy.store(iteration.value);
    });
  });

  it("cy.getStored() Missing key results in type error", () => {
    expectedError = { message: 'Missing "key" parameter' };
    cy.getStored();
  });

  assertedErrorKeyTypes.forEach((iteration) => {
    it(`cy.getStored() Key of type ${iteration.type} results in type error`, () => {
      expectedError = { message: '"key" parameter must be of type "string"' };
      cy.getStored(iteration.value);
    });
  });

  it("cy.removeStored() Missing key results in type error", () => {
    expectedError = { message: 'Missing "key" parameter' };
    cy.removeStored();
  });

  assertedErrorKeyTypes.forEach((iteration) => {
    it(`cy.removeStored() Key of type ${iteration.type} results in type error`, () => {
      expectedError = { message: '"key" parameter must be of type "string"' };
      cy.removeStored(iteration.value);
    });
  });
});

describe("Handles all types of values", () => {
  assertedValidValueTypes.forEach((iteration) => {
    it(`cy.store() handles ${iteration.type} value type`, () => {
      cy.store("myKey", iteration.value).then(() => {
        cy.getStored("myKey").should("be.an", iteration.type);
      });
    });
  });
});

describe("Store and Get some data", () => {
  it("Stores value", () => {
    cy.store("myKey", "myValue", { log: true });
  });
  it("Gets stored values", () => {
    cy.getStored("myKey").should("eql", "myValue");
  });

  it("Not stored data does not exist", () => {
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
