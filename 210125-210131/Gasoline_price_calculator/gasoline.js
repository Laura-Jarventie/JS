function calculate() {
  let price = Number(document.querySelector("#price").value);
  let money = Number(document.querySelector("#money").value);
  let answer = document.querySelector("#answer");
  let solution = document.querySelector("#solution");
  /* different options: by id or query OBS if using query, you need to put # , or if you take by class .price or .money Query selector takes first that is finds, query all takes all. Safest to use is by ID*/
  /*
    const calculate = (price, money, answer) => console.log("answer")*/

  let liter = Math.floor(money / price);
  let text;

  liter >= 10
    ? (text = "Good, you can escape now")
    : (text = "Ups, you have to stay here");

  answer.textContent = `You can buy ${liter} litres of gasoline`;
  solution.textContent = text;
  /*
  if (liter > 10) {
    console.log("good you can escape now");
  } else {
    console.log("Ups, you have to stay here");

    answer.textContent = liter;
  }
  */
  console.log(
    (liter =
      liter > 10 ? "good you can escape now" : "Ups, you have to stay here")
  );
}

/* could be also some other but text content is the safest
  if you put return it means that function stops there. After return nothing happens. It is like break in switch.

  row 2-3 you need to specify the type with capital: Number. input type="number" in HTML is for the user, he can´t enter letters. JS reads the value as string unless we tell JS to read it as Number. */
