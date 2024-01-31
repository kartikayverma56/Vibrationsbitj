
// home page 
const button = document.querySelector(".button");
const mobileMenu = document.querySelector(".mobile-menu");
var elements = document.querySelectorAll(".mobile_nav_elements");
let isMenuOpen = false;  // Flag to track menu state

function toggleMenu() {
  if (isMenuOpen) {
    // If menu is open, hide it with a delay
    mobileMenu.classList.remove("show");
    setTimeout(() => {
      mobileMenu.style.opacity = "0";
    }, 250); // 300 milliseconds (0.3 seconds) delay
    isMenuOpen = false;
  } else {
    // If menu is closed, toggle the "show" class for animation
    mobileMenu.classList.add("show");
    mobileMenu.style.opacity = "1"; // Reset opacity if previously hidden
    isMenuOpen = true;
  }
}

button.addEventListener("click", toggleMenu);
elements.forEach(element => {
  element.addEventListener("click", toggleMenu);
});
 