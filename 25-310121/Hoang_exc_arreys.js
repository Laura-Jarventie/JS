
let playedRounds = 0;
let jackpotStatus = false;
let roundCost = 0.5;

while (jackpotStatus === false) { 
    playedRounds = playedRounds + 1;

let lotteryNumbers = [];
let counter = 0;

while (counter <5){
    lotteryNumbers[counter] = Math.floor(Math.random()*6);
    counter = counter + 1
}
console.log(lotteryNumbers)

let oneCounter = 0;
let zeroCounter = 0;
counter = 0;

while (counter < 5) {

   if (lotteryNumbers[counter] === 1) {
       oneCounter = oneCounter + 1;
   }
   else if (lotteryNumbers[counter] ===0) {
       zeroCounter = zeroCounter + 1;
   }
   counter = counter + 1;
}

console.log('You got number one ' + oneCounter + ' times');
console.log('You got number zero ' + zeroCounter + ' times');

if (oneCounter === 5) {
    jackpotStatus = true;
    console.log('JACKPOT')
} else if (zeroCounter === 5) {
    console.log('Congrats, but no win')
} else if (oneCounter === 4) {
    console.log('small price')
}
}
console.log(playedRounds);
console.log( 'You have spend ' + roundCost*playedRounds + ' € to win the jackpot.' );


