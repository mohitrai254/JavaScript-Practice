// let myPromise = new Promise((resolve, reject) => {
//   let operation = false;
//   if (operation) {
//     resolve("Successful");
//   } else {
//     reject("Unsuccessful");
//   }
// });
// console.log(myPromise);
// myPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Cleanup"));

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let async_func = false;  // API call, file operation etc.
//     if (async_func) {
//       resolve("Success");
//     } else {
//       reject("Failed");
//     }
//   }, 3000);
// });

// myPromise
//   .then((resolve) => console.log(resolve))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Thanks"));

// Interview question
// console.log("Start");

// setTimeout(() => {
//   console.log("Outside Timeout");
// }, 0);

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Inside Promise Timeout");
//     resolve();
//   }, 0);
// });

// // the resolve() happens inside a setTimeout(...), which is a macrotask — so the .then() callback gets scheduled only after that timeout executes.
// promise.then(() => console.log("Promise then"));

// console.log("End");
