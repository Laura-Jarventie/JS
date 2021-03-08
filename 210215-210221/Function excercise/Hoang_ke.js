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
  window.addEventListener("DOMContentLoaded", console.log("ready"));
  const users = getUsers(); //when page is load, we get unsorted arrey of user objects//
  document.getElementById("sortButton").addEventListener("click", (event) => {
    const sortedUsers = users.sort((a, b) => b.age - a.age);
    console.log(sortedUsers);
    renderTable(sortedUsers);
  });

  renderTable(users);

  const oldestPerson = getOldest(users);
  console.log("the oldest person is", oldestPerson.name, oldestPerson.age);
})();

function renderTable(userObjs) {
  document.getElementById("myTable").innerHTML = ``; //clear the table content
  userObjs.forEach((user) => addUser(user)); //iterate through user objecets array, and for each of them adds user (ie calls addUser function).//
}

function getOldest(userObjs) {
  let oldest = userObjs[0];
  for (let i = 1; i < userObjs.leght; i++) {
    if (userObjs[i].age > oldest.age) {
      oldest = userObjs[i];
    }
  }
  return oldest;
}
//add user function expects array of userObjects as input and for each objects (ie user) add´s new row.//
function addUser(userObj) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `   
<td>${userObj.studentNo}</td>
<td>${userObj.name}</td>
<td>${userObj.age}</td>  
<td>${userObj.studentNo > 0}</td> 
`;
  document.querySelector(`#myTable`).appendChild(newRow);
}

function getUsers() {
  return [
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
