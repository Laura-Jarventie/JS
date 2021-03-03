let buttonstopGame = document.getElementById("stopGame");
const end = () => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", end);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonstopGame.addEventListener("click", end);
