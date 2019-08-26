"use strict"

let breakMe = document.querySelector(".cookie");

let fortuneCookiesBreak = function() {
    let item = Math.random();
    if (item < 0.1) {
        console.log("How long is forever? Sometimes just one second");
    }
    if (item > 0.1 && item < 0.2) {
        console.log("It's a poor sort of memory that only works backwards");
    }
    if (item > 0.2 && item < 0.3) {
        console.log("I knew who I was this morning, but I've changed a few times since then");
    }
    if (item > 0.3 && item < 0.4) {
        console.log("It’s no use going back to yesterday, because I was a different person then");
    }
    if (item > 0.4 && item < 0.5) {
        console.log("Curiouser and curiouser!");
    }
    if (item > 0.5 && item < 0.6) {
        console.log("If everybody minded their own business, the world would go around a great deal faster than it does");
    }
    if (item > 0.6 && item < 0.7) {
        console.log("Begin at the beginning. And go on till you come to the end: then stop");
    }
    if (item > 0.6 && item < 0.7) {
        console.log("Everything’s got a moral, if only you can find it");
    }
    if (item > 0.7 && item < 0.8) {
        console.log("You used to be much more…muchier. You’ve lost your muchness");
    }
    if (item > 0.8 && item < 0.9) {
        console.log("Imagination is the only weapon in the war against reality");
    }
    
}

breakMe.addEventListener("click", fortuneCookiesBreak);

