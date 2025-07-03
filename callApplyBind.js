const person = {
  name: "Mohit",
  greet: function (greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
  },
};

// Call
// person.greet.call({ name: "Alice" }, "Hello", "!");

// Apply
// person.greet.apply({ name: "Bob" }, ["Hi", "."]);

// Bind
// const boundGreet = person.greet.bind({ name: "Charlie" }, "Hey");
// boundGreet("!");
