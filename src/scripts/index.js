// index.js
import { createHeader } from './header.js';

// Load modules
document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header");
    headerElement.appendChild(createHeader());
  });

