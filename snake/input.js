const div = document.querySelector(".moveDiv");
const buttons = document.querySelectorAll("button");

// direction and last known direction of the snake
let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});
// export function moveSnake() {
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    // console.log(buttons[i].classList.value);
    if (buttons[i].classList.value === "up arr") {
      console.log("up btn works");
    } else if (buttons[i].classList.value === "left arr") {
      console.log("left btn works");
    } else if (buttons[i].classList.value === "down arr") {
      console.log("down btn works");
    } else {
      console.log("right btn works");
    }
  });
}
// }

//get the direction of the snake
export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
