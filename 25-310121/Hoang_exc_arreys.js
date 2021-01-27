let chosenNumber = Math.floor(Math.random()*2);
let secondchosenNumber = Math.floor(Math.random()*2);
let thirdchosenNumber = Math.floor(Math.random()*2);
let fourthchosenNumber = Math.floor(Math.random()*2);
let fifthchosenNumber = Math.floor(Math.random()*2);

let listOfNumbers = [chosenNumber, secondchosenNumber, thirdchosenNumber, fourthchosenNumber, fifthchosenNumber];
console.log(listOfNumbers);


let numbers = [listOfNumbers];

let count = 1;
while (count < 10) {
    console.log(count);
    count +=2;
}