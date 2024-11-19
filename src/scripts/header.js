// header.js
export function loadHeader() {
  const header = document.getElementById('header');
  header.innerHTML = `
      <nav>
        <h1>My Portfolio</h1>
        <ul>
             <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
               <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    `;
}
