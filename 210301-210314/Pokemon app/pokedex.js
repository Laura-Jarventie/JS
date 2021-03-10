(function () {
  document.addEventListener("DOMContentLoaded", executeScript);

  const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=100";
  let pokemons = [];

  async function executeScript() {
    let json = await (await fetch(POKEMON_URL)).json();
    pokemons = json.results;
    pokemons.forEach(addUser);

    document.querySelectorAll(".user .name").forEach((e) => {
      e.addEventListener("click", async (e) => {
        let json = await (
          await fetch(e.target.getAttribute("data-url"))
        ).json();
        console.log(json.sprites.front_default);
        document
          .getElementById("current-user")
          .setAttribute("src", json.sprites.front_default);
      });
    });
  }

  function addUser(user) {
    const newEl = document.createElement("div");
    newEl.className = "user";
    newEl.innerHTML = `
        <div class="name" data-url="${user.url}">
        ${user.name}</div>
           
    `;

    document.getElementById("user-list").appendChild(newEl);

    showInfo();
  }

  function showInfo() {
    let pokemons = document.querySelectorAll("div");
  }
})();

/* This is the original code step by step. In above same code but in better and neater way

function executeScript() {
    fetch(POKEMON_URL)
      .then((resp) => resp.json())
      .then((json) => {
        json.results.forEach(addUser);
        document.querySelectorAll(".user .name").forEach((e) => {
          e.addEventListener("click", (e) => {
            fetch(e.target.getAttribute("data-url"))
              .then((resp) => resp.json())
              .then((json) => {
                console.log(json.sprites.front_default);
                document
                  .getElementById("current-user")
                  .setAttribute("src", json.sprites.front_default);
              });
          });
        });
      });
  }
  */
