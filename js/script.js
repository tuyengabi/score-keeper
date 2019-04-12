"use strict";

const scorePlayer1 = document.getElementsByClassName('scorePlayer1')[0].innerHTML;
const scorePlayer2 = document.getElementsByClassName('scorePlayer2')[0].innerHTML;
const btnPlayer1 = document.getElementsByClassName('btnPlayer1')[0];
const btnPlayer2 = document.getElementsByClassName('btnPlayer2')[0];
const btnReset = document.getElementsByClassName('btnReset')[0];
let score1 = 0;
let score2 = 0;
let max = 5;

function freeze() {
  btnPlayer1.disabled = true;
  btnPlayer2.disabled = true;
}
function scoreIncrement1() {
  if (score1 == max) {
    return;
  } else {
  score1++;
  }
}

function scoreIncrement2() {
  if (score2 == max) {
    return;
  } else {
  score2++;
  }
}
