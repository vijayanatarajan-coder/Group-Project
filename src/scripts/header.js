import '../styles/header.css';
import image from './images/coding file.png'; // Adjust the path if needed

export function createHeader() {
  const header = document.createElement("div");
  header.className = "header-container";

  // Logo Section
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

  // Navigation Menu
  const navMenu = document.createElement("nav");
  navMenu.className = "nav-menu";

  const ul = document.createElement("ul");

  const menuItems = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Contact", sectionId: "contact" },
    { name: "Our Projects", sectionId: "projects" },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${item.sectionId}`;
    a.textContent = item.name;
    a.addEventListener("click", (e) => navigateToSection(e, item.sectionId)); // Add click event listener for navigation
    li.appendChild(a);
    ul.appendChild(li);
  });

  navMenu.appendChild(ul);

  // Append the logo and navigation menu to the header
  header.appendChild(logo);
  header.appendChild(navMenu);

  return header;
}

// Updated function to handle navigation and redirect to a new page
function navigateToSection(e, sectionId) {
  e.preventDefault(); // Prevent default anchor link behavior

  // You can map the sectionId to a URL of the page you want to navigate to
  const pageMap = {
    home: 'home.html',  // Example: 'home.html' is the target page for the "Home" link
    about: 'about.html',
    contact: 'contact.html',
    projects: 'projects.html',
  };

  const targetPage = pageMap[sectionId];  // Find the URL for the clicked section
  if (targetPage) {
    // Redirect to the corresponding page
    window.location.href = targetPage;
  }
}
