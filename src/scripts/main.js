// main.js
export function loadMainContent() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A description of Project 1.',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'A description of Project 2.',
      link: 'https://example.com/project2',
    },
    {
      title: 'Project 3',
      description: 'A description of Project 3.',
      link: 'https://example.com/project3',
    },
    {
      title: 'Project 4',
      description: 'A description of Project 4.',
      link: 'https://example.com/project4',
    },
  ];

  const main = document.getElementById('main');
  main.innerHTML = `
      <section id="projects">
        <h2>My Projects</h2>
        <div class="projects-container">
          ${projects
            .map(
              (project) => `
            <div class="project">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}" target="_blank">View Project</a>
            </div>
          `
            )
            .join('')}
        </div>
      </section>
    `;
}
