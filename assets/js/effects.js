const navBar = document.querySelector(".header-container");
const btn = document.querySelector(".btn-hover");


window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        navBar.style.background = "white";
        btn.style.background = "#1a8917";
    } else {
        navBar.style.background = "#FFC017";
        btn.style.background = "black";
    }
});