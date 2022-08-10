const nav = document.querySelector(".nav-container");
const menu = document.querySelector(".nav-menu-container");
const list = document.querySelector(".nav-menu");
const btn = document.querySelector(".nav-btn");
const header = document.querySelector(".header-container");

nav.addEventListener("click", show);
list.addEventListener("click", display);

function show() {
	let active = btn.classList.contains("nav-btn-clicked");
	let menuactive = menu.classList.contains("nav-menu-container-active");
	let headeractive = header.classList.contains("header-container-active");

	if (active || menuactive || headeractive) {
		btn.classList.remove("nav-btn-clicked");
		menu.classList.remove("nav-menu-container-active");
		header.classList.remove("header-container-active");
	} else {
		btn.classList.add("nav-btn-clicked");
		menu.classList.add("nav-menu-container-active");
		header.classList.add("header-container-active");
	}
}

function display() {
	let menuactive = menu.classList.contains("nav-menu-container-active");
	let active = btn.classList.contains("nav-btn-clicked");

	if (menuactive || active) {
		menu.classList.remove("nav-menu-container-active");
		btn.classList.remove("nav-btn-clicked");
	}
}
