
import { createHeader } from './header.js';
import { loadFooter } from './footer.js';
import {loadProjectContent} from './projects.js';

document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header");
    headerElement.appendChild(createHeader());
  });
loadFooter();
loadProjectContent();



