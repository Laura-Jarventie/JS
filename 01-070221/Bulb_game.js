const NUMBER_OF_BULBS = 50;
const DELAY = 400;
const WINNING_BULB_INDEX = 5;

let counter = 0;
let arrayOfBulbs = []

//creating bulbs
while (counter < NUMBER_OF_BULBS) {
    const newEl = document.createElement('div'); //create´s tag
    newEl.className = 'bulb'; //name for the tag
    document.getElementById('bulbs').appendChild(newEl);//places the creted tag 

    arrayOfBulbs[counter] = false;
    counter++;
}


//reset the pointer back to first bulb
counter = 0;
arrayOfBulbs[counter] = true; //initial bulb
document.getElementsByClassName('bulb')[counter].classList.add('active');
document.getElementsByClassName('bulb')[WINNING_BULB_INDEX].classList.add('chosen');


let myVar = setInterval(() => {
    // swithc off the current bulb
    arrayOfBulbs[counter] = false;
    document.getElementsByClassName('bulb')[counter].classList.remove('active');
// unless it is already the last bulb
if(counter < NUMBER_OF_BULBS - 1) { //if not -1 it will create extra bulb
    counter++; // get the next bubl in the arrey
} else {
    counter = 0; // reset
}

arrayOfBulbs[counter] = true;
document.getElementsByClassName('bulb')[counter].classList.add('active');

console.clear();
console.log(arrayOfBulbs);
}
, DELAY);

document.getElementById("myBtn").addEventListener("click", stopInterval);

function stopInterval() {
    clearInterval(myVar);
    if (arrayOfBulbs[counter] = true === arrayOfBulbs[WINNING_BULB_INDEX]){
    console.log('JIIIHAA, YOU MADE IT!');}
  }

  const arrangeBulbsInACircle = nodes => {   
    const radius = '12em',
        start = -90,
        $els = [...nodes], // turn nodelist into a real array
        numberOfEls = $els.length,
        slice = 360 / numberOfEls,
        index = 0;

    $els.forEach((el, index) => {
        const rotate = slice * index + start;
        const rotateReverse = rotate * (-1);

        el.style.transform = `rotate(${rotate}deg) translate(${radius}) rotate(${rotateReverse}deg)`;
    })
}

  
  
