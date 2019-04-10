"use strict";

//function add Input to Max New Score
let valueInput = document.getElementById('score').value;
console.log(valueInput);
let newSrc = document.getElementById('maxscore');

function maxScore() {
  newSrc.innerHTML = valueInput;
}

//function reset

function resetScore() {
  location.reload();
  document.getElementById('score').value = '';
}


