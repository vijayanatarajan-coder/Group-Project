import '../styles/header.css';
import image from './images/js pic.jpg'; 

export function createHeader() {
  const header = document.createElement("div");
  header.className = "header-container";

 
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
    a.addEventListener("click", (e) => navigateToSection(e, item.sectionId));
    li.appendChild(a);
    ul.appendChild(li);
  });

  navMenu.appendChild(ul);

  
  const dropdownButton = document.createElement("button");
  dropdownButton.className = "dropdown-button";
  dropdownButton.textContent = "☰"; 

  
  dropdownButton.addEventListener("click", () => {
    ul.classList.toggle("show-menu"); 
  });

 
  header.appendChild(logo);
  header.appendChild(dropdownButton);
  header.appendChild(navMenu);

  return header;
}


function navigateToSection(e, sectionId) {
  e.preventDefault(); 

  const pageMap = {
    home: "home.html",
    about: "about.html",
    contact: "contact.html",
    projects: "projects.html",
  };

  const targetPage = pageMap[sectionId];
  if (targetPage) {
    window.location.href = targetPage;
  }
}
