let dataStorage = {};

Cypress.Commands.add("store", (key, value, options) => {
  if (!key) throw TypeError(`Missing "key" parameter`);
  if (typeof key !== "string")
    throw TypeError(`"key" parameter must be of type "string"`);
  dataStorage[`${key}`] = value;
});

Cypress.Commands.add("getStored", (key, options) => {
  if (!key) throw TypeError(`Missing "key" parameter`);
  if (typeof key !== "string")
    throw TypeError(`"key" parameter must be of type "string"`);
  return cy.wrap(dataStorage[`${key}`], { log: false });
});

Cypress.Commands.add("removeStored", (key, options) => {
  if (!key) throw TypeError(`Missing "key" parameter`);
  if (typeof key !== "string")
    throw TypeError(`"key" parameter must be of type "string"`);
  dataStorage[`${key}`] = null;
});

Cypress.Commands.add("flushStored", (options) => {
  dataStorage = {};
});

Cypress.Commands.add("logStored", () => {
  console.log(dataStorage);
});
