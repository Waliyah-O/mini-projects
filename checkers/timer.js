const timeDisplay = document.querySelector("#timeDisplay");
let gameBoard = document.getElementById("gameBoard")

let startTIme = 0;
let elapsedTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

gameBoard.addEventListener("onclick", () => {
  if (paused) {
    paused = false;
    startTIme = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTIme;

  seconds = Math.floor((elapsedTime / 1000) % 60);
  minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  seconds = pad(seconds);
  minutes = pad(minutes);
  hours = pad(hours);

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
