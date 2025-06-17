// let [x, y, z] = [1, 2, 3];
// console.log(x);
// console.log(z);

//REST operator - used at LHS
// let [x, y, ...z] = [1, 2, 3, 4, 5, 6];
// console.log(x);
// console.log(z);

//SPREAD operator - used at RHS
// let x = [1, 2, 3];
// let y = ["a", "b", "c"];
// let z = [...x, ...y];
// console.log(z);

// let x = [1, 2, 3];
// let y = x; // x and y are pointing to same address
// x.push(10);
// console.log(x);
// console.log(y);
// To create a copy with different address (reference), we can use below method using spread
// let x = [1, 2, 3];
// let y = [...x];
// x.push(10);
// console.log(x);
// console.log(y);

// Destructure an object
// let mobile = {
//   name: "Samsung",
//   price: 45000,
//   color: "Black",
// };
// let { name, price, color } = mobile;
// console.log(name, price, color);
// let { name: company, price: cost, color: shade } = mobile;
// console.log(company, cost, shade);
// console.log(name, price, color);
