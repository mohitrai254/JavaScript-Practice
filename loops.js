// let arr = [2, 4, 6, 8, 10];

//FOR LOOP
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

//FOR OF LOOP
// for (let el of arr) {
//   console.log(el);
// }

// for (const el of arr) {
//   console.log(el);
// }

//FOR IN LOOP
// for (let el in arr) {
//   console.log(el);
//   console.log(arr[el]);
// }

// let arr = ["Ind", "NZ", "Aus", "SA"];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].startsWith("N")) {
//     break;   //comes out of loop
//   }
//   console.log(arr[i]);
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].startsWith("N")) {
//     continue;  //skips this iteration
//   }
//   console.log(arr[i]);
// }

//WHILE LOOP
// let i = 5;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

//DO WHILE LOOP - The do...while loop does not run “one extra time” — it just guarantees to run at least once, even if the condition is false initially.
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

//FLATTEN ARRAY
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let flat = [];
// // console.log(arr);
// for (let el of arr) {
//   // console.log(el);
//   for (let nestedEL of el) {
//     flat.push(nestedEL);
//   }
// }
// console.log(flat);

// console.log(arr.flat());   - JavaScript function to flatten an array

//REVERSE AN ARRAY
// let arr = [1, 2, 3, 4, 5];
// let reverseArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reverseArr.push(arr[i]);
// }
// console.log(reverseArr);
