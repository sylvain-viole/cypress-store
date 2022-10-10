# Cypress-persist
![cypress version](https://img.shields.io/badge/cypress-10.9.0-brightgreen)

> A simple Cypress plugin for persisting data between test scenarios
---
## Install

```shell
npm i -D cypress-persist
```

Add to your Cypress commands.js file

```js
import 'cypress-persist';
```
---
## Usage

- To persist data :
```js
cy.persist({key: 'myKey', value: 'myValue'});
```
- To retreive data :
```js
cy.getPersisted('myKey').should('eql','myValue');
```

Cheers !