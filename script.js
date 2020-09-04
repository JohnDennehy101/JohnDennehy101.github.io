let navBarIcon = document.getElementById("nav-icon");
let toggleMenu = false;
let navigationBar = document.querySelector(".nav-links");

navBarIcon.addEventListener("click", () => {
  if (!toggleMenu) {
    navigationBar.classList.remove("nav-links");
    navigationBar.classList.add("nav-links-mobile");
    toggleMenu = true;
  } else {
    navigationBar.classList.remove("nav-links-mobile");
    navigationBar.classList.add("nav-links");
    toggleMenu = false;
  }
});
