let arr = [1, 2, [3, 4, [4, 5], 6, [6, 7]]];

// Using recursion
let flat = [];
function flattenArray(arr) {
  for (el of arr) {
    if (Array.isArray(el)) {
      flattenArray(el);
    } else {
      flat.push(el);
    }
  }
}
flattenArray(arr);
console.log(flat);

// Using flat function
console.log(arr.flat(2));
