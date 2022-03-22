const navToggle = document.getElementById("js-nav-toggle"),
  navMenu = document.getElementById("js-sidebar");

navToggle.addEventListener("click", (event) => {
  navToggle.classList.toggle("active"),
    navMenu.classList.toggle("active");
});
