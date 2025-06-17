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
let name = {
  firstName: "Mohit",
  lastName: "Rai",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + " , " + state
  );
};

// printFullName.call(name);
printFullName.call(name, "Varanasi", "UP");

let name2 = {
  firstName: "Aman",
  lastName: "Dubey",
};

//function borrowing
printFullName.call(name2, "Mumbai", "Maharashtra");

printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

//bind method
let printMyName = printFullName.bind(name2, "Mumbai", "Maharashtra");
console.log(printMyName);
printMyName();

// Prototype, Prototype Inheritance and Prototype Chaining
