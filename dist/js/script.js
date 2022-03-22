// Need to add class to body to prevent scrolling while the menu is open

const doc = document,
  body = doc.body,
  navToggle = document.getElementById("js-nav-toggle"),
  navMenu = document.getElementById("js-sidebar");

navToggle.addEventListener("click", (event) => {
  navToggle.classList.toggle("active"),
    navMenu.classList.toggle("active"),
    navMenu.classList.add("js-mobile"),
    body.classList.toggle("js-freeze");


  function removeMobileClass() {
    navMenu.classList.remove("js-mobile");
    window.removeEventListener("resize", removeMobileClass);
  }

  window.addEventListener("resize", removeMobileClass);
});
