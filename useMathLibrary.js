// import { sum, subtract, multiply, divide } from "./mathLibrary.js";
const {
  sum,
  subtract,
  multiply,
  divide,
} = require("../JavaScript/module_mathLibrary");

console.log(sum(2, 3));
console.log(subtract(3, 1));
console.log(multiply(4, 5));
console.log(divide(1, 0));
console.log(divide(3, 5));

// This is ES6 Module syntax (import/export), but Node.js defaults to CommonJS (require/module.exports), unless told otherwise.
// So Node throws: SyntaxError: Cannot use import statement outside a module
// Solution 1- Rename your file to .mjs
// mathLibrary.js → mathLibrary.mjs
// useMathLibrary.js → useMathLibrary.mjs
// .mjs is a file extension that stands for "module JavaScript". It tells Node.js that the file should be treated as an ECMAScript Module (ESM) — meaning it uses modern import / export syntax instead of the older CommonJS (require / module.exports).

// Solution 2-
// Use "type": "module" in package.json

// Solution 3- Common JS modules
// Use module.exports in library to export and require where you want to import
