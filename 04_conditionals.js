//! Conditionals
/*
    - Falsy
        - false
        - 0
        - empty strings ("", '')
        - null
        - undefined
        - NaN (not a number)

    Conditionals evaluates an expression and responds if it is true.
*/

let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
}

/* Structure
    if(expression condition evaluated) {
        code that runs if expression is true
    }
*/

if(isOn); {
    console.log("There is light!");
}

isOn = false;
if(isOn == false) {
    console.log('The light is off...')
}

//! Else - If Else Statement

let weather = 75;

if(weather < 70) {
    console.log ('Wear a jacket');
} else {
    console.log("No jacket needed!");
}

let rain = true;
if(weather < 70 && rain) { /*looks for a true in the weather part then goes to the right side looking for true. */
    console.log('Wear a jacket and boots');
} else {
    console.log('No boots needed');
}
// rain = false     this would give the Going to be nice
if (weather < 70 || rain) {
    console.log('Get your rain jacket');
} else {
    console.log('Going to be nice');
}

/*
Use this string: let name = 'sAmwISe';

Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    RESEARCH THIS
Gold:
    If the first letter of a string is uppercase, console.log that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
    
    GO FURTHER target invidivual characters in a string
    capitolize or lowercase individual letters
*/
