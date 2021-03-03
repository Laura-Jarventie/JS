fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000")
  .then((response) => response.json())
  .then((json) => console.log(json));

console.log(json.name);

/*
document.getElementById("demo").innerHTML = Array.name;
*/
