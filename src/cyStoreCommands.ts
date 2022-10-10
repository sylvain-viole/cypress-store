/// <reference types="cypress" />

export interface DataStorage {
  [key: string]: any;
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to persist a pair of key, value thru tests
       * @example cy.store('myKey', 'myValue')
       */
      store(
        key: string,
        value: any,
        options: {
          log?: boolean;
        }
      ): Cypress.Chainable<DataStorage>;

      /**
       * Custom command to retrieve a stored object
       * @example cy.getStored('myKey').should('eql', 'myValue').
       */
      getStored(key: string, options: { log?: boolean }): Cypress.Chainable;
    }
  }
}
