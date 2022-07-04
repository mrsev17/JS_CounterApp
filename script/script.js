"use strict";


/*

function increment() {
    let valueIncrement = 0;
    valueIncrement += 1;
    document.getElementById(count-el).innerText(valueIncrement);
}

*/


const saveEl = document.getElementById("save-el");
const countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

// 1. Build function which make log when its counted

function save() {
    let countStr = count + " - ";
    saveEl.innerText += countStr;
    countEl.textContent = 0;
    count = 0;

}

