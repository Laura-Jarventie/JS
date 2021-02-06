const positiveNumbers = () => {
  let nro1 = Number(prompt("Give a number"));
  let nro2 = Number(prompt("Give another number"));
  let nro3 = Number(prompt("Give third number"));
  let text;
  let sum = nro1 + nro2 + nro3;
  let multi = nro1 * nro2 * nro3;

  if (nro1 < 0 && nro2 < 0 && nro3 < 0) {
    text = "only negatives";
  } else if (nro1 >= 0 && nro2 >= 0 && nro3 >= 0) {
    text = `Sum of of the is ${sum} and multification is ${multi}`;
  } else if (nro1 >= 0 || nro2 >= 0 || nro3 >= 0) {
    text = `Sum of the numbers is ${sum}`;
  }
  solution.textContent = text;
};
/*use backtick, otherwise ${} doesn´t work*/
