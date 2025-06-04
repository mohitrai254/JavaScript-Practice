// 04th June 2025
// 1. Write a function greet(name) that takes a name as an argument and returns a greeting string, e.g., "Hello, [name]!"
// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet("Mohit"));

// 2.Write a function add(a, b) that takes two numbers as arguments and returns their sum.
// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(3, 4));

// 3.Write a function calculateArea(length, width) that calculates and returns the area of a rectangle.
// function calculateArea(length, width) {
//   return length * width;
// }
// console.log(calculateArea(3, 4));

// 4. Define a function expression multiply(a, b) that takes two numbers as arguments and returns their product.
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(2, 3));

// 5. Create an anonymous function that takes an array of numbers and returns the sum of all the numbers
// function sum(arr) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sum([3, 4, 5]));

// 6. Write a function multiplyNumbers(a, b = 1) that multiplies two numbers. If the second argument is not provided, use 1 as the default value.
// function multiplyNumbers(a, b = 1) {
//   return a * b;
// }
// console.log(multiplyNumbers(2, 3));

// 7. Write a function sum(...numbers) that takes any number of arguments and returns the sum of those arguments.
// function sum() {
//   let output = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     output = output + arguments[i];
//   }
//   return output;
// }
// console.log(sum(3, 4, 5, 6));

// 8. Write a function reverseArray(arr) that returns a new array with the elements of arr in reverse order.
// function reverseArray(arr) {
//   let newArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));

// 9. Explain and demonstrate the behavior of hoisting with function declarations vs. function expressions.
//What happens when you call a function before it’s declared?

// Hoisting means JavaScript moves declarations to the top of the scope before executing the code.
// But, Variables declared with var are hoisted but initialized as undefined.
// Functions declared with function keyword are hoisted with their full definition.
// Function expressions (including arrow functions) are not hoisted with the function body, only the variable name is hoisted (if declared with var, not let/const).
