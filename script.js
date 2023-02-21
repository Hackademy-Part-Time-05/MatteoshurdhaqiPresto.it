document.addEventListener("scroll", changeNavbar);

function changeNavbar(event) {
    const navbar = document.querySelector("#mainNavbar");
    if (window.scrollY > 100) {
        navbar.classList.add("thin");
        navbar.classList.add("bg-white")
    }else{
        navbar.classList.remove("thin");
        navbar.classList.remove("bg-white");

    }
}