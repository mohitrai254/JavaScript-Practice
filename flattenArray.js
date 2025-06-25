let arr = [1, 22, [3, 5, [1, 2]], 7];
let flat = [];

// Using Recursion
// function flatten(arr) {
//   for (let el of arr) {
//     if (Array.isArray(el)) {
//       flatten(el);
//     } else {
//       flat.push(el);
//     }
//   }
// }
// flatten(arr);
// console.log(flat);

// Using flat function
// console.log(arr.flat(2));

// Using splice
for (el of arr) {
  if (Array.isArray(el)) {
  } else {
    flat.push(el);
  }
}
