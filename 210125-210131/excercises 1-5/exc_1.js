const militaryAge = () => {
  let age = prompt("How old are you?");
  let solution = document.querySelector("#solution");

  let text;
  if (age < 18) {
    text = "too young";
  } else if (age < 27) {
    text = "Right age for military service";
  } else if (age < 41) {
    text = "Yoage are in reserve";
  } else if (age < 55) {
    text = "You are in backup resrve";
  } else {
    text = "too aged";
  }
  solution.textContent = text;
};

/*
console.log(
funktion answer() { 
    return age <18 ? "too young"
   : age < 27 ? "Right age for military service"
   : age < 41 ? "You are in reserve" 
   : age < 55 ? "You are in backup reserve" 
   : "too aged"
}
)
doesn´t work, somethin wrong*/
