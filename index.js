// search button
const container = document.querySelector('.search');
const btn = document.querySelector('.t');
const input = document.querySelector('input');

btn.addEventListener('click',()=>{
    container.classList.toggle('active')
     input.focus();
})