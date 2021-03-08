let buttons = document.querySelectorAll(".balls");
let scoreDisplay = document.querySelector("#score");
let overlay = document.getElementById("bottom");
let gameoverBox = document.getElementById("gameOverNotification");

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
  score++;
  scoreDisplay.textContent = `Your score: ${score}`;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
let active = 0;

const startGame = () => {
  console.log("started");

  let nextActive = pickNew(active);

  buttons[nextActive].classList.toggle("active");
  buttons[active].classList.remove("active");

  active = nextActive;

  console.log("active:", active);

  timer = setTimeout(startGame, 5000);

  function pickNew(active) {
    let followingActive = getRandomInt(0, 3);
    if (followingActive != active) {
      return followingActive;
    } else {
      return pickNew(active);
    }
  }
};

// this is how you start testing that button is found
//if I put textConter the text and button will disappear! Why?
const endGame = () => {
  clearTimeout(timer);
  console.log("close");
  overlay.style.visibility = "visible";
};

//close button will reload the page
const reloadGame = () => {
  window.location.reload();
};

if (active === clicked) {
  console.log("correct");
}

/*
const endGame = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", end);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonendGame.addEventListener("click", endGame);*/
