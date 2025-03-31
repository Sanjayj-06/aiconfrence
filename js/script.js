let scrollpad=document.querySelector("nav").offsetHeight;
document.documentElement.style.setProperty('--scroll-padding',scrollpad+'px');
let menubar=document.querySelector(".menubar");
menubar.addEventListener("click",toggleMenu);
let menu=document.querySelector(".menu");
let cross=document.querySelector(".cross");
let nav=document.querySelector("nav ul");
nav.addEventListener('click',toggleMenu)
function toggleMenu(){
    menu.classList.toggle("hide");
    cross.classList.toggle("hide");
    nav.classList.toggle("trans100");
    for(let element of nav.children){
        element.firstElementChild.classList.toggle("scale");
    };
}