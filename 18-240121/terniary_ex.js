let chosenNumber = Math.floor(Math.random()*2);
let secondchosenNumber = Math.floor(Math.random()*2);
let thridchosenNumber = Math.floor(Math.random()*2);
let fourthchosenNumber = Math.floor(Math.random()*2);
let fifthchosenNumber = Math.floor(Math.random()*2);
console.log(chosenNumber, secondchosenNumber, thridchosenNumber,fourthchosenNumber,fifthchosenNumber);

if (chosenNumber==1 && secondchosenNumber==1 && thridchosenNumber==1 && fourthchosenNumber==1 && fifthchosenNumber==1)
{console.log('Congratulations! You have won jackpot!!')
}else if  (chosenNumber==0 && secondchosenNumber==0 && thridchosenNumber==0 && fourthchosenNumber==0 && fifthchosenNumber==0)
{console.log("Congratulations, gettin five zero´s is as hard as gettin five one´s, unfortunately you still don´t will anything")
}

console.log("change´s getting five numbers as same is")+console.log(2**5)

/**
 * 1 generate 5 randomize numbers
 * 2 make those random nro either 0 or 1
 * 3 check what is the combi we get
 * 4 decide whtere user won or not
 * 5 display the message accroding to result
 * let number1 = Math.random() * 10
 * let number2 = Math.random() * 10
 * let number3 = Math.random() * 10
 * let number4 = Math.random() * 10
 * let number5 = Math.random() * 10
 * math.round/floor/ceiling
 * 
 * console.log(number1, number2, number3, number4, number5);
 * 
 * if (number1 % 2 === 0){
 * number1=0;
 * } else {
 * number1===1;
 * }
 * VOIDAAN ESITTÄÄ HELPOMMIN NÄIN!OTTAA SIIN ELSEN HUOMIOON KANSSA
 * number1 = number1 % 2 === 0 ? 0 : 1;
 * 
 * if (number1 % 2 === 0){
 * number1=0;
 * } else {
 * number1===1;
 * }
 * 
 * if (number1 % 2 === 0){
 * number1=0;
 * } else {
 * number1===1;
 * }
 * 
 * if (number1 % 2 === 0){
 * number1=0;
 * } else {
 * number1===1;
 * }
 * 
 * //vaihda oikeat numerot
 * joko samoin kun mulla tai sit laskee yhteen ja jos tulos on 5 jackpot, tulos 0 ei voitoa mut hyvä jne.
 * 
 * 
 * 
 * 
 */

