'use strict'

// Greeting code from John Duckett's JAVASCRIPT & JQUERY"
// Greeding pulled Coordinated Universal Time not local time
// I have not learned how to find a visitor's local time yet

console.log('Hello.  Your script started.')

let today = new Date();
let hourNow = today.getHours();
let greeting

if (hourNow > 18) {
    greeting = 'Good evening ';
}else if (hourNow > 12) {
    greeting = 'Good afternoon ';
}else if (hourNow > 0) {
    greeting = 'Good morning ';
}else {
    greeting = 'Welcome';
}

console.log(`The hour right now is ${hourNow}.`);
console.log(`${greeting} was the greeting provided.`);

// About me

let visitor = prompt(`Hello.  I'm Jon (he/him).  What's your Name?`);

alert(`${greeting} ${visitor}, let's play a guessing game.  Please answer all questions 'yes' or 'no' (y/n).`);

console.log(`The name "${visitor}" was provided.`);

// Tally of responses

let qCorrect = 0;
let qWrong = 0;
let qMisunderstood =0;

// Question one
// Changed string to lower case at entry into variable

let qOne = prompt('Has Jon ever been married?','yes').toLowerCase();

// added default answer to prompt to speed through debug.
// Replit did not understand these default values...  syntax?

if(qOne === 'yes' || qOne === 'y'){
    alert('Winner! Winner!'); qCorrect++; 
}else if (qOne === 'no' || qOne === 'n'){
    alert('Nope!'); qWrong++;
}else {
    alert('I didn\'t understand that response. I can only understand yes/no or y/n.'); qMisunderstood++;
}

console.log(`"${qOne}" was recieved for the first question.`);

// Question two
// Changed string to upper case at entry into variable

let qTwo = prompt('Has Jon ever lived in Oregon?','no').toUpperCase();

if(qTwo === 'YES' || qTwo === 'Y'){
    alert('Nope!'); qWrong++;
}else if (qTwo === 'NO' || qTwo === 'N'){
    alert('Winner! Winner!'); qCorrect++;
}else {
    alert('I didn\'t understand that response.'); qMisunderstood++;
}

console.log(`"${qTwo}" was recieved for the second question.`);

// Question three
// Changed string to lower case in conditional statement to attempt to preserve string entered by user
// Preserving the string failed and consumed four times the amount of characters in coding.  Does a new variatble need to be put somewhere?

let qThree = prompt('Has Jon ever been shot at?', 'no');

if(qThree.toLowerCase() === 'no' || qThree.toLowerCase() === 'n'){
    alert('Winner! Winner!'); qCorrect++; 
}else if (qThree.toLowerCase() === 'yes' || qThree.toLowerCase() === 'y'){
    alert('Nope!'); qWrong++;
}else {
    alert('I didn\'t understand that response.'); qMisunderstood++;
}

console.log(`"${qThree}" was recieved for the third question.`);

// Question four
// Changed string to lower case in conditional statement in a failed attempt to preserve string entered by user.  Does a new variatble need to be put somewhere?
// Tried to rearanged and reduced conditional staement using parentheses and deleting spaces and breaks.  This failed also.
// This effort only provided a minor reduction in coding characters but reduced lines or code by almost half.

let qFour = prompt('Did Jon walk all the way from Mexico to Canada?', 'no').toLowerCase();
if(qFour === 'yes' || qFour === 'y'){
    alert('Nope!'); qWrong++;
}else if (qFour === 'no' || qFour === 'n'){
    alert('Winner! Winner!'); qCorrect++;
}else {
    alert('I didn\'t understand that response. I can only understand yes/no or y/n.'); qMisunderstood++;
}

console.log(`"${qFour}" was recieved for the forth question.`);

// returned to orginally recommended case method and conditional formatting for these remaining questions.

let qFive = prompt('Does Jon have a Bachelor\'s Degree?','no').toLowerCase();

if(qFive === 'yes' || qFive === 'y'){
    alert('Nope'); qWrong++;
}else if (qFive === 'no' || qFive === 'n'){
    alert('Winner! Winner!!'); qCorrect++; 
}else {
    alert('I didn\'t understand that response. I can only understand yes/no or y/n.'); qMisunderstood++;
}

console.log(`"${qFive}" was recieved for the fifth question.`);

alert(`Well ${visitor}, you answered ${qCorrect} questions correctly, ${qWrong} incorrectly, and we got confused ${qMisunderstood} times.
`)

// As a user, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
// Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
// Indicates through an alert if the guess is “too high” or “too low”.
// It should give the user exactly four opportunities to get the correct answer.
// After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.

let AGE = 40;
let guessedAGE = 0;
let i = 0;

while ((guessedAGE != AGE) && (i < 4)){
  //the loop would never stop when the (guessedAGE = AGE)
  i++;
    let guessedAGE = prompt(`Hey ${visitor}, what do you think Jon's age is?`);

    if(guessedAGE == AGE){
        alert(`Damnit ${visitor}! That\'s right!  `); 
      return;  // is this cheating?  I have red squiggles.
    }else if (guessedAGE < AGE){
        alert('You\'re kind. He\'s older than that.  Try again.');
    }else if (guessedAGE > AGE){
        alert('Ooof...  No, it\'s just been a long week.  Try a little younger.');
    }else {
      alert('I didn\'t understand that response. Try a normal human age.');
    }
}

// As a user, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
// Add a 7th question that has multiple possible correct answers that are stored in an array.
// Give the user 6 attempts to guess the correct answer.
// The guesses will end once the user guesses a correct answer or they run out of attempts.
// Display all the possible correct answers to the user.
// Consider using a loop of some sort for this question.

//let answers = [2,4,6,8,10];
// let guess = 0;
// i=0;

// while ((i < 7) && (guess != answers)){}









// let qSix = prompt('Is Jon older than your mom?','yes').toLowerCase();

// if(qSix === 'yes' || qSix === 'y'){
//     alert('Oh really?  Tell her to give him a call.'); qCorrect++; 
// }else if (qSix === 'no' || qSix === 'n'){
//     alert('Oh really?  Tell her to give him a call.'); qCorrect++; 
// }else {
//     alert('I didn\'t understand that response. I can only understand yes/no or y/n.');
// }

// console.log(`"${qSix}" was recieved for the sixth question.`);

// let qSeven = prompt('Has Jon worked in a computer industry before?','yes').toLowerCase();

// if(qSeven === 'yes' || qSeven === 'y'){
//     alert('Winner! Winner!');  qCorrect++; 
// }else if (qSeven === 'no' || qSeven === 'n'){
//     alert('Nope!'); qWrong++;
// }else {
//     alert('I didn\'t understand that response. I can only understand yes/no or y/n.');
// }

//console.log(`"${qSeven}" was recieved for the seventh question.`);




console.log('Hello.  Your script completed.');