//! CONDITIONALS
/*
        - Evaluates an expression and responds if it is true.
        - Falsy
                - false
                - 0
                - empty strings
                - null
                - undefined
                - NaN (not a number)
        
?   Structure
    if(condition evaluated) {
        code that runs if expression is true
    }
        
*/

let isOn = true;
if(isOn == true) {
    console.log('The light is on!');
}

if(isOn) {
    console.log('The light is on, yay!')
}

isOn = false;
if(isOn == false) {
    console.log(`The light is off!`)
}

let weather = 65;

if(weather < 70) {
    console.log('Wear a jacket.')
}

//* If Else
weather = 75;
if(weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary.')
}

//! AND OR
weather = 60;
let rain = true;
if(weather < 70 && rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary.')
}

weather = 80;
if(weather < 70 || rain) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary.')
}

rain = false;
if(!rain) {
    console.log('Seems to be a clear day!')
}

//* Else If
// let grade = 88; // test 1
// let grade = 73; // test 2
let grade = 50; // test 3

if(grade >= 75) {
    console.log('passing');
} else if(grade >= 69) {
    console.log('Please see the teacher')
} else {
    console.log('failing')
}

//! Switch Statements
let officeCharacter = "Jim";

switch(officeCharacter) {
    case "Michael" :
        console.log('My mind is going a mile an hour');
        break;
    case 'Dwight':
        console.log("Perfectenschlag");
        break;
    case "Jim" :
        console.log("Bears. Beets. Battlestar Galactica")
        break;
    default:
        console.log(`I'm sorry, ${officeCharacter}, but do I know you?`)
}

//! Ternary
/* 
    - Ternaries require the default/else catch all.
        - And If Statement can go without the "else" and a switch statement can function without a "default", ternaries must have a catch response if the statement returns a falsy value.
*/

let num = 6;

// If Else
num > 0 ? console.log('yes') : console.log('no');

if(num > 0) {
    console.log("yes")
} else {
    console.log('no')
}

// Else If
if(num == 0) {
    console.log('hello')
} else if (num < 0) {
    console.log('hi')
} else {
    console.log('goodbye')
}

num == 0 ? 
    console.log('hello') : 
    num < 0 ? 
    console.log('hi') : 
    console.log('goodby')