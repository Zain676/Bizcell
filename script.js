
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // 50px down
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

