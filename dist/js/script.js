"use strict";

// Need to add class to body to prevent scrolling while the menu is open
var doc = document,
  body = doc.body,
  navToggle = document.getElementById("js-nav-toggle"),
  navMenu = document.getElementById("js-sidebar");

var toggleBodyFreeze = function toggleBodyFreeze() {
  var style = body.style,
    classList = body.classList;

  if (classList.contains("js-freeze")) {
    // we use the location we captured and turn it into a positive integar
    // so that it can be used in the scrollTo() function
    var scrollOffset = parseInt(style.top) * -1;
    classList.remove("js-freeze");
    window.scrollTo(0, scrollOffset);
    style.top = "";
  } else {
    // we capture the user's current location on page
    style.top = "-".concat(window.pageYOffset, "px");
    classList.add("js-freeze");
  }
};

navToggle.addEventListener("click", function (event) {
  navToggle.classList.toggle("active"),
    navMenu.classList.toggle("active"),
    navMenu.classList.add("js-mobile"),
    toggleBodyFreeze();

  function removeMobileClass() {
    navMenu.classList.remove("js-mobile");
    window.removeEventListener("resize", removeMobileClass);
  }

  window.addEventListener("resize", removeMobileClass);
});
