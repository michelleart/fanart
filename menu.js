
const menuShow = document.getElementById("menuShow");
const menuCerrar = document.getElementById("menuCerrar");
const menus = document.getElementById("menus");

menuShow.addEventListener("click", () => {
    menus.classList.replace("hidden", "show")
})
menuCerrar.addEventListener("click", () => {
    menus.classList.replace("show", "hidden")
})