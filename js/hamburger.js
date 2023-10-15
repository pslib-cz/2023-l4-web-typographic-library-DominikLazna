const hamburgerEl = document.querySelector(".hamburger");
const navListEl = document.querySelector(".nav__list");

hamburgerEl.addEventListener("click", toggleNav);

function toggleNav() {
    navListEl.classList.toggle("nav__list--hidden");
}