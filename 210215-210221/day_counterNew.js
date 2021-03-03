let answer = document.querySelector("#answer");

let alldays = [];
let businessdays = [];
let countdowntimer;

const daysLeft = (event) => {
  event.preventDefault();

  let today = new Date();
  let endDay = new Date(document.querySelector("#endDay").value);
  let happening = document.getElementById("happening").value;

  while (today < endDay) {
    today.setDate(today.getDay() + 1);
    alldays.push(today);
    if (today.getDay() !== 6 && today.getDay() !== 0) {
      businessdays.push(today);
    }
  }

  answer.textContent = `There is ${alldays.length} days until ${happening}, which is ${businessdays.length} working days.`;
};
