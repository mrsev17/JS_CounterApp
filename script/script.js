"use strict";


/*

function increment() {
    let valueIncrement = 0;
    valueIncrement += 1;
    document.getElementById(count-el).innerText(valueIncrement);
}

*/

let countEl = document.getElementById("count-el");
let countLogs = document.getElementById("count-el");

console.log(countEl);
console.log(countLogs);

let count = 0;
let countLogsValue = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;

    countLogsValue = count;

    console.log("Logs count " + countLogsValue + "!")

    console.log(count);
}

