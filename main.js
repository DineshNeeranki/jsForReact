// youtube link - https://www.youtube.com/watch?v=PvYYjSRVa44&t=198s

// Logical AND (&&) Operator and Logical OR (||) Operator
// this works like a shortcircuit
let a = true;
let b = true;

// here below code if a is false it will not check b value as it is AND and acts as short circuit
console.log(a && b);
// if a is true then only it goes to b

// Logical OR code below

let c = false;
let d = true;

// here below code if c is true it will not check b value as it is OR if one is true don't need to check other value and acts as short circuit
console.log(c || d);
// if c is false then only it goes to b to check the value

function printName() {
  return "Dinesh Neeranki";
}

console.log(a && printName());
// if a is false then it returns false

// if a is true then it returns the printName return value

console.log(a || printName());
// if a is false then only checks second value

// if a is true then it returns true
// ----------------------------------

// Template Literals - used to create strings in es6

// old way of adding the string before es6

let prefix="MR";

let firstName="Dinesh";
let lastName="Neeranki";

console.log(prefix + " " + firstName + " "+ lastName);

// now below code with Template literals

console.log(`${prefix} ${firstName} ${lastName}`);

// -----------------------------------

// Ternary Operator if else in es6(?:)

const age=20;

age>=18? console.log("Major"): console.log("Minor");

