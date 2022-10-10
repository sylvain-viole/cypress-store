let dataStorage = {};

Cypress.Commands.add("persist", (options) => {
  options?.log && cy.log(`Persisting ${options.key} = ${options?.value}`);
  dataStorage[`${options.key}`] = options?.value;
});

Cypress.Commands.add("getPersisted", (key) => {
  return cy.wrap(dataStorage[`${key}`], { log: false });
});
