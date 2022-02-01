const p1  = {
  score:0,
  button : document.querySelector("#p1Button"),
  disply : document.querySelector("#p1Disply")

}

const p2  = {
  score:0,
  button : document.querySelector("#p2Button"),
  disply : document.querySelector("#p2Disply")

}


const resetButton = document.querySelector("#reset");
const winnigScoreSelect = document.querySelector("#playto");


let winnigScore = 5;
let isGamerOver = false;

function updateScore(player,opponent){
  if (!isGamerOver) {
    player.score += 1;
    if (player.score === winnigScore) {
      isGamerOver = true;
      player.disply.classList.add("has-text-success");
      opponent.disply.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.disply.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1,p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2,p1);
});

winnigScoreSelect.addEventListener("change", function () {
  winnigScore = parseInt(this.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGamerOver = false;
  for(let p of [p1,p2]){
    p.score=0;
    p.disply.classList.remove("has-text-success", "has-text-danger");
    p.disply.textContent = p.score;
    p.button.disabled = false;
  }
 
}
