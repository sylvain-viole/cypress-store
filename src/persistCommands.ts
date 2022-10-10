/// <reference types="cypress" />

export interface DataStorage {
  [key: string]: any;
}

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to persist a pair of key, value thru tests
       * @example cy.persist('myKey', 'myValue')
       */
      persist(options: {
        key: string;
        value: any;
        log?: boolean;
      }): Cypress.Chainable<DataStorage>;

      /**
       * Custom command to retrieve a persisted object
       * @example cy.getPersisted('myKey').should('eql', 'myValue').
       */
      getPersisted(key: string): Cypress.Chainable;
    }
  }
}
