"use strict"
let breakMe = document.querySelector(".cookie");

let fortuneCookiesBreak = function() {
    let item = Math.random();
    if (item < .1) {
        console.log(1);
    }
    if (item > .1 && item < .2) {
        console.log(2);
    }
    if (item > .2 && item < .3) {
        console.log(3);
    }

}
breakMe.addEventListener("click", fortuneCookiesBreak);