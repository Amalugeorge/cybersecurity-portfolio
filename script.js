// Mobile navigation, theme toggle and current year
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const yearElement = document.getElementById("year");

// Keep the footer year up to date.
yearElement.textContent = new Date().getFullYear();

// Open and close the mobile navigation menu.
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the mobile menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Switch between dark and light themes.
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const lightModeEnabled = document.body.classList.contains("light-theme");
  themeToggle.textContent = lightModeEnabled ? "☀" : "☾";
  themeToggle.setAttribute(
    "aria-label",
    lightModeEnabled ? "Switch to dark theme" : "Switch to light theme"
  );
});
