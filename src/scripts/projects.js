import "../styles/projects.css";
import Etchasketch from "../assets/sketch1.png";
import Ticktaktoe from "../assets/tictak.png";
import Admindashboard from "../assets/dashboard1.png";
import wheather from "../assets/Weather.png";

export function loadProjectContent() {
  // Define the container for projects
  const container = document.createElement("div");
  container.className = "projects-container";
  document.body.appendChild(container);

  // Project 1: Tic-Tac-Toe
  const projectflex1 = document.createElement("div");
  projectflex1.className = "project-flex";
  const projectCard1 = document.createElement("div");
  projectCard1.className = "project-card";
  const projectDetails1 = document.createElement("div");
  projectDetails1.className = "project-Details";

  const projectTitle1 = document.createElement("h3");
  projectTitle1.className = "project-title";
  projectTitle1.textContent = "Tic-Tac-Toe";

  const projectImage1 = document.createElement("img");
  projectImage1.src = Ticktaktoe;
  projectImage1.alt = "Tic-Tac-Toe screenshot";
  projectImage1.className = "project-image";

  const projectAuthor1 = document.createElement("p");
  projectAuthor1.className = "project-author";
  projectAuthor1.textContent = "By Swathismenon";

  const projectLanguages1 = document.createElement("p");
  projectLanguages1.className = "project-languages";
  projectLanguages1.textContent = "Languages: HTML, CSS, JavaScript";

  const projectLinks1 = document.createElement("div");
  projectLinks1.className = "project-links";
  const liveDemoLink1 = document.createElement("a");
  liveDemoLink1.href = "https://swathismenon.github.io/Tic-Tac-Toe/";
  liveDemoLink1.target = "_blank";
  liveDemoLink1.textContent = "Live Demo";

  const sourceCodeLink1 = document.createElement("a");
  sourceCodeLink1.href = "https://github.com/swathismenon/Tic-Tac-Toe";
  sourceCodeLink1.target = "_blank";
  sourceCodeLink1.textContent = "Source Code";

  projectLinks1.appendChild(liveDemoLink1);
  projectLinks1.appendChild(document.createTextNode(" | "));
  projectLinks1.appendChild(sourceCodeLink1);

  projectCard1.appendChild(projectTitle1);
  projectCard1.appendChild(projectImage1);
  projectDetails1.appendChild(projectAuthor1);
  projectDetails1.appendChild(projectLanguages1);
  projectDetails1.appendChild(projectLinks1);
  projectflex1.appendChild(projectCard1);
  projectflex1.appendChild(projectDetails1);
  container.appendChild(projectflex1);

  // Project 2: Admin-dashboard
  const projectflex2 = document.createElement("div");
  projectflex2.className = "project-flex";
  const projectCard2 = document.createElement("div");
  projectCard2.className = "project-card";
  const projectDetails2 = document.createElement("div");
  projectDetails2.className = "project-Details";

  const projectTitle2 = document.createElement("h3");
  projectTitle2.className = "project-title";
  projectTitle2.textContent = "Admin-dashboard";

  const projectImage2 = document.createElement("img");
  projectImage2.src = Admindashboard;
  projectImage2.alt = "Admin Dashboard screenshot";
  projectImage2.className = "project-image";

  const projectAuthor2 = document.createElement("p");
  projectAuthor2.className = "project-author";
  projectAuthor2.textContent = "By Tehreem Fatima";

  const projectLanguages2 = document.createElement("p");
  projectLanguages2.className = "project-languages";
  projectLanguages2.textContent = "Languages: HTML, CSS, JavaScript";

  const projectLinks2 = document.createElement("div");
  projectLinks2.className = "project-links";
  const liveDemoLink2 = document.createElement("a");
  liveDemoLink2.href = "https://tehfat.github.io/admin-dashboard/";
  liveDemoLink2.target = "_blank";
  liveDemoLink2.textContent = "Live Demo";

  const sourceCodeLink2 = document.createElement("a");
  sourceCodeLink2.href = "https://github.com/TehFat/admin-dashboard";
  sourceCodeLink2.target = "_blank";
  sourceCodeLink2.textContent = "Source Code";

  projectLinks2.appendChild(liveDemoLink2);
  projectLinks2.appendChild(document.createTextNode(" | "));
  projectLinks2.appendChild(sourceCodeLink2);

  projectCard2.appendChild(projectTitle2);
  projectCard2.appendChild(projectImage2);
  projectDetails2.appendChild(projectAuthor2);
  projectDetails2.appendChild(projectLanguages2);
  projectDetails2.appendChild(projectLinks2);
  projectflex2.appendChild(projectCard2);
  projectflex2.appendChild(projectDetails2);
  container.appendChild(projectflex2);

  // Project 3: Etch-a-sketch
  const projectflex3 = document.createElement("div");
  projectflex3.className = "project-flex";
  const projectCard3 = document.createElement("div");
  projectCard3.className = "project-card";
  const projectDetails3 = document.createElement("div");
  projectDetails3.className = "project-Details";

  const projectTitle3 = document.createElement("h3");
  projectTitle3.className = "project-title";
  projectTitle3.textContent = "Etch-a-sketch";

  const projectImage3 = document.createElement("img");
  projectImage3.src = Etchasketch;
  projectImage3.alt = "Etch-a-Sketch screenshot";
  projectImage3.className = "project-image";

  const projectAuthor3 = document.createElement("p");
  projectAuthor3.className = "project-author";
  projectAuthor3.textContent = "By Vijaya Natarajan";

  const projectLanguages3 = document.createElement("p");
  projectLanguages3.className = "project-languages";
  projectLanguages3.textContent = "Languages: HTML, CSS, JavaScript";

  const projectLinks3 = document.createElement("div");
  projectLinks3.className = "project-links";
  const liveDemoLink3 = document.createElement("a");
  liveDemoLink3.href = "https://vijayanatarajan-coder.github.io/etch-a-sketch/";
  liveDemoLink3.target = "_blank";
  liveDemoLink3.textContent = "Live Demo";

  const sourceCodeLink3 = document.createElement("a");
  sourceCodeLink3.href =
    "https://github.com/vijayanatarajan-coder/etch-a-sketch";
  sourceCodeLink3.target = "_blank";
  sourceCodeLink3.textContent = "Source Code";

  projectLinks3.appendChild(liveDemoLink3);
  projectLinks3.appendChild(document.createTextNode(" | "));
  projectLinks3.appendChild(sourceCodeLink3);

  projectCard3.appendChild(projectTitle3);
  projectCard3.appendChild(projectImage3);
  projectDetails3.appendChild(projectAuthor3);
  projectDetails3.appendChild(projectLanguages3);
  projectDetails3.appendChild(projectLinks3);
  projectflex3.appendChild(projectCard3);
  projectflex3.appendChild(projectDetails3);
  container.appendChild(projectflex3);

  // Project 4: Weather-app
  const projectflex4 = document.createElement("div");
  projectflex4.className = "project-flex";
  const projectCard4 = document.createElement("div");
  projectCard4.className = "project-card";
  const projectDetails4 = document.createElement("div");
  projectDetails4.className = "project-Details";

  const projectTitle4 = document.createElement("h3");
  projectTitle4.className = "project-title";
  projectTitle4.textContent = "Weather-app";

  const projectImage4 = document.createElement("img");
  projectImage4.src = wheather;
  projectImage4.alt = "Weather App screenshot";
  projectImage4.className = "project-image";

  const projectAuthor4 = document.createElement("p");
  projectAuthor4.className = "project-author";
  projectAuthor4.textContent = "By Tahirmehmood";

  const projectLanguages4 = document.createElement("p");
  projectLanguages4.className = "project-languages";
  projectLanguages4.textContent = "Languages: HTML, CSS, JavaScript";

  const projectLinks4 = document.createElement("div");
  projectLinks4.className = "project-links";
  const liveDemoLink4 = document.createElement("a");
  liveDemoLink4.href = "https://ljoskold.github.io/weather-app/";
  liveDemoLink4.target = "_blank";
  liveDemoLink4.textContent = "Live Demo";

  const sourceCodeLink4 = document.createElement("a");
  sourceCodeLink4.href = "https://github.com/Tahirmehmood22/weather-app";
  sourceCodeLink4.target = "_blank";
  sourceCodeLink4.textContent = "Source Code";

  projectLinks4.appendChild(liveDemoLink4);
  projectLinks4.appendChild(document.createTextNode(" | "));
  projectLinks4.appendChild(sourceCodeLink4);

  projectCard4.appendChild(projectTitle4);
  projectCard4.appendChild(projectImage4);
  projectDetails4.appendChild(projectAuthor4);
  projectDetails4.appendChild(projectLanguages4);
  projectDetails4.appendChild(projectLinks4);
  projectflex4.appendChild(projectCard4);
  projectflex4.appendChild(projectDetails4);
  container.appendChild(projectflex4);

  // Return the container element
  return container;
}
