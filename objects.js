//Objects
// let student = {
//   firstName: "Virat",
//   lastName: "Kohli",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(student);
// console.log(student.fullName());
// student.age = 25;
// console.log(student);

// newObject = Object.assign({}, student, { skills: ["batting", "fielding"] });
// Object.assign(target, source1, source2, ...);

// console.log(student);
// console.log(newObject);

// delete student.firstName;
// console.log(student);

// console.log(Object.keys(student));
// console.log(Object.values(student));

// Call, Apply and Bind
// let name = {
//   firstName: "Mohit",
//   lastName: "Rai",
// };

// let printFullName = function (hometown, state) {
//   console.log(
//     this.firstName + " " + this.lastName + " from " + hometown + " , " + state
//   );
// };

// printFullName.call(name);
// printFullName.call(name, "Varanasi", "UP");

// let name2 = {
//   firstName: "Aman",
//   lastName: "Dubey",
// };

// // function borrowing
// printFullName.call(name2, "Mumbai", "Maharashtra");

// printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind method
// let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
// console.log(printMyName);
// printMyName();

// Prototype

// let p1 = {
//   fname: "Mohit",
//   lname: "Rai",
//   getFullName() {
//     return `${this.fname} ${this.lname}`;
//   },
// };

// let p2 = Object.create(p1);
// OR
// let p2 = {
//   __proto__: p1,
// };

// console.log(p1.getFullName());
// console.log(p2.fname);
// console.log(p2);

// Prototype Inheritance and Prototype Chaining
// const p1 = {
//   xp1: "I am inside p1",
// };
// const p2 = {
//   xp2: "I am inside p2",
//   __proto__: p1,
// };
// const p3 = {
//   xp3: "I am inside p3",
//   __proto__: p2,
// };

// console.log(p3.xp1);
