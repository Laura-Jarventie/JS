function hello(){
    alert("My name is Laura");
    whoareyou();
}
// hello(); if you put this funktion as such it JS triggering itself. menaning the alert box is popping up as soon as page is loaded.

function whoareyou(){
let yourname = prompt("What is your name");
greeting(yourname);
}

function greeting(name){
document.write(name);
}

hello();
