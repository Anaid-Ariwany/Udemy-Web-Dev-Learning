const projects = [
    {
        name: "Marathon Form",
        description: "A basic HTML form for signing up for a marathon.",
        image: "assets/marathonWebsite.webp",
        live: "https://anaid-ariwany.github.io/Udemy-Web-Dev-Learning/HTML/Projects/Marathon%20Form/",
        github: "https://github.com/Anaid-Ariwany/Udemy-Web-Dev-Learning/tree/main/HTML/Projects/Marathon%20Form"
    },
    {
        name: "Photo Blog",
        description: "A simple photo blog layout implemented with CSS Grid.",
        image: "assets/photoBlog.webp",
        live: "",
        github: "https://github.com/Anaid-Ariwany/Udemy-Web-Dev-Learning/tree/main/CSS/Projects/Photo%20Blog"
    },
    {
        name: "Pricing Panel",
        description: "A responsive pricing panel that displays different pricing options. Implemented with HTML and CSS.",
        image: "assets/pricingPanel.webp",
        live: "https://anaid-ariwany.github.io/Udemy-Web-Dev-Learning/CSS/Projects/Pricing%20Panel/",
        github: "https://github.com/Anaid-Ariwany/Udemy-Web-Dev-Learning/tree/main/CSS/Projects/Pricing%20Panel"
    },
    {
        name: "Museum of Candy",
        description: "A responsive website for a fictional candy museum. Implemented with HTML and CSS.",
        image: "assets/museum.webp",
        live: "https://anaid-ariwany.github.io/Udemy-Web-Dev-Learning/CSS/Projects/Museum%20of%20Candy/",
        github: "https://github.com/Anaid-Ariwany/Udemy-Web-Dev-Learning/tree/main/CSS/Projects/Museum%20of%20Candy"
    },
    {
        name: "To-Do List",
        description: "A simple to-do list application that allows users to add, delete, and mark tasks as completed. Implemented with JavaScript.",
        image: "assets/toDo.webp",
        live: "https://anaid-ariwany.github.io/Udemy-Web-Dev-Learning/JavaScript/Projects/ToDo%20List/",
        github: "https://github.com/Anaid-Ariwany/Udemy-Web-Dev-Learning/tree/main/JavaScript/Projects/ToDo%20List"
    }
];


const projectContainer = document.querySelector(".projectContainer");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");
    projectCard.innerHTML = `
        <div class="row g-1">
            <div class="col-xxl-12 imagediv">
                <img src="${project.image}" class="card-img-top" alt="${project.name}">
            </div>
            <div class="col-xxl-12">
                <div class="card-body">
                    <h4 class="card-title poppins-semibold">${project.name}</h4>
                    <p class="card-text">${project.description}</p>
                    <div class="projectButtons">
                        <button onclick="window.open('${project.live}', '_blank', 'noopener,noreferrer')"
                            class="lightButton">Live Demo</button>
                        <button onclick="window.open('${project.github}', '_blank', 'noopener,noreferrer')"
                            class="darkButton">GitHub Repo</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    projectContainer.appendChild(projectCard);
});

