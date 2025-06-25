// function constructor- not used in modern programming, it is depricated after introduction of class keyword in ES6

// function Person(fname, lname, contact) {
//   this.fname = fname;
//   this.lname = lname;
//   this.contact = contact;
//   this.getName = function () {
//     console.log(this.fname, this.lname);
//   };
// }

// const p1 = new Person("Mohit", "Rai", "9999");
// console.log(p1.fname);
// p1.getName();

// CLASS
// class Person {
//   // Constructor to initialize properties
//   // The constructor method is a special method for creating and initializing objects created within a class.
//   // It is automatically called when a new instance of the class is created.

//   constructor(fname, lname, contact) {
//     this.fname = fname; // instance property
//     this.lname = lname; // instance property
//     this.contact = contact; // instance property
//     console.log(this.fname);
//   }

//   // Method for the Person class
//   getName() {
//     console.log(this.fname, this.lname);
//   }
// }

// //Object- Instance of class
// const p1 = new Person("Mohit", "Rai", "9999");
// // console.log(p1.fname);
// p1.getName();

// // Getter and Setter
// class Animal {
//   constructor(name) {
//     this._name = name;
//   }
//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }
// }

// const a = new Animal("Dog");
// console.log(a.name); // Accesssing by getter function
// a.name = "Cat"; // Setting using setter function
// console.log(a.name);

// Static method in JS
// class Animal {
//   constructor(name) {
//     this.name = Animal.capitalize(name);
//   }

//   walk() {
//     console.log(`Animal ${this.name} is walking`);
//   }

//   static capitalize(name) {
//     return name.charAt(0).toUpperCase() + name.substr(1, name.length);
//   }
// }

// const a = new Animal("dog");
// a.walk();
// a.capitalize(); //This will not work, capitalize function only belong to class, not the object

// Inheritance using extends keyword
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   shout() {
//     console.log(`${this.name} is shouting`);
//   }

//   walk() {
//     console.log(`${this.name} is walking`);
//   }
// }

// class Monkey extends Animal {
//   eating() {
//     console.log(`${this.name} is eating`);
//   }
// }

// const m = new Monkey("Champak");
// m.walk();
// m.eating();
// const a = new Animal("Nandan");
// a.walk();
// // a.eating(); // Error: Because parent cannot access the function of child class

// Super keyword
// class Animal {
//   speak() {
//     console.log("Animal makes a sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     super.speak(); // Calls Animal's speak()
//     console.log("Dog barks");
//   }
// }

// const d = new Dog();
// d.speak();
