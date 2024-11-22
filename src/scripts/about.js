import "../styles/about.css";

export function loadAbout() {
  // Create a container for the section
  const section = document.createElement("div");
  section.className = "email-revenue-section";

  // Create the heading
  const heading = document.createElement("h1");
  heading.textContent = "Building Tomorrows Solution Today";
  section.appendChild(heading);

  // Create the paragraph
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "We focus on creating the advanced solutions of the future and making them available to you today.";
  section.appendChild(paragraph);

  // Create the button
  const button = document.createElement("button");
  button.className = "start-free-trial-btn";
  button.textContent = "About us";
  button.addEventListener("click", () => {
    alert("Free trial started!");
  });
  section.appendChild(button);

  // Append the section to the body
  //document.body.appendChild(section);
  return section;
  // Add the CSS styles dynamically
  const style = document.createElement("style");
  style.textContent = `
  .email-revenue-section {
    text-align: center;
    margin: 50px auto;
    font-family: 'Georgia', serif;
    color: #333;
    max-width: 600px;
  }

  .email-revenue-section h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .email-revenue-section p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 30px;
  }

  .start-free-trial-btn {
    background-color: #ffd700; /* Bright yellow */
    color: #000;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .start-free-trial-btn:hover {
    background-color: #ffc107;
  }
`;
  document.head.appendChild(style);
}
