let firstNumber = 0;
let secondNumber = 0;
let operation = "";

document.getElementById("result").addEventListener("click", performCalculation);

document.querySelectorAll('.operators > div').forEach(button => {
    button.addEventListener('click', updateSelectedOperation)
})

function updateSelectedOperation(){
    console.log(this);
} 

function performCalculation() {
  if (operation === "plus") return firstNumber + secondNumber;
  else if (operation === 'minus') return firstNumber - secondNumber;
  else if (operation === 'multiply') return firstNumber * secondNumber;
  else (operation === 'divided') return firstNumber / secondNumber;
}
