'use strict'

console.log(`You can ignore single and double quotes like this: \\'\\' \\" \\"`)

alert('Please enter your data');
let userName = prompt("Enter your name", 'Name');
alert(`Your name is: ${userName}`);
let surName = prompt("Enter your surname", 'Surname');
alert(`Your full name is: ${userName} ${surName} `);
let yearsOld = prompt("How old are you?", 'Age');
alert(`Your full name is: ${userName} ${surName}, your age is: ${yearsOld}`);
let access = confirm('Are you admin?');
alert(`Your full name is: ${userName} ${surName}, your age is: ${yearsOld}, admin status: ${access}`);