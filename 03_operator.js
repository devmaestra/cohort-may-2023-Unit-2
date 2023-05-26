/*
!  Operators 
    - Plus          +
    - Times         *
    - Power         **
    - Dot           .
    - Assignment    =
    - Comparison    ==

    Used for:
        - Assign
        - Compare
        - Arithmetic
        - Logical
        - Conditionals

    Expressions & Statement

    keyword name (expression) {
        code block

    }

    Statements are a collection of a keyword, an expression, and a code block.

*/

//! Comparison Operators
// Equal To
console.log("Equal to: ", "3" == 3);
// Strictly Equal To
console.log("Strictly Equal to:", "3" === 3);
// Not Equal To
console.log("Not Equal to: ", "3" != 3);
console.log("Strict Not Equal to: ", "3" !== 3); // strict
console.log("Strict Not Equal to 2: ", 3 !==3); // strict

let aName = "bob";
console.log("Check Name", aName == "Bob"); // false

// Greater Than
3 > 2;

// Less Than
2 < 3;

// Greater Than or Equal To
3>= 2;

// Less Than or Equal To
2 <= 3;

//! AND
2 && 3;

//! OR
2 || 3;

//! Logical Operators 
let x = 1;
console.log(x); // 1
x = x + 1;
console.log(x); // ?


//Addition
let r = 10;
r += 1 // r = r + 1;
console.log(r);

// Subtraction 
r -= 2; // r = r
console.log(r);

// Mutiplication 
r *= 2;
console.log(r);

// Reset Value 
r = 10;
console.log(r);

// Division
r /= 2; //r = r / 2;
console.log(r);

// Remainder (Modulous)
r %= 3; //r = r % 3;
console.log(r);

// Exponential
r **= 3; // r = r ** 3;
console.log(r);

/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
        
*/

/* let Age = {
    first: "Laura",
    last: "Shaw",
    birthYear: 1984,
    needsCoffee: true,
    currentYear: 2023,
    age: current - birth,
}

console.log(user);*/

let name = "Laura";
let lastName = "Shaw";
let birthYear = 1984;
let needsCoffee = true;
let currentYear = 2023;
let age = currentYear -= birthYear;

console.log('AGE: ', age);

let thisBirth = 1984;
let thisCurrent = 2023;

let user = {
    first: "Laura",
    last: "Shaw",
    birth: thisBirth,
    needsCoffee: true,
    currentYear: thisCurrent,
    age: this.current - this.birth,
}

console.log(user);
