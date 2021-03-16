/*document
    .getElementById("renderWeather")
    .addEventListener("click", executeScript());
    .container.addEventListener("submit", daysLeft); TÄMÄN PITÄIS TOIMIA!
    */

const tempElement = document.getElementById("temperatureValue");
const descElement = document.querySelector(".temperatureDescription p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};
weather.temperature = {
  unit: "celsius",
};
//let city = city.name;
//let city = document.getElementById("city").value;
const KELVIN = 273;
const key = "92e62b34141b6fe50fe8e3935ae2e018";
/*"933a6d83461db4ba6005390f96055d3d";*/

let city = prompt("Enter city name");

let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=4${key}`;

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
    weather.temperature.value = Math.floor(data.main.temp - KELVIN);
    weather.description = data.weather[0].description;
    weather.city = data.name;
    weather.country = data.sys.country;
  })
  .then(function () {
    displayWeather();
  });

function displayWeather() {
  temperatureValue.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
