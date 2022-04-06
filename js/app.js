'use strict'

// Greeting code from John Duckett's JAVASCRIPT & JQUERY"

console.log('Hello.  Your script started.')

let today = new Date();
let hourNow = today.getHours();
let greeting

if (hourNow > 18) {
    greeting = 'Good evening, ';
}else if (hourNow > 12) {
    greeting = 'Good afternoon, ';
}else if (hourNow > 0) {
    greeting = 'Good morning, ';
}else {
    greeting = 'Welcome ';
}

console.log(`The hour right now is ${hourNow}.`);
console.log(`${greeting} was the greeting provided.`);

// About me

let visitor = prompt(`Hello.  I'm Jon (he/him).  What's your Name?`);

alert(`${greeting} ${visitor}, let's play a guessing game.  Please answer all questions yes or no.`);

console.log(`The name "${visitor}" was provided.`);

// Question one
// Changed string to lower case at entry into variable

let qOne = prompt('Have I ever been married?','yes').toLowerCase();

if(qOne === 'yes' || qOne === 'y'){
    alert('Winner! Winner!');
}else if (qOne === 'no' || qOne === 'n'){
    alert('Nope!');
}else {
    alert('I didn\'t understand that response.');
}

console.log(`${qOne} was recieved for the first question.`);

// Question two
// Changed string to upper case at entry into variable

let qTwo = prompt('Have I ever lived in Oregon?','no').toUpperCase();

if(qTwo === 'YES' || qTwo === 'Y'){
    alert('Nope!');
}else if (qTwo === 'NO' || qTwo === 'N'){
    alert('Winner! Winner!');
}else {
    alert('I didn\'t understand that response.');
}

console.log(`${qTwo} was recieved for the first question.`);

// Question three
// Changed string to lower case in conditional statement to preserve string entered by user
// Preserving the string consumed four times the amount of characters in coding.

let qThree = prompt('Have I ever shot a man?', 'no');

if(qThree.toLowerCase() === 'no' || qThree.toLowerCase() === 'n'){
    alert('Winner! Winner!');
}else if (qThree.toLowerCase() === 'yes' || qThree.toLowerCase() === 'y'){
    alert('Nope!');
}else {
    alert('I didn\'t understand that response.');
}

console.log(`${qThree} was recieved for the first question.`);

// Question four
// Changed string to lower case in conditional statement to preserve string entered by user
// Rearanged and reduced conditional staement using parentheses and deleting spaces and breaks.
// This effort only provided a minor reduction in coding characters but reduced lines or code by almost half.

let qFour = prompt('Did I walk all the way from Mexico to Canada?', 'no');

if(qFour.toLowerCase() === ('no') || ('n')){alert('Winner! Winner!');
}else if (qFour.toLowerCase() === ('yes' || 'y')){alert('Nope!');
}else {alert('I didn\'t understand that response.');
}

console.log(`${qFour} was recieved for the first question.`);

console.log('Hello.  Your script completed.');