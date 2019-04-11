"use strict";
let playScore1 = document.getElementById('play-score1');
console.log(playScore1);
let playScore2 = document.getElementById('play-score2');
console.log(playScore2);
let start = 0;
let nextClick1 = playScore1.innerHTML;

//function add Input to Max New Score
let valueInput = document.getElementById('score').value;
console.log(valueInput);
let newScore = document.getElementById('maxscore');
console.log(newScore);

function maxScore() {
  newScore.innerHTML = valueInput;
}

//function reset
function resetScore() {
  location.reload();
  document.getElementById('score').value = '';
  playScore1.innerHTML = 0;
  playScore2.innerHTML = 0;
}


//function increase score
let player1 = document.get

function increaseScore() {

  for (let playScore1 = 0; playScore1 <= newScore; ++playScore1) {
    nextClick1++;
  }
}


