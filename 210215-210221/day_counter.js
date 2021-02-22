function calculate() {
  let answer = document.querySelector("#answer");
  let event = document.getElementById("event").value;
  let workingDays = document.querySelector("#workDays");

  let oneDay = 24 * 60 * 60 * 1000;
  let today = new Date();
  let endDay = new Date(document.querySelector("#endDay").value);

  let diffDays = Math.round(Math.abs((today - endDay) / oneDay));

  let workDays = Math.round(Math.abs((today - endDay) / oneDay));

  let weeks = Math.floor(workDays / 7);
  workDays -= weeks * 2;

  answer.textContent = `There is ${diffDays} days until ${event}, which is ${workDays} working days.`;

  var countDownDate = endDay.getTime();
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "D " + hours + "H " + minutes + "M " + seconds + "S ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}

function secondCalculate() {
  let secondAnswer = document.querySelector("#secondAnswer");
  let secondEvent = document.getElementById("secondEvent").value;
  let secondWorkingDays = document.querySelector("#secondWorkDays");
  let oneDay = 24 * 60 * 60 * 1000;
  let startDay = new Date(document.querySelector("#startDay").value);
  let newEndDay = new Date(document.querySelector("#newEndDay").value);

  let newDiffDays = Math.round(Math.abs((startDay - newEndDay) / oneDay));

  let newWorkDays = Math.round(Math.abs((startDay - newEndDay) / oneDay));

  let newWeeks = Math.floor(newWorkDays / 7);
  newWorkDays -= newWeeks * 2;

  secondAnswer.textContent = `There is ${newDiffDays} days until ${secondEvent}, which is ${newWorkDays} working days. `;

  var newCountDownDate = newEndDay.getTime();
  var y = setInterval(function () {
    // Get today's date and time
    var start = startDay.getTime();

    // Find the distance between now and the count down date
    var newDistance = newCountDownDate - start;

    // Time calculations for days, hours, minutes and seconds
    var newDays = Math.floor(newDistance / (1000 * 60 * 60 * 24));
    var newHours = Math.floor(
      (newDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var newMinutes = Math.floor((newDistance % (1000 * 60 * 60)) / (1000 * 60));
    var newSeconds = Math.floor((newDistance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("secondDemo").innerHTML =
      newDays + "D " + newHours + "H " + newMinutes + "M " + newSeconds + "S ";

    // If the count down is over, write some text
    if (newDistance < 0) {
      clearInterval(y);
      document.getElementById("secondDemo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
