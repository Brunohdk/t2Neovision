let open = document.getElementById('hamburger');
let changeIcon = true;

open.addEventListener("click", function(){

    let overlay = document.querySelector('.overlay');
    let nav = document.querySelector('nav');
    let icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

const form = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputEmail = document.getElementById('inputEmail');

function onFormSubmit(e){

    e.preventDefault();
    console.log(inputName.value)
    console.log(inputEmail.value)
}


form.addEventListener('submit', this.onFormSubmit);