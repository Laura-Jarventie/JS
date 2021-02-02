let form = document.querySelector("#form");

let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let text = document.querySelector("p");

const setGradient = (event) => {
    event.preventDefault();
let selectedValue;

for [const v of direction] {
    if (v.checked) {
        selectedValue = v.value;
    }
}

    console.log("Wow, this is actually working");
    console.log(color1.value);
    console.log(color2.value);

document.body.style.backgroundImage = `linear-gradient ( to right
${color1.value}, ${color2.value})`;

    text.textContent = `color 1 is ${color1.value} and color 2 is ${color2.value}`;



form.addEventListener("submit", setGradient);