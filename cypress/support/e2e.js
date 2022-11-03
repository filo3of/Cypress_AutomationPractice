// cypress/support/index.js
// load and register the grep feature using "require" function
// https://github.com/cypress-io/cypress-grep
const registerCypressGrep = require("cypress-grep");
registerCypressGrep();

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-iframe";
import "cypress-real-events/support";
require("cypress-xpath");

// Alternatively you can use CommonJS syntax:
// require('./commands')
