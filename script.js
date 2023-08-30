var timer = 5;
var score = 0;
var rn;
function makeBubble() {
  var clutter = "";
  for (var i = 0; i < 220; i++) {
    var ran = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ran}</div>`;
  }
  document.querySelector(".test").classList.add("hide");
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timeint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeint);
      document.querySelector("#pbtm").classList.add("hide");
      document.querySelector(".test").classList.remove("hide");

      document.querySelector(
        ".test"
      ).innerHTML = `<h1>Game Over</h1><p>Your Score:${score}</p>`;
    }
  }, 1000);
}

function getNewHit() {
  rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (clicked) {
  var clickedNumber = Number(clicked.target.textContent);
  if (clickedNumber == rn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();

//code updating by satish
