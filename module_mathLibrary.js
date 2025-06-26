// export function sum(a, b) {
//   return a + b;
// }

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return console.log("Cannot divide by zero");
  } else {
    return a / b;
  }
}

module.exports = { sum, subtract, multiply, divide };
