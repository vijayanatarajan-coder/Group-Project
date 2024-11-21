import { createHeader } from './header.js';
import { loadAbout } from './about.js';
import { loadProjectContent } from './projects.js';
import { loadFooter } from './footer.js';

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header");
    headerElement.appendChild(createHeader());});
loadAbout()
loadProjectContent()
loadFooter();
