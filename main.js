const menuBtn = document.querySelector(".menuBtn");
const menuList = document.querySelector(".menu");
const iconList = document.querySelector(".icon");

menuBtn.addEventListener("click" , () => {
    menuList.classList.toggle("action");
    iconList.classList.toggle("action");
})