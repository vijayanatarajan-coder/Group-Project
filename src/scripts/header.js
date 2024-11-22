import "../styles/header.css";
import image from "./images/js pic.jpg";

export function createHeader() {
  const header = document.createElement("div");
  header.className = "header-container";

  // Logo part
  const logo = document.createElement("div");
  logo.className = "logo";

  const logoImg = document.createElement("img");
  logoImg.src = image;
  logoImg.alt = "Logo";
  logoImg.className = "logo-img";

  const logoText = document.createElement("span");
  logoText.textContent = "VSFT Studios";
  logoText.className = "logo-text";

  logo.appendChild(logoImg);
  logo.appendChild(logoText);

  // Create the navigation menu
  const navMenu = document.createElement("nav");
  navMenu.className = "nav-menu";

  const ul = document.createElement("ul");

  // Define menu items with corresponding section IDs
  const menuItems = [
    { name: "Home", sectionId: "main" },
    { name: "About", sectionId: "about" },
    { name: "Projects", sectionId: "project" },
    { name: "Contact", sectionId: "footer" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${item.sectionId}`; // Correct href with hash for internal links
    a.textContent = item.name;

    // Add event listener for smooth scrolling
    a.addEventListener("click", (e) => navigateToSection(e, item.sectionId));
    li.appendChild(a);
    ul.appendChild(li);
  });

  navMenu.appendChild(ul);

  // Create a dropdown button for smaller screens
  const dropdownButton = document.createElement("button");
  dropdownButton.className = "dropdown-button";
  dropdownButton.textContent = "☰";

  dropdownButton.addEventListener("click", () => {
    ul.classList.toggle("show-menu");
  });

  // Append everything to the header
  header.appendChild(logo);
  header.appendChild(dropdownButton);
  header.appendChild(navMenu);

  return header;
}

// Smooth scrolling function
function navigateToSection(e, sectionId) {
  e.preventDefault(); // Prevent default link behavior

  // Scroll to the target section smoothly
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
  }
}
