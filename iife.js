// IIFE- Immediately Invoked Function Expression- An IIFE is a JS function that runs as soon as it is defined
// Also known as self executing anonymous function

// (function add(a, b) {
//   console.log(a + b);
// })(2, 3);

// (() => console.log("I am ES6"))();

// const value = (() => 100)();
// console.log(value);

// Use cases-
// 1. Avoid polluting global namespace
// 2. Execute an async function
// const data = (async () => await fetch(""))();
// 3. The module pattern - We also use IIFE to create private and public variables and methods.
const atm = function (initialBalance) {
  let balance = initialBalance;
  function withdraw(amt) {
    if (amt > balance) {
      return "Are you kidding?";
    } else {
      balance -= amt;
      return balance;
    }
  }
  return { withdraw };
};

const mohit = atm(1000);
console.log(mohit);
console.log(mohit.withdraw(100));
console.log(mohit.withdraw(100));
console.log(mohit.withdraw(1200));
