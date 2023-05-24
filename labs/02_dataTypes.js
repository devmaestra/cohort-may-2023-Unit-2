//! Booleans: true / false
let on = true;
console.log(on);

let off = false;
console.log(off);

//! Null
let empty = null;
console.log(empty);

//! Undefined 
let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the variable.
console.log(undef);

//! Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9s;
console.log(precise);

let rounded = 9999999999999999; // 16 9s;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

//! Strings (text)
// represent text
// wrapped in 'single' or "double" quotes

let stringOne = "double quote";
let stringTwo = 'single quote';

console.log(stringOne, stringTwo);

//Numbers vs String
let first = 1234 + 567;
let second = "1234" + "567";

console.log(first);
console.log(second);

//! Objects not singular item 
let frodo = {
    race: "hobbit",
    rings: 1,
    sting: true,
}

console.log(frodo);

//! Arrays
let list = ['item 1', 'item 2', 'item 3'];
//  (1)    (2)           (3)
/*
    1: name of the array -"list"
    2: The array is within square brackets
    3: each item, regardless of datatype, is seperated by commas
*/

console.log(list);

//! DataType Literals
let car = "Ford";
let dec = 12;
