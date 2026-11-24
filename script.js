
// Get the navigation menu elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close the menu when a navigation link is clicked
const navigationLinks = navLinks.querySelectorAll("a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Automatically update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();
