const menuOpen = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("mobile-menu");
const overlay = document.getElementById("overlay");

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

function openMenu() {
	menu.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
}

function closeMenu() {
	menu.classList.toggle("hidden");
	overlay.classList.toggle("hidden");
}
