let dataStorage = {};

Cypress.Commands.add("store", (key, value, options) => {
  options?.log && cy.log(`Storing ${key} = ${value}`);
  dataStorage[`${key}`] = value;
});

Cypress.Commands.add("getStored", (key, options) => {
  options?.log && cy.log(`Getting stored value ${key} = ${value}`);
  return cy.wrap(dataStorage[`${key}`], { log: false });
});

Cypress.Commands.add("removeStored", (key, options) => {
  options?.log && cy.log(`Removing stored value ${key}`);
  dataStorage[`${key}`] = null;
});

Cypress.Commands.add("flushStored", (options) => {
  options?.log && cy.log(`Wipe out all stored values`);
  dataStorage = {};
});

Cypress.Commands.add("logStored", () => {
  cy.log(dataStorage);
  console.log(dataStorage);
});
