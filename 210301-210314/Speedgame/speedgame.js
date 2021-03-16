let buttons = document.querySelectorAll(".balls");
let scoreDisplay = document.querySelector("#score");
let overlay = document.getElementById("bottom");
let gameoverBox = document.getElementById("gameOverNotification");
let close = document.getElementById("close");
let speed = 1800;
let score = 0;
let active = 0;
let misses = 0;
document.getElementById("endGame").classList.add("invisible");
document.getElementById("score").classList.add("hidden");
let theme = new sound("music.mp3");
let mistakeSound;
//Creating sound object:
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function playTheme() {
  // theme = new sound(".mp3");
  theme.play();
}
function pauseTheme() {
  theme.pause();
}

//query selector all(.balls) is returning Node list, so all objects have index
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

//I get the number from above, pass it to arrow function, and console log it, so it will show which ball is clicked.
const clicked = (i) => {
  console.log("clicked", i);
  if (i === active) {
    score++;
    scoreDisplay.textContent = `Your score: ${score}`;
    speed = speed - 100;
    misses = 0;
    buttons[active].classList.remove("active");
  } else {
    console.log("WRONG!");
    mistakeSound.play();
    theme.stop();
    endGame();
  }
};

mistakeSound = new sound("mistakeSound.mp3");

//this get´s balls to be active randomly
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = () => {
  document.getElementById("score").classList.remove("hidden");
  document.getElementById("startGame").classList.add("invisible");
  document.getElementById("endGame").classList.remove("invisible");

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
  misses++;
  console.log("Misses: " + misses);
  if (misses === 4) {
    endGame();
  }
};

const endGame = () => {
  clearTimeout(timer);
  console.log("close");
  overlay.style.visibility = "visible";
  if (score < 5) {
    gameoverBox.textContent = "Come on, try at least! Your score: " + score;
  } else if (score < 15) {
    gameoverBox.textContent = "Pretty good! You got " + score + " points!!!";
  } else if (score < 30) {
    gameoverBox.textContent = "Excellent! You got " + score + " points!!!";
  } else {
    gameoverBox.textContent =
      "Somehow you have cheated! You got " + score + " points!!!";
  }
};

//close button will reload the page
const reloadGame = () => {
  window.location.reload();
};
