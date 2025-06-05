// FUNCTIONS - 3rd June

//Normal
// function greet() {
//   console.log("Hello");
// }
// greet();

//Parameterized
// function greetParameters(name1, name2) {
//   console.log(`Your name is ${name1} and your friend's name is ${name2}`);
// }
// greetParameters("Mohit", "Aman");
// greetParameters("Mohit");

// function test(name1, name2, name3 = "Test") {
//   console.log(`Name one is ${name1}, name two is ${name2}, name3 is ${name3}`);
// }

// test("Mohit", "Aman");
// test("Mohit", "Aman", "Legend");

//Expression
// const num = function (num) {
//   console.log(`The number is ${num}`);
// };
// num(18);

//Arrow functions
// const num = (number) => {
//   console.log(`The number is ${number}`);
// };
// num(18);

//IIFE- Immediately invoked function expression- Self invoking functions
// (function () {
//   console.log("Hello world");
// })();

// Function with unlimited arguments
// function printAll() {
// console.log(arguments);
// for (let i = 0; i < arguments.length; i++) {
//   console.log(arguments[i]);
// }

//   for (let arg in arguments) {
//     console.log(`Argument ${Number(arg) + 1} is ${arguments[arg]} `);
//   }
// }
// printAll(1, 2, 3, 4, 5);

//FUNCTIONS- 4th June
// console.log(console.log("Hello"));
// First hello will be printed, then undefined. Because console.log is returning nothing, so undefined will be returned and printed.

// To return multiple values, we can use array
// function squareAndCube(num) {
//   let sqr = num ** 2;
//   let cube = num ** 3;
//   return [sqr, cube];
// }
// console.log(squareAndCube(3));

// Local and global scope

//Nested functions
// function outerFunction() {
//   console.log("This is an outer function");
//   function innerFunction() {
//     console.log("This is an inner function");
//   }
//   return innerFunction;
// }
// let out = outerFunction()();
//The returned value will be stored in out which is inner function, when we write second (), the inner function is getting called.

// FUNCTIONS- 5th June

//Higher Order functions
// function print() {
//   console.log("Print this");
// }
//Takes function as input
// function higherOrderFunction1(callback) {
//   console.log("First print this");
//   callback();
// }
// higherOrderFunction1(print);

//Return function as result
// function higherOrderFunction2() {
//   return print;
// }
// higherOrderFunction2()();
// let output = higherOrderFunction2();
// output();

//Higher Order functions
//Callbacks
//Closures
//Arrow functions

//Spread and Rest operator
//SPREAD
//In array
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const combined = [...arr1, ...arr2];
// console.log(combined);
// let newArr = [...arr1, 5];
// console.log(newArr);

//In objects
// const user = { name: "Alice", age: 25 };
// const updatedUser = { ...user, age: 26 };
// console.log(updatedUser);

//In function calls
// function add(a, b, c) {
//   return a + b + c;
// }
// const nums = [1, 2, 3];
// console.log(add(...nums));

//REST
//In Array Destructuring
// const [first, ...rest] = [10, 20, 30, 40];
// console.log(first);
// console.log(rest);

//In function parameters
// function add(...args) {
//   let sum = 0;
//   console.log(args);
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   console.log(sum);
// }
// add(1, 2, 3);

// In Object Destructuring
// const { name, ...otherInfo } = { name: "Bob", age: 30, city: "Delhi" };
// console.log(name);
// console.log(otherInfo);

//Closures
// function outerFunction() {
//   let name = "Mohit";
//   function innerFunction() {
//     console.log(name);
//   }
//   return innerFunction;
// }
// const output = outerFunction();
// output();
