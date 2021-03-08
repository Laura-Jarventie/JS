let firstNumber = "";
let secondNumber = "";
let operation = "";
let result = 0;

function performCalculation() {
  const previousNumber = Number(firstNumber);
  const currentNumber = Number(secondNumber);
  if (operation === "+") {
    result = currentNumber + previousNumber;
  } else if (operation === "-") {
    result = currentNumber - previousNumber;
  } else if (operation === "*") {
    result = currentNumber * previousNumber;
  } else if (operation === "/") {
    result = currentNumber / previousNumber;
  } else {
    result = "uups";
  }

  document.getElementById("input").innerText = `${result}`;
  firstNumber = "";
  secondNumber = "";
  operation = "";
}

document.getElementById("equals").addEventListener("click", performCalculation);

document.querySelectorAll(".numbers > div").forEach((button) => {
  updateDisplay();
  button.addEventListener("click", function () {
    if (secondNumber === "" && operation != "") {
      operation = "";
      updateDisplay();
    }
    if (this.innerText === "." && firstNumber.indexOf(".") > -1) {
      return;
    } else {
      firstNumber += this.innerText;
    }
    updateDisplay();
  });
});

document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    secondNumber = firstNumber;
    firstNumber = "";
    switch (this.innerText) {
      case "+":
        operation = `+`;
        break;
      case "-":
        operation = "-";
        break;
      case "*":
        operation = "*";
        break;
      case "÷":
        operation = "/";
        break;
      default:
        console.log("error");
        break;
    }
    updateDisplay();
  });
});

function updateDisplay() {
  document.getElementById(
    "input"
  ).innerText = `${secondNumber} ${operation} ${firstNumber}`;
}

document.getElementById("clear").addEventListener("click", reset);

function reset() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  updateDisplay();
}

document.getElementById("clear").addEventListener("click", deleteLast);

function deleteLast() {
  if (firstNumber != "") {
    firstNumber = firstNumber.toString().slice(0, -1);
    updateDisplay();
  } else if (firstNumber == "" && operation != "") {
    operation = "";
    updateDisplay();
  } else if (firstNumber == "" && operation == "") {
    console.log(secondNumber);
    secondNumber = secondNumber.toString().slice(0, -1);
    updateDisplay();
  } else {
    console.log("Something went wrong...");
  }
}
