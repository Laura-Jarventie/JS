let buttons = document.querySelectorAll(".balls");
let scoreDisplay = document.querySelector("#score");
let overlay = document.getElementById("bottom");
let gameoverBox = document.getElementById("gameOverNotification");
let speed = 2000;

let startingButton = document.getElementById("startGame");

let endingButton = document.getElementById("endGame");

//query selector all is returning Node list, so all objects have index
buttons[0].onclick = function () {
  clicked(0);
};

buttons[1].onclick = function () {
  clicked(1);
};

buttons[2].onclick = function () {
  clicked(2);
};

buttons[3].onclick = function () {
  clicked(3);
};

let score = 0;

//I get the number from above, pass it to arrow function, and console log it, so it will show which ball is clicked.
const clicked = (i) => {
  console.log("clicked", i);
  if (i === active) {
    score++;
    scoreDisplay.textContent = `Your score: ${score}`;
    speed = speed - 100;
  } else {
    console.log("WRONG!");
    endGame();
  }
};

//this get´s balls to be active randomly
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let active = 0;

const startGame = () => {
  //console.log("started");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.pointerEvents = "auto";
  }

  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  console.log("active:", active);

  timer = setTimeout(startGame, speed);

  function pickNew(active) {
    let followingActive = getRandomInt(0, 3);
    if (followingActive != active) {
      return followingActive;
    } else {
      return pickNew(active);
    }
  }
};

startingButton.addEventListener("click", startGame);

//if I put textContent the message and button will disappear! Why?
const endGame = () => {
  clearTimeout(timer);
  console.log("close");
  overlay.style.visibility = "visible";
  gameoverBox.textContent = "Your score: " + score;
};

//close button will reload the page
const reloadGame = () => {
  window.location.reload();
};

endingButton.addEventListener("click", endGame);

endingButton.style.visibility = "hidden";

if ((startingButton = "click")) {
  startingButton.style.visibility = "hidden";
  endingButton.style.visibility = "visible";
}
