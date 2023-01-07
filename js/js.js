// close open nav

const ACTIVE_CLASS = "active";

const navIcons = document.querySelectorAll([".hamburger", ".close"]);
const nav = document.querySelector(".nav");

navIcons.forEach((navIcon) => {
  navIcon.addEventListener("click", () => {
    nav.classList.toggle(ACTIVE_CLASS);
  });
});








