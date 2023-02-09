const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
    const menu = document.querySelector(".off-canvas-menu");
    menu.classList.toggle("hidden");
});

const closeMenu = document.querySelector(".close");

closeMenu.addEventListener("click", () => {
    const menu = document.querySelector(".off-canvas-menu");
    menu.classList.toggle("hidden");
});
