"use strict";
// hello admin:make a array of five or more usernames, inculding the name 'admin'.Imagine you are writing code that will print a greeting to each user  after they log in to a website. Loop through the aray, and print a greeting to each user:
// if the username is 'admin', print a special greeting ,such as hello admin, would you like to see a status report.
// otherwise , print a greeting , such as Hello eric , thank you for logging in again.
let username = ['admin', 'chootabheem', 'doraemon', 'pinkpanther', 'popye the salior'];
for (let i = 0; i < username.length; i++) {
    if (username[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${username[i]}, thank you for logging in again`);
    }
}
