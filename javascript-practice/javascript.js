console.log("Hello! world")

let age = 13;

age = 14; // reasign age

const pi = 3.14; // will alway stay the 
// same because its constant

var age2 = 13; // var is not used as 
// much because its older but you still might see it

console.log(age)

console.log(age + age2)

age + age2;

console.log(age)

let age3 = age + age2;

console.log(age3)

let a = 1;
let b = "2"

console.log(a + b)

let name = "dami3n1";

console.log(`hello ${1}`); // ?

console.log(`hello ${"name"}`); // ?

console.log(`hello ${name}`); // ?

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"

const button = document.querySelector("#greet-button");

function greet() {
  const name = prompt("What is your name?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Hello ${name}, nice to see you!`;
}

button.addEventListener("click", greet);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Goat'))