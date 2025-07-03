// Generator function - A generator function is a special type of function that can pause execution using yield and resume later. It doesn’t return values like a normal function. Instead, it returns an iterator — something you can step through one piece at a time.

// Yield- yield is a special keyword used only inside generator functions. It pauses the function and sends a value back to the caller. The function can then be resumed later from the same point using .next().

// function* generator() {
//   yield 10;
//   yield 20;
//   yield 30;
// }

// let gen = generator();
// console.log(gen.next().value);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

//To generate ID numbers
function* generator() {
  let i = 100;
  while (true) {
    i++;
    yield i;
  }
}

let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().done);
