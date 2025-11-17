// AÑO FOOTER
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// NAV MÓVIL
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.getElementById("main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    mainNav.classList.toggle("is-open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// SLIDER FEEDBACKIO
const feedbackData = [
  {
    // 1 — OBRA DE TEATRO SALA ROJA
    name: "Celia R. Clavellino",
    role: "Directora teatral",
    text:
      "“En ‘Sala Roja’, L. Varela trabajó con una entrega absoluta. Su presencia en escena mezcla precisión, vulnerabilidad y una energía muy viva. Es una intérprete que transforma el espacio y contagia al elenco.”",
    image: "img/feedback-1.jpg",
    socialLabel: "Instagram:",
    socialHandle: "@celia_rcine",
    socialUrl: "https://instagram.com/celia_rcine"
  },

  {
    // 2 — PELÍCULA INDEPENDIENTE (TAKE-13 NOMINADA EN CANNES)
    name: "Valeria Montes",
    role: "Directora de cine",
    text:
      "“L. Varela posee una sensibilidad cinematográfica única. En ‘Los pequeños amores’ llevó el personaje a un nivel profundo y auténtico. Su capacidad para habitar los silencios y sostener la cámara es extraordinaria.”",
    image: "img/feedback-2.jpg",
    socialLabel: "Instagram:",
    socialHandle: "@valeriamontes.film",
    socialUrl: "https://instagram.com/valeriamontes.film"
  },

  {
    // 3 — FASHION FILM ELECTRIC BLUE
    name: "Teatro Sala Nova",
    role: "Dirección artística",
    text:
      "“En ‘Electric Blue’, su presencia fue clave para construir el clima visual del film. Entiende la cámara, el color y la luz con una intuición muy fina, aportando elegancia y mucha intención.”",
    image: "img/feedback-3.jpg",
    socialLabel: "Web:",
    socialHandle: "teatrosalanova.com",
    socialUrl: "https://teatrosalanova.com"
  }
];




const nameEl = document.getElementById("feedback-name");
const roleEl = document.getElementById("feedback-role");
const textEl = document.getElementById("feedback-text");
const imgEl = document.getElementById("feedback-image");
const prevBtn = document.getElementById("prev-feedback");
const nextBtn = document.getElementById("next-feedback");
const dotsContainer = document.getElementById("feedback-dots");

// elementos para la línea profesional
const socialEl = document.getElementById("feedback-social");
const socialLabelEl = document.getElementById("feedback-social-label");
const socialLinkEl = document.getElementById("feedback-social-link");

let currentIndex = 0;

function renderDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = "";
  feedbackData.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.className = "slider-dot" + (index === currentIndex ? " is-active" : "");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver testimonio ${index + 1}`);
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateFeedback();
    });
    dotsContainer.appendChild(dot);
  });
}

function updateFeedback() {
  const item = feedbackData[currentIndex];
  if (!item) return;

  if (nameEl) nameEl.textContent = item.name;
  if (roleEl) roleEl.textContent = item.role;
  if (textEl) textEl.textContent = item.text;
  if (imgEl) imgEl.src = item.image;

  // línea profesional (IG / web)
  if (item.socialLink && item.socialText && socialEl) {
    socialEl.style.display = "block";
    if (socialLabelEl) {
      socialLabelEl.textContent = item.socialLabel || "";
    }
    if (socialLinkEl) {
      socialLinkEl.textContent = item.socialText;
      socialLinkEl.href = item.socialLink;
    }
  } else if (socialEl) {
    socialEl.style.display = "none";
  }

  renderDots();
}

if (
  nameEl &&
  roleEl &&
  textEl &&
  imgEl &&
  prevBtn &&
  nextBtn &&
  dotsContainer
) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + feedbackData.length) % feedbackData.length;
    updateFeedback();
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % feedbackData.length;
    updateFeedback();
  });

  updateFeedback();
}

// ---------- DETALLE DE PROYECTOS ----------
const projectsData = {
  "fuego-lento": {
    img: "img/port-1.jpg",
    title: "Fuego Lento",
    type: "Videoclip · Proyecto personal",
    sub: "Single indie-pop dirigido por Martina Ríos.",
    description:
      "Videoclip íntimo y sensorial donde el cuerpo y la luz cuentan la historia de una relación que se enciende y se apaga a destiempo.",
    where: "LumiStream · Festival Luz Roja 2025",
    year: "2025",
    role: "Protagonista · Co-creación de guion",
    link: "#"
  },
  "tu-y-yo-y-tu": {
    img: "img/port-2.jpg",
    title: "Tú y yo y tú",
    type: "Arte de portada · Lanzamiento musical",
    sub: "Cover para el single homónimo.",
    description:
      "Pieza gráfica que explora la obsesión, la repetición y las versiones de una misma relación.",
    where: "VinylCloud · New Faces 2024",
    year: "2024",
    role: "Rostro principal · Concepto visual",
    link: "#"
  },
  "electric-blue": {
    img: "img/port-3.jpg",
    title: "Electric Blue",
    type: "Fashion film",
    sub: "Colaboración con la firma Electric Room.",
    description:
      "Fashion film que sucede en una sola habitación, con luces verdes y azules, reflejos y texturas.",
    where: "Frame by Frame · Muestra 2023",
    year: "2023",
    role: "Actriz principal",
    link: "#"
  },
  "los-pequenos-amores": {
    img: "img/port-4.jpg",
    title: "Los pequeños amores",
    type: "Película independiente",
    sub: "Drama íntimo sobre vínculos, familia y veranos eternos.",
    description:
      "Una madre y una hija pasan un verano en un pueblo rodeado de naturaleza, donde los silencios hablan más que las palabras.",
    where: "CasaCine Online",
    year: "2022",
    role: "Reparto secundario — Clara",
    link: "#"
  },
  "sala-roja": {
    img: "img/port-5.jpg",
    title: "Sala Roja",
    type: "Obra de teatro",
    sub: "Pieza contemporánea en una sala de butacas rojas.",
    description:
      "La acción sucede entre las filas de butacas, rompiendo la cuarta pared y jugando con la idea de ser observada.",
    where: "Teatro Sala Nova",
    year: "2023",
    role: "Performer · Creación colectiva",
    link: "#"
  },
"take-13": {
  img: "img/port-6.jpg",
  title: "Los pequeños amores",
  type: "Película independiente",
  sub: "Drama íntimo sobre vínculos, familia y veranos eternos.",
  description:
    "Una madre y una hija pasan un verano en un pueblo rodeado de naturaleza, donde los silencios hablan más que las palabras. Una historia cálida y contemplativa sobre crecer, cuidar y volver a mirar al otro con nuevos ojos.",
  where: "Nominada al Festival de Cannes 2022",
  year: "2022",
  role: "Reparto secundario — Clara",
  link: "#"
}

};


const projectDetailSection = document.getElementById("project-detail");
const projectTypeEl = document.getElementById("project-type");
const projectTitleEl = document.getElementById("project-title");
const projectSubEl = document.getElementById("project-sub");
const projectDescEl = document.getElementById("project-description");
const projectWhereEl = document.getElementById("project-where");
const projectYearEl = document.getElementById("project-year");
const projectRoleEl = document.getElementById("project-role");
const projectLinkEl = document.getElementById("project-link");

function showProjectDetail(projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  document.getElementById("project-img").src = data.img;
  document.getElementById("project-type").textContent = data.type;
  document.getElementById("project-title").textContent = data.title;
  document.getElementById("project-sub").textContent = data.sub;
  document.getElementById("project-description").textContent = data.description;
  document.getElementById("project-where").textContent = data.where;
  document.getElementById("project-year").textContent = data.year;
  document.getElementById("project-role").textContent = data.role;
  document.getElementById("project-link").href = data.link;

  projectDetailSection.classList.remove("is-hidden");
  projectDetailSection.scrollIntoView({ behavior: "smooth" });
}


const portfolioItems = document.querySelectorAll(".portfolio-item");
portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    const projectId = item.dataset.projectId;
    if (projectId) {
      showProjectDetail(projectId);
    }
  });
});
