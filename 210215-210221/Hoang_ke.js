/*this is the excersice 4-6. Nro 5 anwer is that code is not working if Scrip.js injection is in Header. For nro 6 test User is getting added to table because that function happens when html is loaded

window.addEventListener("DOMContentLoaded", executeScript);

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
*/
(function () {
  function addRow(usersObj) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `   
  <td>${usersObj.studentNo}</td>
  <td>${usersObj.name}</td>
  <td>${usersObj.age}</td>  
  `;
    document.querySelector(`#myTable.content`).appendChild(newRow);
  }
})();

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
    studentNo: -1,
    name: "Snape",
    age: 55,
  },
  {
    studentNo: -1,
    name: "Hagrid",
    age: 65,
  },
];

const users = getUsers();

function addUser(user) {
  console.log("does this work?");
}

users.forEach(addUser);

This is for task nro 4
function getOldest(users) {
  
}

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






*/
