const NUMBER_OF_BULBS = 40;
const DELAY = 300;
const WINNING_BULB_INDEX = 5;

let counter = 0;
let arrayOfBulbs = [];
let solution = document.querySelector("#solution");





document.getElementById("startBtn").addEventListener("click", ()
  => {
  const userInput = document.getElementsById("speed").value,
    blinkingSpeed = userInput ? userInput : DELAY;
  bulbInput = document.getElementsById("bulbAmount").value,
  numberOfBulbs = bulbsInput ? bulbsInput : NUMBER_OF_BULBS;

    //creating bulbs
while (counter < bulbAmount) {
    const newEl = document.createElement("div"); //create´s tag
    newEl.className = "bulb"; //name for the tag
    document.getElementById("bulbs").appendChild(newEl); //places the creted tag

    arrayOfBulbs[counter] = false;
    counter++;
  }

  //reset the pointer back to first bulb
counter = 0;
arrayOfBulbs[counter] = true; //initial bulb
document.getElementsByClassName("bulb")[counter].classList.add("active"); //active=lightened bulb
document
  .getElementsByClassName("bulb")
[WINNING_BULB_INDEX].classList.add("chosen"); //the bulb we have decided to be winning eg the targeted bulb we try to hit

  const myVar = setInterval(() => {
    // swithc off the current bulb
    arrayOfBulbs[counter] = false;
    document
      .getElementsByClassName("bulb")
    [counter].classList.remove("active");
    // unless it is already the last bulb
    if (counter < numberOfBulbs - 1) {
      //if not -1 it will create extra bulb
      counter++; // get the next bubl in the arrey
    } else {
      counter = 0; // reset
    }

    arrayOfBulbs[counter] = true;
    document.getElementsByClassName("bulb")[counter].classList.add("active");


  }, blinkingSpeed);


/*document.getElementById('myBtn').addEventListener('click', () => {
clearInterval(myVar);
if (
  document.querySelector('.active.chosen') &&
  counter === CHOSEN_BULB_INDEX
) {
  alert('won');
} else {
  alert('No win');
} */

document.getElementById("stopBtn").addEventListener("click", stopInterval);

let text;
function stopInterval() {
  clearInterval(myVar);
  if ((arrayOfBulbs[counter] = true === arrayOfBulbs[WINNING_BULB_INDEX])) {
    text = "JIIIHAA, YOU MADE IT!";
  } else {
    text = "No win, try again";
  }
  solution.textContent = text;
}

const arrangeBulbsInACircle = (nodes) => {
  const radius = "10em",
    start = -90,
    $els = [...nodes], // turn nodelist into a real array
    numberOfEls = $els.length,
    slice = 360 / numberOfEls,
    index = 0;

  $els.forEach((el, index) => {
    const rotate = slice * index + start;
    const rotateReverse = rotate * -1;

    el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
  });
};
arrangeBulbsInACircle(document.getElementsByClassName("bulb"));
