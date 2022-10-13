/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Stores a key value pair
     * @param key string
     * @param value any
     * @example
     *  cy.store('foo', 'bar')
     */
    store(key: string, value: any, options: object): Chainable<Element>;
  }

  interface Chainable {
    /**
     * Returns a cypress chainable with the previously stored value
     * @param key string
     * @example
     *  cy.getStored('foo').should('eql', 'bar');
     * @example
     *  cy.getStored('foo').then(foo => {
     * // do something with foo});
     * });
     */
    getStored(key: string): Chainable<Element>;
  }

  interface Chainable {
    /**
     * Removes a key value pair
     * @param key string
     * @example
     *  cy.removeStored('foo')
     */
    removeStored(key: string): Chainable<Element>;
  }

  interface Chainable {
    /**
     * Empties all stored values
     * @example
     *  cy.flushStored()
     */
    flushStored(key: string): Chainable<Element>;
  }

  interface Chainable {
    /**
     * Console logs the stored values
     * @example
     *  cy.logStored()
     */
    logStored(): Chainable<Element>;
  }
}
