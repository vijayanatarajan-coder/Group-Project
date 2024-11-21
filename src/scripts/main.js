import '../styles/main.css';

import myPic from '../images/mypic.jpg';
import member2Pic from '../images/swati pic.jpg';
import member3Pic from '../images/viji pic.jpg';
import member4Pic from '../images/tahir pic.jpg';

const groupMembers = [
    {
        name: "Tehreem Fatima",
        image: myPic,
        description: "Passionate about transforming creative ideas into interactive web experiences. Committed to learning and growing in the dynamic world of frontend development, with a vision to create intuitive and engaging digital solutions.",
        githubUrl: "https://github.com/TehFat"
    },
    {
        name: "Swathi S Menon",
        image: member2Pic,
        description: "A former risk and fraud investigator with a passion for technology, now thriving in the IT field as a tech enthusiast, leveraging analytical skills and problem-solving expertise to drive innovation and ensure secure systems.",
         githubUrl: "https://github.com/swatkat"
    },
    {
        name: "Vijaya Natarajan",
        image: member3Pic,
        description: "Aspiring to bridge the gap between design and functionality through frontend development. Excited to learn, experiment, and contribute to creating user-friendly and visually appealing web applications.",
         githubUrl: "https://github.com/vijayanatarajan-coder"
    },
    {
        name: "Tahir Mehmood",
        image: member4Pic,
        description: "Dedicated to mastering the art of frontend development and turning complex ideas into elegant, responsive web interfaces. Passionate about continuous learning and pushing the boundaries of web technologies.",
         githubUrl: "https://github.com/tahirmehmood22"
    }
];

function createMemberSection(member, index) {
    const section = document.createElement('div');
    section.className = `content-section ${index % 2 !== 0 ? 'reverse' : ''}`;
    
    section.innerHTML = `
        <div class="image-container">
            <img src="${member.image}" class="person-img" alt="${member.name}" />
        </div>
        <div class="text-container">
            <h1 class="full-name">${member.name}</h1>
            <div class="about-me">
                <h2>About me</h2>
                <div>${member.description}</div>
                <div class="person-socials">
                <a href="${member.githubUrl}" target="_blank" rel="noopener noreferrer">
                    <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;
    
    return section;
}

function renderGroupMembers() {
    const app = document.getElementById('main');
    if (app) {
        app.innerHTML = ''; 
        groupMembers.forEach((member, index) => {
            app.appendChild(createMemberSection(member, index));
        });
    }
}

export function loadMainContent() {
    renderGroupMembers();
}
