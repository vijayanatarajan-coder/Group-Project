import "../styles/projects.css";
import Etchasketch from "../assets/sketch1.png";
import Ticktaktoe from "../assets/tictak.png";
import Admindashboard from "../assets/dashboard1.png";
import wheather from "../assets/Weather.png";

export function loadProjectContent() {
  const projects = [
    {
      title: "Tic-Tac-Toe",
      languages: ["HTML", "CSS", "JavaScript"],
      author: "Swathismenon",
      tags: ["Web Development", "Frontend", "Responsive Design"],
      links: {
        liveDemo: "https://swathismenon.github.io/Tic-Tac-Toe/",
        sourceCode: "https://github.com/swathismenon/Tic-Tac-Toe",
      },
      image: Ticktaktoe,
      featured: true,
    },
    {
      title: "Admin-dashboard",
      languages: ["HTML", "CSS", "JavaScript"],
      author: "Tehreem Fatima",
      tags: ["Full Stack", "Finance", "Personal Project"],
      links: {
        liveDemo: "https://tehfat.github.io/admin-dashboard/",
        sourceCode: "https://github.com/TehFat/admin-dashboard",
      },
      image: Admindashboard,
      featured: false,
    },
    {
      title: "Etch-a-sketch",
      languages: ["HTML", "CSS", "JavaScript"],
      author: "Vijaya Natarajan",
      tags: ["Web Development", "Frontend", "Responsive Design"],
      links: {
        liveDemo: "https://vijayanatarajan-coder.github.io/etch-a-sketch/",
        sourceCode: "https://github.com/vijayanatarajan-coder/etch-a-sketch",
      },
      image: Etchasketch,
      featured: true,
    },
    {
      title: "Wheather-app",
      languages: ["HTML", "CSS", "JavaScript"],
      author: "Tahirmehmood",
      tags: ["Web Development", "Frontend", "Responsive Design"],
      links: {
        liveDemo: "https://ljoskold.github.io/weather-app/",
        sourceCode: "https://github.com/Tahirmehmood22/weather-app",
      },
      image: wheather,
      featured: true,
    },
  ];

  // Create the container for projects
  const container = document.createElement("div");
  container.className = "projects-container";
  document.body.appendChild(container);

  // Loop through each project and create its elements
  projects.forEach((project) => {
    const projectflex = document.createElement("div");
    projectflex.className = "project-flex";
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    const projectDetails = document.createElement("div");
    projectDetails.className = "project-Details";

    const projectTitle = document.createElement("h3");
    projectTitle.className = "project-title";
    projectTitle.textContent = project.title;

    const projectImage = document.createElement("img");
    projectImage.src = project.image;
    projectImage.alt = `${project.title} screenshot`;
    projectImage.className = "project-image";

    const projectAuthor = document.createElement("p");
    projectAuthor.className = "project-author";
    projectAuthor.textContent = `By ${project.author}`;

    const projectLanguages = document.createElement("p");
    projectLanguages.className = "project-languages";
    projectLanguages.textContent = `Languages: ${project.languages.join(", ")}`;

    const projectLinks = document.createElement("div");
    projectLinks.className = "project-links";

    const liveDemoLink = document.createElement("a");
    liveDemoLink.href = project.links.liveDemo;
    liveDemoLink.target = "_blank";
    liveDemoLink.textContent = "Live Demo";

    const sourceCodeLink = document.createElement("a");
    sourceCodeLink.href = project.links.sourceCode;
    sourceCodeLink.target = "_blank";
    sourceCodeLink.textContent = "Source Code";

    // Append links
    projectLinks.appendChild(liveDemoLink);
    projectLinks.appendChild(document.createTextNode(" | "));
    projectLinks.appendChild(sourceCodeLink);

    // Append all elements to the card
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectImage);

    projectDetails.appendChild(projectAuthor);
    projectDetails.appendChild(projectLanguages);
    projectDetails.appendChild(projectLinks);

    // Append card to container
    projectflex.appendChild(projectCard);
    projectflex.appendChild(projectDetails);
    container.appendChild(projectflex);
  });
}
