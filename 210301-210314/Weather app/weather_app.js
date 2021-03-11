/*document
    .getElementById("renderWeather")
    .addEventListener("click", executeScript());*/

const KELVIN = 273;
const key = "933a6d83461db4ba6005390f96055d3d";
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

const weather = {};

weather.temperature = {
  unit: "celsius",
};
//let city = city.name;
//let city = document.getElementById("city").value;
function getWeather(city) {
  let api = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=4${key}`;

  fetch(api)
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });
}

function displayWeather() {
  tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
  descElement.innerHTML = weather.description;
  locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
