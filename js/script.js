// Скрипт для бургер меню

const hamb = document.querySelector("#navbar-hamb-field");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#navbar-menu").cloneNode(1);
const body = document.body;

menu.classList.remove("navbar__menu");
menu.classList.add("popup__menu");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
