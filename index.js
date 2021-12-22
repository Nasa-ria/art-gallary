// search button
const container = document.querySelector('.search');
const btn = document.querySelector('.t');
const input = document.querySelector('input');

btn.addEventListener('click',()=>{
    container.classList.toggle('active')
     input.focus();
})

// humberger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
// closing menu
const navLink = document.querySelectorAll(".link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}