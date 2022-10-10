# Cypress-store

![cypress version](https://img.shields.io/badge/cypress-10.9.0-brightgreen)

> A simple Cypress plugin for passing data between test scenarios
---

## API

| command | action |
| - | - |
| `cy.store`| stores data |
| `cy.getStored`| gets stored data |
| `cy.removeStored`| removes stored data |
| `cy.flushStored`| flushes all stored datas |
| `cy.logStored`| logs all stored datas |

---

## Install

```shell
npm i -D cypress-store
```

Add to your Cypress commands.js file

```javascript
import "cypress-store";
```

---

## Usage

- To store data :

```javascript
cy.store("key", "value");
```

- To get stored data :

```javascript
cy.getStored("key");
//Cypress wraps the retrieved value so you can access it with :
cy.getStored("key").should("eql", "value");
// Or :
cy.getStored("key").then((key) => {
  console.log(key);
});
```

- To remove a stored data:

```javascript
cy.removeStored("key");
```

- To flush all datas:

```javascript
cy.flushStored();
```

- To log all datas:

```javascript
cy.logStored();
```

Cheers !