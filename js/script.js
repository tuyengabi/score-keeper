"use strict";

// const scorePlayer1 = document.getElementsByClassName('scorePlayer1')[0].innerHTML;
// const scorePlayer2 = document.getElementsByClassName('scorePlayer2')[0].innerHTML;
const btnPlayer1 = document.getElementsByClassName('btnPlayer1')[0];
const btnPlayer2 = document.getElementsByClassName('btnPlayer2')[0];
const btnReset = document.getElementsByClassName('btnReset')[0];
let score1 = 0;
let score2 = 0;
let max = 3;

function freeze() {
  btnPlayer1.disabled = true;
  btnPlayer2.disabled = true;
}

function resetScore() {
  document.getElementsByClassName('scorePlayer1')[0].innerHTML = 0;
  document.getElementsByClassName('scorePlayer2')[0].innerHTML = 0;
  score1 = 0;
  score2 = 0;
  btnPlayer1.disabled = false;
  btnPlayer2.disabled = false;
}

function scoreIncrement1() {
  score1++;
  document.getElementsByClassName('scorePlayer1')[0].innerHTML = score1;

  if (score1 == max) {
    freeze();
    return;
  }
}

function scoreIncrement2() {
  score2++;
  document.getElementsByClassName('scorePlayer2')[0].innerHTML = score2;

  if (score2 == max) {
    freeze();
    return;
  }
}


