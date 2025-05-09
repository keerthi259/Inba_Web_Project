document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.getElementById("overlay");

    menuToggle.addEventListener("click", function () {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });


    overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});