// Normal add function
// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(1, 2, 3));

// Currying version of add
// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(1)(2)(3));

// Currying version with latest ES6 arrow function syntax
// const add = (a) => (b) => (c) => console.log(a + b + c);
// console.log(add(1)(2)(3));

// Currying version of send email function
// function sendEmail(to) {
//   return function (subject) {
//     return function (body) {
//       return `Hi ${to}, the subject is ${subject} and the details are ${body}`;
//     };
//   };
// }

// console.log(
//   sendEmail("mohit.rai")("Order confirmation")("Your order is confirmed")
// );

// let step1 = sendEmail("mohit.rai");
// let step2 = step1("Order confirmation");
// console.log(step2("Your order is confirmed"));

// Currying version of send email function with latest ES6 arrow function syntax
const sendEmail = (to) => (subject) => (body) =>
  `Hi ${to}, the subject is ${subject} and the details are ${body}`;

let step1 = sendEmail("mohit.rai");
let step2 = step1("Order confirmation");
console.log(step2("Your order is confirmed"));
