//UI Variables
let value = document.querySelector(".value");
let code = document.querySelector(".code");
let altKey = document.querySelector(".alt");
let shift = document.querySelector(".shift");
const shiftContainer = document.querySelector(".shift-key");
const altContainer = document.querySelector(".alt-key");

//Listen for keypress
window.addEventListener("keypress", e => {
    console.log(e);

    //Display key value
    value.textContent = e.key;
    //Display key code
    code.textContent = e.keyCode;

    //Check if shift key was used
    if(e.shiftKey) {
        shift.textContent = true;
        shiftContainer.style.backgroundColor = "green";
    } else {
        shift.textContent = false;
        shiftContainer.style.backgroundColor = "red";
    }

    //Check if alt key was used
    if(e.altKey) {
        altKey.textContent = true;
        altContainer.style.backgroundColor = "green";
    } else {
        altKey.textContent = false;
        altContainer.style.backgroundColor = "red";
    }

});