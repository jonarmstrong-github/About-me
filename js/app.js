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
    greeting = 'Welcome '
}

// About me

let visitor = prompt(`Hello.  I'm Jon (he/him).  What's your Name?`);

alert(`${greeting} ${visitor}, let's play a guessing game.  Please answer all questions yes or no.`);

// Question one

let qOne = prompt('Have I ever been married?','yes').toLocaleLowerCase();

if(qOne === 'yes' || qOne === 'y'){
    alert('Winner! Winner!');
}else if (qOne === 'no' || qOne === 'n'){
    alert('Nope!');
}else {
    alert('I didn\'t understand that response.');
}

// Question two

let qTwo = prompt('Have I ever lived in Oregon?','no').toLocaleUpperCase;

if(qTwo === 'YES' || qTwo === 'Y'){
    alert('Winner! Winner!');
}else if (qTwo === 'NO' || qTwo === 'N'){
    alert('Nope!');
}else {
    alert('I didn\'t understand that response.');
}

//Question three

let qThree = prompt('Have I ever shot a man?', 'no');

if(qThree.toLocaleLowerCase === 'no' || qThree.toLocaleLowerCase === 'n'){
    alert('Winner! Winner!');
}else if (qThree.toLocaleLowerCase === 'yes' || qThree.toLocaleLowerCase === 'y'){
    alert('Nope!');
}else {
    alert('I didn\'t understand that response.');
}

//Question four

let qFour = prompt('Did I walk all the way from Mexico to Canada?', 'no');

if(qFour.toLocaleLowerCase === ('no') || ('n')){
    alert('Winner! Winner!');
}else if (qFour.toLocaleLowerCase === ('yes' || 'y')){
    alert('Nope!');
}else {
    alert('I didn\'t understand that response.');
}

console.log('Hello.  Your script completed.')