const menuIcon = document.getElementById("menu-icon");
const mainMenu = document.getElementById("main-menu");

menuIcon.addEventListener("click", () => {
   mainMenu.classList.toggle("menu--active");
   menuIcon.firstElementChild.classList.toggle("icon-menu__bar--active");
});