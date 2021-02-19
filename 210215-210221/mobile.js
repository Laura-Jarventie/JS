let header = document.querySelector("header");
let buttonBackToTop = document.getElementById("backToTop");
let nav = document.querySelector("nav");
let buttonMobile = document.getElementById("mobileButton");
let links = document.querySelectorAll("nav ul li a");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
    buttonBackToTop.style.display = "block";
  } else {
    header.classList.remove("bg");
    buttonBackToTop.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};

buttonBackToTop.addEventListener("click", getToTop);
buttonMobile.addEventListener("click", mobMenu);

/*

mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

  } else {

  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

let buttonMobile = document.getElementsById("mobileButton");
buttonMobile.addEventListener("click", mobMenu);*/
