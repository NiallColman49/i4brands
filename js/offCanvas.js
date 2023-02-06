const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
hamburger.addEventListener("click", () => {
    const menu = document.querySelector(".off-canvas-menu");
    menu.classList.toggle("hidden");
});
