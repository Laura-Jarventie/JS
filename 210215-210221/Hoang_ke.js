function executeScript() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(2);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = "123";
  cell2.innerHTML = "test user";
  cell3.innerHTML = "9999";
}

executeScript();

const getUsers = () => [
  {
    studentNo: 123,
    name: "harry",
    age: 15,
  },
  {
    studentNo: 234,
    name: "Ron",
    age: 16,
  },
  {
    studentNo: 135,
    name: "Hermione",
    age: 17,
  },
  {
    studentNo: 222,
    name: "Snipe",
    age: 12,
  },
  {
    studentNo: 12,
    name: "Hagrid",
    age: 15,
  },
];

const users = getUsers();

function addUser({ studentNo, name, age }) {
  this.studentNo = studentNo;
  this.name = name;
  this.age = age;
}

for (var i = 0; i < users.length; i++) {
  addUser(users);
}

function getOldest(users) {
  for (var i = 0; i < users.length; i++) {
    console.log(user.name);
  }
  console.log(user.name);
}
console.log(users.name);
/*
var userList = users;
var userToAdd = new addUser(userList);
/*
function addUser(getUsers) {
  console.log(arguments[0]);
}

addUser(getUsers);
/*
class User {
  constructor(studentNo, name, age) {
    this.studentNo = studentNo;
    this.name = name;
    this.age = age;
  }
}

let Users = [];

let laura = new User(000, "Laura", 40);

Users.push(laura);

function executeScript() {
  let test = new User(123, "test", 999);
  Users.push(test);
}



window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
*/
