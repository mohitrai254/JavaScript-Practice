// function greeting(name) {
//   console.log(`Hello ${name}`);
// }

// setTimeout(greeting, 2000, "Mohit");
// setInterval(greeting, 1000, "Mohit");

// forEach - does not create a new array
// It is used for executing a function on each item in an array
// It does not return anything (returns undefined).

// let country = ["IND", "US", "AUS"];
// let country_lower = [];
// country.forEach((el, index) => {
//   country_lower.push(el.toLowerCase());
//   console.log(index);
// });
// console.log(country_lower);

// map- returns a new array
//Transforms each element of an array,
//Returns a new array of the same length.
//Does not modify the original array.

// let nums = [1, 2, 3, 4, 5];
// let doubleNums = nums.map((el) => el * 2);
// console.log(nums);
// console.log(doubleNums);

//filter
//The filter method creates a new array containing only elements that satisfy a provided condition.
//It returns a filtered version of the original array.

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = nums.filter((el) => el % 2 == 1);
// console.log(oddNums);

//reduce
// The reduce method is used to accumulate values of an array into a single value.
// It takes a callback function and an initial accumulator value. The callback function is applied to each element of the array, updating the accumulator.
// let nums = [1, 2, 3, 4, 5];
// let sum = nums.reduce((acc, el) => acc + el, 10);
// console.log(sum);

// let country = ["India", "Israel", "Russia"];
// let listLeft = country.reduce((acc, el) => acc + el, "==>");
// console.log(listLeft);
// let listRight = country.reduceRight((acc, el) => acc + el, "==>");
// console.log(listRight);

//Every and Some higher order functions
// let nums = [12, 18, 19, 20];
// let voters = nums.every((el) => el >= 18);
// console.log(voters);
// let fewVoters = nums.some((el) => el >= 18);
// console.log(fewVoters);

// Flat an array using flat and flatmap function
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let matrix3D = [
//   [1, 2, 3],
//   [4, [2, 3], 6],
//   [7, 8, 9],
// ];
// let flatMatrix = matrix.flat();
// console.log(flatMatrix);
// let flat3DMatrix = matrix3D.flat(2);
// console.log(flat3DMatrix);

// let mapped = matrix.flatMap((row) => row.map((el) => el * 2));
// console.log(mapped);
// let mapped = matrix.flat().map((el) => el * 2);
// console.log(mapped);

// find function
// Returns the first element that matches the condition.
// Stops searching after the first match.
// Returns a single value (or undefined if not found).

// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let out = nums.find((el) => el > 2);
// let outEven = nums.find((el) => el % 2 == 0);
// let outIndex = nums.findIndex((el) => el > 2);
// console.log(out);
// console.log(outEven);
// console.log(outIndex);

// sort
// Converts all elements to strings
// Then sorts them lexicographically (dictionary order)
// Example- "12" comes before "3" because "1" comes before "3" in string comparison.
// let nums = [1, 12, 3, 54, 5];
// console.log(nums.sort((a, b) => a - b));
// console.log(nums.sort((a, b) => b - a));
