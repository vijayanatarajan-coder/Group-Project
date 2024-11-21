import "../styles/footer.css";

export function loadFooter() {
  const footer = document.createElement("footer");

  const footerContainer = document.createElement("div");
  footerContainer.className = "footer-container";

  const companyInfo = document.createElement("div");
  companyInfo.className = "footer-section";

  const companyTitle = document.createElement("h2");
  companyTitle.textContent = "Software Solutions";

  const companyDescription = document.createElement("p");
  companyDescription.textContent = "Building Tomorrow's Solution Today";

  companyInfo.appendChild(companyTitle);
  companyInfo.appendChild(companyDescription);

  function createSection(title, items) {
    const section = document.createElement("div");
    section.className = "footer-section";

    const sectionTitle = document.createElement("h3");
    sectionTitle.textContent = title;

    const list = document.createElement("ul");

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      list.appendChild(listItem);
    });

    section.appendChild(sectionTitle);
    section.appendChild(list);

    return section;
  }

  const downloadSection = createSection("Download", [
    "Templates",
    "Source Code",
    "Tools",
    "Brochures",
  ]);
  const productsSection = createSection("Products", [
    "Web",
    "App",
    "Software",
    "Ecommerce",
  ]);
  const servicesSection = createSection("Services", ["Design", "Development"]);
  const companySection = createSection("Company", [
    "Terms & conditions",
    "Privacy Policy",
  ]);

  const getInTouch = document.createElement("div");
  getInTouch.className = "footer-section get-in-touch";

  const getInTouchTitle = document.createElement("h3");
  getInTouchTitle.textContent = "Get in touch";

  const socialIcons = document.createElement("div");
  socialIcons.className = "social-icons";

  ["Facebook", "Twitter", "LinkedIn"].forEach((social) => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = social;
    socialIcons.appendChild(link);
  });

  const subscribeForm = document.createElement("form");
  subscribeForm.className = "subscribe-form";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Enter email address";
  subscribeForm.appendChild(emailInput);

  const subscribeButton = document.createElement("button");
  subscribeButton.type = "submit";
  subscribeButton.textContent = "Subscribe";
  subscribeForm.appendChild(subscribeButton);

  getInTouch.appendChild(getInTouchTitle);
  getInTouch.appendChild(socialIcons);
  getInTouch.appendChild(subscribeForm);

  const footerBottom = document.createElement("div");
  footerBottom.className = "footer-bottom";

  const year = new Date().getFullYear();
  footerBottom.textContent = `© ${year} VSFT Studios. All rights reserved.`;

  footerContainer.appendChild(companyInfo);
  footerContainer.appendChild(downloadSection);
  footerContainer.appendChild(productsSection);
  footerContainer.appendChild(servicesSection);
  footerContainer.appendChild(companySection);
  footerContainer.appendChild(getInTouch);

  footer.appendChild(footerContainer);
  footer.appendChild(footerBottom);

  document.body.appendChild(footer);
}
