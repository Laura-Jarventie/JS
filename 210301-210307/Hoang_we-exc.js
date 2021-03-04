(function () {
  document.addEventListener("DOMContentLoaded", executeScript);

  function executeScript() {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
      .then((resp) => resp.json())
      .then((json) => {
        /* { results: [], info: {}} so we wait API call first and then when it is ready, go through with forEach() and add users */
        json.results.forEach(addUser);
      });
  }

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `
        <div class="name">${user.name}</div>
        <div class="url">${user.url}</div>
        
        
    `;

    document.getElementById("user-list").appendChild(newEl);

    showInfo();
  }

  function showInfo() {
    let pokemonBtns = document.querySelectorAll("div");
    /*
    for (let i = 0; i < pokemonBtns.length; i++) {
      pokemonBtns[i].onclick = function () {
        clicked(i);
      };
    }
    function clicked(index) {
      document.getElementById("picture").innerHTML = "";
      console.log(newEl);
      console.log(`${user.url}`);
      console.log(`why are you not printing???`);
    }*/
  }
})();
/*
function showPicture() {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=10")
    .then((resp) => resp.json())
    .then((json) => {
      json.results.forEach(addLink);
    });

  function addLink(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `
          <div class="name">${user.name}</div>
      `;
    document.getElementById("user-list").appendChild(newEl);
  }
}
*/
