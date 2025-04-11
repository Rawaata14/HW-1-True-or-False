'use strict';
// //Task#1
// if ("0") {
//     alert('Hello');
// }
// //כן יהיה alert 

// //Task#2
// let trueAnswer = 'ECMAScript';
// let answer = prompt("What is the official name of JavaScript?");
// if (answer == trueAnswer) {
//     alert('Correct!')
// }
// else {
//     alert("You don't know?! , It's ECMAScript!")
// }

// //Task#3
// let score = 75;
// let grade = score >= 90 ? 'A' :
//     score >= 80 ? 'B' :
//         score >= 70 ? 'C' :
//             score >= 60 ? 'D' : 'F';

// console.log("The grade is: ", grade);

// //Task#4
// let input = prompt('Enter a number please: ');
// if (input > 0)
//     alert('1');
// else if (input < 0)
//     alert('-1');
// else
//     alert('0');

// //Task#5
// let a = 1, b = 2;
// let result = a + b < 4 ? 'Not enough' : 'A lot';
// alert(result);

//Task#6
let login = 'Director';
let message = login == 'Employee' ? 'Hello' :
    login == 'Director' ? 'Hello' :
        login == '' ? 'No login' : '';

alert(message);

