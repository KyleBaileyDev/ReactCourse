// *************************
// Arrow Functions

const multiply = (number) => number * 2;
const now = () => Date.now();
const loop = (name, times) => {
  for (let i = 1; i < times + 1; i++) {
    console.log(`${name} has ${i} dollars`);
  }
};

loop("Kyle", 5);
console.log(now());
console.log(multiply(5));

// *************************
// Classes

class Human {
  gender = "male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Kyle";
  gender = "other";

  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

// *************************
// Spread and Rest

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers);

const student = {
  name: "Max",
};

const newStudent = {
  ...student,
  age: 25,
};

console.log(newStudent);

const oldFilter = (...args) => {
  return args.filter((el) => el === 1);
};

// Rest
function sayGoodnight(...names) {
  const nameList = names.join(", ");
  console.log(`Goodnight ${nameList}!`);
}

const animals = [
  { name: "Monkey", emoji: "🐒", legs: 2, mana: 45, count: 3 },
  { name: "Dog", emoji: "🐕", legs: 4, mana: 89, count: 2 },
  { name: "Cow", emoji: "🐄", legs: 4, mana: 3, count: 5 },
  { name: "Gorilla", emoji: "🦍", legs: 2, mana: 56, count: 2 },
  { name: "Deer", emoji: "🦌", legs: 4, mana: 97, count: 5 },
  { name: "Kangaroo", emoji: "🦘", legs: 2, mana: 4387, count: 1 },
  { name: "Turkey", emoji: "🦃", legs: 2, mana: 17, count: 7 },
];

// Rest
function sayGoodnight(...names) {
  const nameList = names.join(", ");
  console.log(`Goodnight ${nameList}!`);
}

sayGoodnight("Wally");
sayGoodnight("Wally", "Daisy");
sayGoodnight("Wally", "Daisy", "Sammy", "June");
// Goodnight Wally!
// Goodnight Wally, Daisy!
// Goodnight Wally, Daisy, Sammy, June!

let names = ["Kyle", "Jordan", "Ian", "Dom"];

sayGoodnight(...names);

sayGoodnight(...animals.map((animal) => animal.name));

console.log(oldFilter(1, 2, 3));

// *************************
// Destructuring

const nums = [1, 2, 3];
[first, second] = nums;
[num1, , num3] = nums;

console.log(first, second);
console.log(num1, num3);
