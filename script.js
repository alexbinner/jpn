// 1. Project data: edit this array to add or change projects.
const projects = [
  {
    category: "PROJECT 01 / BUILDING",
    title: "My First Minecraft House",
    titleJa: "はじめてのマインクラフトハウス",
    image: "images/project-01-house.svg",
    alt: "Block-style house with a garden and mountains",
    description: "Build a home, explore materials, and develop creative thinking.",
    descriptionJa: "家を建てながら、素材について学び、創造力を育てます。",
    skills: ["Building", "Creativity", "Design"]
  },
  {
    category: "PROJECT 02 / REDSTONE",
    title: "Redstone Door Challenge",
    titleJa: "レッドストーン自動ドアに挑戦",
    image: "images/project-02-redstone.svg",
    alt: "Redstone circuit and an automatic block door",
    description: "Use redstone circuits to make a door open automatically.",
    descriptionJa: "レッドストーン回路を使って、自動で開くドアを作ります。",
    skills: ["Redstone", "Logic", "Engineering"]
  },
  {
    category: "PROJECT 03 / CODING",
    title: "Code Your Agent",
    titleJa: "エージェントをプログラミング",
    image: "images/project-03-coding.svg",
    alt: "A blocky robot agent building a path in a Minecraft world",
    description: "Write simple instructions and let an agent build a path for you.",
    descriptionJa: "簡単な命令を書いて、エージェントに道を作ってもらいます。",
    skills: ["Coding", "Algorithms", "Automation"]
  },
  {
    category: "PROJECT 04 / GAME DESIGN",
    title: "The Escape Maze",
    titleJa: "脱出迷路を作ろう",
    image: "images/project-04-maze.svg",
    alt: "A colorful block maze viewed from above",
    description: "Design a maze, add challenges, and test it with your friends.",
    descriptionJa: "迷路や仕掛けを作り、友だちに遊んでもらって改善します。",
    skills: ["Game Design", "Testing", "Problem Solving"]
  },
  {
    category: "PROJECT 05 / ENVIRONMENT",
    title: "Build a Greener World",
    titleJa: "地球にやさしい街づくり",
    image: "images/project-05-greenworld.svg",
    alt: "A green block city with trees, water, and solar panels",
    description: "Create a sustainable town with green spaces and clean energy.",
    descriptionJa: "緑やクリーンエネルギーを取り入れた、持続可能な街を作ります。",
    skills: ["Environment", "Planning", "Creativity"]
  }
];

// 2. Find the page elements once so we can update them.
const intro = document.querySelector("#intro");
const gallery = document.querySelector("#gallery");
const startButton = document.querySelector("#startButton");
const backButton = document.querySelector("#backButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const projectCategory = document.querySelector("#projectCategory");
const projectTitle = document.querySelector("#projectTitle");
const projectTitleJa = document.querySelector("#projectTitleJa");
const projectImage = document.querySelector("#projectImage");
const projectDescription = document.querySelector("#projectDescription");
const projectDescriptionJa = document.querySelector("#projectDescriptionJa");
const projectSkills = document.querySelector("#projectSkills");
const currentNumber = document.querySelector("#currentNumber");
const totalNumber = document.querySelector("#totalNumber");
const progressFill = document.querySelector("#progressFill");
const dots = document.querySelector("#dots");

// 3. currentIndex remembers which project is displayed (arrays start at 0).
let currentIndex = 0;
totalNumber.textContent = String(projects.length).padStart(2, "0");

// 4. Render the selected project into the page.
function showProject(index) {
  currentIndex = index;
  const project = projects[currentIndex];

  projectCategory.textContent = project.category;
  projectTitle.textContent = project.title;
  projectTitleJa.textContent = project.titleJa;
  projectImage.src = project.image;
  projectImage.alt = project.alt;
  projectDescription.textContent = project.description;
  projectDescriptionJa.textContent = project.descriptionJa;
  currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");

  // Rebuild the skill tags for the current project.
  projectSkills.replaceChildren();
  for (const skill of project.skills) {
    const tag = document.createElement("span");
    tag.className = "skill";
    tag.textContent = skill;
    projectSkills.appendChild(tag);
  }

  // Update the progress bar and navigation buttons.
  progressFill.style.width = `${((currentIndex + 1) / projects.length) * 100}%`;
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === projects.length - 1;

  // Highlight the dot for the current project.
  [...dots.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === currentIndex);
    dot.setAttribute("aria-current", dotIndex === currentIndex ? "true" : "false");
  });
}

// 5. Make one clickable dot for every project.
projects.forEach((project, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Show project ${index + 1}: ${project.title}`);
  dot.addEventListener("click", () => showProject(index));
  dots.appendChild(dot);
});

// 6. Button events.
startButton.addEventListener("click", () => {
  intro.classList.add("hidden");
  gallery.classList.remove("hidden");
  showProject(0);
});
backButton.addEventListener("click", () => {
  gallery.classList.add("hidden");
  intro.classList.remove("hidden");
});
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) showProject(currentIndex - 1);
});
nextButton.addEventListener("click", () => {
  if (currentIndex < projects.length - 1) showProject(currentIndex + 1);
});

// 7. Keyboard controls: left/right arrows move between projects.
// Ignore keys when someone is using a text field or modifier key.
document.addEventListener("keydown", (event) => {
  if (gallery.classList.contains("hidden")) return;
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.key === "ArrowLeft" && currentIndex > 0) {
    showProject(currentIndex - 1);
  } else if (event.key === "ArrowRight" && currentIndex < projects.length - 1) {
    showProject(currentIndex + 1);
  }
});

// Prepare the first project in the background.
showProject(0);
