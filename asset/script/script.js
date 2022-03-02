const p1 = {
  score: 0,
  btn: document.querySelector("#p1Btn"),
  dpy: document.querySelector("#p1Score"),
};

const p2 = {
  score: 0,
  btn: document.querySelector("#p2Btn"),
  dpy: document.querySelector("#p2Score"),
};

const resetBtn = document.querySelector("#reset");

var isGameOver = false;

const scoreLimitSelect = document.querySelector("#scoreLimit");

var scoreLimit = 0;

function updateScores(player, opponent) {
  if (!isGameOver && scoreLimit >= 3) {
    player.score += 1;
    console.log(player.dpy);
    console.log(`${scoreLimit} form if`);
    player.dpy.innerHTML = player.score;

    if (player.score === scoreLimit) {
      player.dpy.style.color = "green";
      opponent.dpy.style.color = "red";
      player.btn.disabled = true;
      opponent.btn.disabled = true;
      isGameOver = true;
    }

    console.log(`${player.score} player `);
    console.log(`${opponent.score} opponent`);
  }
}

p1.btn.addEventListener("click", function () {
  updateScores(p1, p2);
});

p2.btn.addEventListener("click", function () {
  updateScores(p2, p1);
});

resetBtn.addEventListener("click", function () {
  p1.dpy.style.color = "#fff";
  p2.dpy.style.color = "#fff";
  scoreLimitSelect.selectedIndex = 0;
  reset();
});

scoreLimitSelect.addEventListener("change", function () {
  scoreLimit = parseInt(this.value);
  console.log(scoreLimit);
  reset();
});

function reset() {
  isGameOver = false;
  for (const p of [p1, p2]) {
    p.score = 0;
    p.btn.disabled = false;
    p.dpy.innerHTML = 0;
  }
}
