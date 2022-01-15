const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
var navBtn = document.getElementById("nav-btn");
var navbar = document.getElementById("navbar");
var navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
