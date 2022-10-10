# Cypress-store
![cypress version](https://img.shields.io/badge/cypress-10.9.0-brightgreen)

> A simple Cypress plugin for persisting data between test scenarios
---
## Install

```shell
npm i -D cypress-store
```

Add to your Cypress commands.js file

```js
import 'cypress-store';
```
---
## Usage

- To persist data :
```js
cy.store('key', 'value');
```
- To retreive data :
```js
cy.getStored('key').should('eql','value');
```

Cheers !