let tempElement = document.getElementById("temperatureValue");
let descElement = document.querySelector(".temperatureDescription p");
let locationElement = document.querySelector(".location p");
let notificationElement = document.querySelector(".notification");

const weather = {};
weather.temperature = {
  unit: "celsius",
};

const KELVIN = 273;
const key = "933a6d83461db4ba6005390f96055d3d";

let city = prompt("Enter city name");

let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;

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
  tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
