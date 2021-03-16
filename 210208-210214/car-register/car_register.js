let formInput = document.querySelector("#inputData");
let formSearch = document.querySelector("#searchData");

function Car(licence, maker, model, price, color) {
  this.licence = licence;
  this.maker = maker;
  this.model = model;
  this.price = price;
  this.color = color;
  this.discount = function () {
    if (this.carPrice >= 20000) {
      this.discount = this.carPrice * 0.25;
    } else if (this.carPrice <= 5000) {
      this.discount = this.carPrice * 0.1;
    } else {
      this.discount = this.carPrice * 0.15;
    }
  };
  this.discount();
}

let cars = [];

let aksun = new Car("123", "BMW", "convertible", 10000, "black");
let lauran = new Car("343faa", "Lada", "classic", 10000, "Lada");

cars.push(aksun);
cars.push(lauran);

const searchCar = (event) => {
  event.preventDefault();

  let licence = document.querySelector("#searchLicence").value;
  let text = document.querySelector("p");
  formSearch.reset();
  if (carArray.length == 0) {
    text.textContent = "Please enter car first";
  } else {
    for (const i of carArray) {
      if (i.licencePlate == licence) {
        return (text.textContent = `Licence number ${i.licencePlate} is ${i.manufacturer} ${i.carModel} and your discount is ${i.discount}`);
      } else {
        text.textContent = `There is no car with that licence plate added to the system. Try again?`;
      }
    }
  }
};

formInput.addEventListener("submit", addCar);
formSearch.addEventListener("submit", searchCar);

/*

let text = document.querySelector("p");
text.textContent = "Search plate";
// console.log(cars[1]);

let submit = document.getElementById("#submit");

// let car = new Car(licence, maker, model, price, color);
*/
/*
document.getElementById("submit").addEventListener("click", () => {
  let car = new Car();
  car.licence = document.getElementById("licence").value;
  car.maker = document.getElementById("maker").value;
  car.model = document.getElementById("model").value;
  car.price = Number(document.getElementById("price").value);
  car.color = document.getElementById("color").value;

  //   let car = new Car(licence, maker, model, price, color);

  cars.push(car);

  console.table(cars);
});
console.clear();

let i = 0;
document.getElementById("searchInput").addEventListener("click", () => {
  let userInput = document.getElementById("licence").value;

  let message = "Didn't find anything with that plate";
  while (i < cars.length) {
    if (cars[i].licence == userInput) {
      message =
        "Found it! The car maker is " +
        cars[i].maker +
        " and the model is " +
        cars[i].model;
    }
    i++;
  }
  console.log(message);
});
console.table(cars);

let userInput = document.getElementById("licence").value;
if (cars[i].licence == userInput) {
  function calculate() {
    if (this.price > 200000) {
      (this.price = this.price * 0), 75;
      return this.price;
    } else if (this.price < 5000) {
      this.price = this.price * 0.9;
      return this.price;
    } else {
      (this.price = this.price * 0), 85;
      return this.price;
    }
  }
}
console.log(cars[i].price); */
