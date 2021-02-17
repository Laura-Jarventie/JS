/*
let text = document.querySelector("p");

let car = {
  type: "Audi",
  year: 2000,
  ownerName: "Laura",
  city: "Helsinki",
   calcAge: function () {
    this.age = 2021 - this.year;
    return this.age; 
    /*
  calcAge: () => car.year
  arrow funtions are not recommended in methods*/

//exc how to add, remove and replace values of object

/*
console.log(car);
console.log(car.year);
console.log(car.city);
car.city = "Tampere";
console.log(car.city);

car.color = "Red";
console.log(car);

delete car.city;
console.log(car);
// warning with delete!!!! be careful

text.textContent = car;
//you can´t display object in page, shows only [object object]

text.textContent = car.city;

text.textContent = `Your car is ${car.color} year ${
  car.year
}. The age of the car is ${car.calcAge()}`;

// now we make method to calculate the age of the car caclAge.
//if you call out simple name = property, make it with . if you call out method, you need ()

*/
/*
function Person(first, last, age, eye) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.eye = eye;
}

let myMother = new Person("Riitta", "Järventie", 74, "green");
let myBrother = new Person("Juuso", "Järventie", 43, "blue");
let mySister = new Person("Kaisa", "Nyyssönen", 34, "blue");

console.log(Juuso);
*/


function Animals(name, sound, age, eye) {​​​​​​​​
this.name = name;
this.sound = sound;
this.age = age;
this.eye = eye;
}

let cat = new Animals("Herra Hakkarainen", "meow", 5, "green");

console.table(cat);


