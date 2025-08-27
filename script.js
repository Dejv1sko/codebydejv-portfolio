// ====== Data ======
const SITE = {
  name: "David",
  heroPitch: "Java 21 • Spring Boot • Hibernate • REST API",
  email: "davidhradecyou@gmail.com",
  github: "https://github.com/Dejv1sko",
  linkedin: "https://www.linkedin.com/in/david-hradec-5144a9378/"
};

/** Projekty – přidej/odebírej jen položky v poli */
const PROJECTS = [
  {
    title: "Fakturace OSVČ (konzolová verze)",
    desc: "Můj první větší Java projekt. Jednoduchá konzolová aplikace pro základní fakturaci OSVČ. Validace vstupů, práce s kolekcemi, ukládání do textového souboru.",
    tags: ["Java", "CLI"],
    code: "https://github.com/Dejv1sko/FakturaceOSVC",
    demo: ""
  },
  {
    title: "Správce pojištění API",
    desc: "Spring Boot REST API pro správu pojištění, DTO vs Entity, Bean Validation, databázové schéma, MockMvc testy.",
    tags: ["Java", "Spring", "REST", "JUnit"],
    code: "https://github.com/Dejv1sko/insurance-manager",
    demo: ""
  },
  {
    title: "Rezervační systém pro malé služby",
    desc: "Aplikace pro rezervaci termínů, správu zákazníků a e-mailová potvrzení. Více uživatelských rolí (admin, klient). Backend Spring Boot, frontend React.",
    tags: ["Java", "Spring", "React", "MySQL"],
    code: "#",
    demo: "#"
  },
  {
    title: "Evidence OSVČ (desktopová aplikace)",
    desc: "Pokročilá JavaFX aplikace - evoluce konzolové verze. Kompletní evidence podnikatele: faktury, jízdy, náklady, statistiky, grafy, automatické reporty, výpočet daní a pojištění.",
    tags: ["Java", "JavaFX", "Desktop"],
    code: "https://github.com/Dejv1sko/OSVC-Evidence",
    demo: "#"
  }
];

/** Články – přidej/odebírej jen položky v poli */
const ARTICLES = [
  {
    title: "Jak jsem se učil Java - má cesta od nuly",
    excerpt: "Příběh o tom, jak jsem jako bývalý policista objevil programování a co mi pomohlo při učení základů Javy.",
    date: "2025-08-10",
    readTime: "5 min",
    tags: ["Java", "Začátečník", "Učení"],
    link: "clanky/jak-jsem-se-ucil-java.html"
  },
  {
    title: "Spring Boot vs čisté Java - kdy použít co?",
    excerpt: "Praktické srovnání toho, kdy se vyplatí použít Spring Boot framework a kdy stačí čisté Java pro jednoduché projekty.",
    date: "2025-07-15", 
    readTime: "7 min",
    tags: ["Java", "Spring Boot", "Backend"],
    link: "clanky/spring-boot-vs-java.html"
  },
  {
    title: "Moje první REST API - chyby a poučení",
    excerpt: "Co všechno jsem pokazil při tvorbě prvního REST API a jak jsem se z toho poučil. Praktické tipy pro začátečníky.",
    date: "2025-06-20",
    readTime: "6 min", 
    tags: ["REST API", "Spring", "Začátečník"],
    link: "clanky/moje-prvni-rest-api.html"
  },
  {
    title: "AI nástroje pro Java developery - moje zkušenosti",
    excerpt: "Jak využívám ChatGPT a GitHub Copilot při učení a kódování. Co funguje a co ne při práci s AI asistenty.",
    date: "2025-04-25",
    readTime: "4 min",
    tags: ["AI", "Nástroje", "Produktivita"],
    link: "clanky/ai-nastroje-pro-java-developery.html"
  }
];

const ARTICLE_TAG_ORDER = ["Vše", "Java", "Spring Boot", "REST API", "Začátečník", "AI", "Backend", "Učení", "Nástroje", "Produktivita"];

const TAG_ORDER = ["Vše", "Java", "Spring", "REST", "React", "JUnit", "MySQL", "CLI", "JavaScript", "Frontend", "JavaFX", "Desktop", "AI"];

const SKILLS = [
  { name: "Java 21", lvl: 80 },
  { name: "Spring Boot", lvl: 75 },
  { name: "Hibernate/JPA", lvl: 30 },
  { name: "REST API", lvl: 75 },
  { name: "SQL / MySQL", lvl: 65 },
  { name: "JUnit / MockMvc", lvl: 15 },
  { name: "Bootstrap", lvl: 70 },
  { name: "React", lvl: 30 },
  { name: "AI & Prompt Engineering", lvl: 45 },
  { name: "Docker", lvl: 15 },
  { name: "Git / GitHub", lvl: 70 },
];

const TIPS = [
  "README je součást produktu: co to dělá, jak spustit (i Docker), ukázkové cURL.",
  "Odděl DTO a Entity. Vstup validuj anotacemi (Bean Validation).",
  "Centralizuj chyby přes @ControllerAdvice. Loguj korektně, ne výpisy do konzole.",
  "Databáze navrhuj s rozmyslem, používej správné indexy a constrainty.",
  "Pár smysluplných testů > 100 prázdných. Testuj kritická místa.",
  "AI nástroje (ChatGPT, GitHub Copilot) jsou skvělé pro rychlé prototypy a učení.",
  "GitHub Actions: mvn verify, na PR aspoň build/test.",
  "V repu screenshoty/GIFy, topics, popis architektury – personal branding."
];

// Informace o mně
const ABOUT_INFO = {
  story: "Programování jsem objevil poměrně pozdě, ale o to intenzivněji. Začal jsem jako naprostý začátečnik bez informatického vzdělání, jen se zvědavostí a odhodláním. Java se stala mou vášní díky své jasné struktuře a obrovským možnostem.",
  currentFocus: "Učím se  backend development s Javou 21 a Spring Boot. Věřím v pragmatický přístup a čistý kód.",
  learning: "Jsem autodidakt, který preferuje oficiální dokumentaci, GitHub projekty a vlastní experimenty.",
  future: "Směřuji k senior pozici s fokusem na mikroservisy, cloud technologie a mentoring začátečníků."
};

// Oblíbené nástroje
const TOOLS = [
  { name: "IntelliJ IDEA", icon: "🧠", desc: "Můj hlavní IDE pro Java", url: "https://www.jetbrains.com/idea/" },
  { name: "VS Code", icon: "💻", desc: "Pro frontend a rychlé úpravy", url: "https://code.visualstudio.com/" },
  { name: "GitHub", icon: "🐙", desc: "Verzování a spolupráce", url: "https://github.com/" },
  { name: "Postman", icon: "📮", desc: "Testování REST API", url: "https://www.postman.com/" },
  { name: "MySQL Workbench", icon: "🗄️", desc: "Správa databází", url: "https://www.mysql.com/products/workbench/" },
  { name: "Chrome DevTools", icon: "🔍", desc: "Debug frontend kódu", url: "https://developer.chrome.com/docs/devtools/" },
  { name: "ChatGPT", icon: "🤖", desc: "Nechávám si vysvětlovat problémy", url: "https://chat.openai.com/" },
  { name: "GitHub Copilot", icon: "✨", desc: "Zkouším pro učení syntaxe", url: "https://github.com/features/copilot" },
  { name: "Spring Boot", icon: "🚀", desc: "Java framework", url: "https://spring.io/projects/spring-boot" },
  { name: "Docker", icon: "🐳", desc: "Kontejnerizace aplikací", url: "https://www.docker.com/" },
  { name: "Maven", icon: "📦", desc: "Build management", url: "https://maven.apache.org/" },
  { name: "Git", icon: "🌿", desc: "Verzování kódu", url: "https://git-scm.com/" }
];

// ====== DOM helpers ======
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ====== Theme ======
const THEME_KEY = "theme";
function applyStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
  const useLight = stored ? stored === "light" : prefersLight;
  document.documentElement.classList.toggle("light", useLight);
}
function toggleTheme() {
  const isLight = document.documentElement.classList.toggle("light");
  localStorage.setItem(THEME_KEY, isLight ? "light" : "dark");
}

// ====== Render ======
function renderFilters() {
  const unique = new Set(["Vše"]);
  PROJECTS.forEach(p => p.tags.forEach(t => unique.add(t)));
  const order = TAG_ORDER.filter(t => unique.has(t)).concat([...unique].filter(t => !TAG_ORDER.includes(t)));

  const filtersEl = $("#filters");
  filtersEl.innerHTML = "";
  order.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.tag = tag;
    btn.textContent = tag;
    btn.addEventListener("click", () => {
      $$(".chip", filtersEl).forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      renderProjects(tag === "Vše" ? null : tag);
    });
    filtersEl.appendChild(btn);
  });
  // default aktivní „Vše"
  const first = $(".chip", filtersEl);
  if (first) first.classList.add("active");
}

function renderProjects(activeTag = null) {
  const grid = $("#projectsGrid");
  grid.innerHTML = "";
  let list = PROJECTS;
  if (activeTag) list = PROJECTS.filter(p => p.tags.includes(activeTag));

  list.forEach(p => {
    const card = document.createElement("article");
    card.className = "card project";
    card.innerHTML = `
      <h3>${escapeHTML(p.title)}</h3>
      <p>${escapeHTML(p.desc)}</p>
      <div class="tags">${p.tags.map(t => `<span class="chip" aria-hidden="true">${t}</span>`).join("")}</div>
      <div class="row">
        ${p.code ? `<a class="btn outline" href="${p.code}" target="_blank" rel="noreferrer">Kód ↗</a>` : ""}
        ${p.demo ? `<a class="btn primary" href="${p.demo}" target="_blank" rel="noreferrer">Demo ↗</a>` : ""}
      </div>
    `;
    grid.appendChild(card);
  });

  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "Pro vybraný filtr tu teď nic není.";
    grid.appendChild(empty);
  }
}

function renderSkills() {
  const grid = $("#skillsGrid");
  grid.innerHTML = "";
  SKILLS.forEach(s => {
    const wrap = document.createElement("div");
    wrap.className = "skill";
    wrap.innerHTML = `
      <strong>${escapeHTML(s.name)}</strong>
      <div class="bar" aria-label="${s.name}">
        <i style="width:${Math.max(0, Math.min(100, s.lvl))}%"></i>
      </div>
    `;
    grid.appendChild(wrap);
  });
}

function renderTips() {
  const ul = $("#tipsList");
  ul.innerHTML = "";
  TIPS.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
}

function renderTools() {
  const grid = $("#toolsGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  TOOLS.forEach(tool => {
    const card = document.createElement("div");
    card.className = "tool-card";
    
    if (tool.url) {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        window.open(tool.url, "_blank");
      });
    }
    
    card.innerHTML = `
      <div class="tool-icon">${tool.icon}</div>
      <h3>${escapeHTML(tool.name)}</h3>
      <p>${escapeHTML(tool.desc)}</p>
      ${tool.url ? '<div class="tool-link-indicator">🔗</div>' : ''}
    `;
    grid.appendChild(card);
  });
}

// ====== Articles ======
function renderArticleFilters() {
  const unique = new Set(["Vše"]);
  ARTICLES.forEach(a => a.tags.forEach(t => unique.add(t)));
  const order = ARTICLE_TAG_ORDER.filter(t => unique.has(t)).concat([...unique].filter(t => !ARTICLE_TAG_ORDER.includes(t)));

  const filtersEl = $("#articleFilters");
  if (!filtersEl) return;
  
  filtersEl.innerHTML = "";
  order.forEach(tag => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.tag = tag;
    btn.textContent = tag;
    btn.addEventListener("click", () => {
      $$(".chip", filtersEl).forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      renderArticles(tag === "Vše" ? null : tag);
    });
    filtersEl.appendChild(btn);
  });
  
  const first = $(".chip", filtersEl);
  if (first) first.classList.add("active");
}

function renderArticles(activeTag = null) {
  const grid = $("#articlesGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  let list = ARTICLES;
  if (activeTag) list = ARTICLES.filter(a => a.tags.includes(activeTag));

  list.forEach(a => {
    const card = document.createElement("article");
    card.className = "card article";
    card.innerHTML = `
      <h3>${escapeHTML(a.title)}</h3>
      <div class="article-meta">
        <span>📅 ${formatDate(a.date)}</span>
        <span>⏱️ ${a.readTime}</span>
      </div>
      <p class="article-excerpt">${escapeHTML(a.excerpt)}</p>
      <div class="tags">${a.tags.map(t => `<span class="chip" aria-hidden="true">${t}</span>`).join("")}</div>
      <button class="article-link" onclick="openArticleModal('${a.link}')">Číst článek →</button>
    `;
    grid.appendChild(card);
  });

  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "card";
    empty.textContent = "Pro vybraný filtr tu teď žádné články nejsou.";
    grid.appendChild(empty);
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('cs-CZ', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// ====== Utils ======
function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[s]));
}

// ====== Init ======
document.addEventListener("DOMContentLoaded", () => {
  // Setup loading screen
  setupLoadingScreen();
  
  $("#year").textContent = new Date().getFullYear();

  // Kontakty z konstant - už není potřeba, máme formulář
  const gh = $('a[href^="https://github.com"]');
  if (gh) gh.href = SITE.github;
  const li = $('a[href*="linkedin.com"]');
  if (li) li.href = SITE.linkedin;

  applyStoredTheme();
  $("#themeToggle").addEventListener("click", toggleTheme);

  // Setup features
  setupMobileNavigation();
  setupScrollAnimations();
  setupScrollToTop();
  setupContactForm();

  // Render content
  renderFilters();
  renderProjects(null);
  renderSkills();
  renderTools();
  renderArticleFilters();
  renderArticles(null);
  renderTips();
});

// ====== Loading Screen ======
function setupLoadingScreen() {
  const loadingScreen = $("#loadingScreen");
  if (!loadingScreen) return;
  
  // Simulace načítání - skryj loading screen po 2.5s
  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    // Úplně odstraň z DOM po animaci
    setTimeout(() => {
      loadingScreen.remove();
    }, 500);
  }, 2500);
}

// ====== Konfetíčka ======
function createConfetti() {
  const colors = ['#10b981', '#6366f1', '#f59e0b', '#ff6b9d', '#4ecdc4'];
  const shapes = ['square', 'circle', 'triangle'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(confetti);
    
    // Odstraň po animaci
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// ====== Contact Form ======
function setupContactForm() {
  const form = $("#contactForm");
  if (!form) return;
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    // Získej data z formuláře
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"), 
      subject: formData.get("subject") || "Zpráva z webu",
      message: formData.get("message")
    };
    
    // Zobraz loading stav
    form.classList.add("loading");
    
    try {
      // Vytvoř mailto link s předvyplněnými daty
      const subject = encodeURIComponent(`${data.subject} - od ${data.name}`);
      const body = encodeURIComponent(
        `Jméno: ${data.name}\n` +
        `Email: ${data.email}\n\n` +
        `Zpráva:\n${data.message}`
      );
      
      const mailtoLink = `mailto:davidhradecyou@gmail.com?subject=${subject}&body=${body}`;
      
      // Otevři email klienta
      window.location.href = mailtoLink;
      
      // Reset formuláře po krátkém čekání
      setTimeout(() => {
        form.reset();
        form.classList.remove("loading");
        
        alert("Email klient byl otevřen s předvyplněnou zprávou!");
      }, 1000);
      
    } catch (error) {
      console.error("Chyba při odesílání:", error);
      form.classList.remove("loading");
      alert("Došlo k chybě. Zkus to prosím znovu nebo mi napiš přímo na davidhradecyou@gmail.com");
    }
  });
}

// ====== Mobile Navigation ======
function setupMobileNavigation() {
  const mobileToggle = $("#mobileToggle");
  const nav = $("#nav");
  const header = $(".site-header");
  let lastScrollY = window.scrollY;
  let scrollTimeout;
  
  if (mobileToggle && nav && header) {
    mobileToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      mobileToggle.textContent = nav.classList.contains("active") ? "✕" : "☰";
    });

    // Close menu when clicking nav links
    $$(".nav a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        mobileToggle.textContent = "☰";
      });
    });

    // Smart header behavior on scroll
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      
      // Close menu when scrolling down and menu is open
      if (currentScrollY > lastScrollY && nav.classList.contains("active")) {
        nav.classList.remove("active");
        mobileToggle.textContent = "☰";
      }
      
      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        header.classList.add("header-hidden");
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        header.classList.remove("header-hidden");
      }
      
      // Always show header when near top
      if (currentScrollY < 50) {
        header.classList.remove("header-hidden");
      }
      
      lastScrollY = currentScrollY;
      
      // Clear any existing timeout
      clearTimeout(scrollTimeout);
      
      // Show header after user stops scrolling for 1 second
      scrollTimeout = setTimeout(() => {
        header.classList.remove("header-hidden");
      }, 1000);
    });
  }
}

// ====== Scroll Animations ======
function setupScrollAnimations() {
  // IntersectionObserver pro timeline animace
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Přidej delay pro postupné zobrazování timeline items
        const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 150;
        setTimeout(() => {
          entry.target.classList.add("animate");
        }, delay);
      }
    });
  }, { 
    threshold: 0.3,
    rootMargin: '10px'
  });

  // Animace jen timeline items při scrollování
  $$("[data-animate]").forEach(el => observer.observe(el));
}

// Modal pro zobrazování článků
function openArticleModal(articlePath) {
  // Načti obsah článku
  fetch(articlePath)
    .then(response => {
      if (!response.ok) {
        throw new Error('Článek se nepodařilo načíst');
      }
      return response.text();
    })
    .then(html => {
      // Extrahuj obsah článku z HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const articleContent = doc.querySelector('.article-content');
      const articleHeader = doc.querySelector('.article-header');
      
      if (!articleContent || !articleHeader) {
        throw new Error('Neplatný formát článku');
      }
      
      // Vytvoř modal
      const modal = document.createElement('div');
      modal.className = 'article-modal';
      modal.innerHTML = `
        <div class="article-modal-content">
          <button class="article-modal-close" onclick="closeArticleModal()">&times;</button>
          <div class="article-modal-body">
            ${articleHeader.outerHTML}
            ${articleContent.outerHTML}
          </div>
        </div>
      `;
      
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden';
      
      // Animace
      setTimeout(() => modal.classList.add('active'), 10);
    })
    .catch(error => {
      console.error('Chyba při načítání článku:', error);
      alert('Nepodařilo se načíst článek. Zkuste to později.');
    });
}

function closeArticleModal() {
  const modal = document.querySelector('.article-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    }, 300);
  }
}

// ====== Scroll to Top ======
function setupScrollToTop() {
  const scrollToTopBtn = $("#scrollToTop");
  
  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 300) {
        scrollToTopBtn.classList.add("visible");
      } else {
        scrollToTopBtn.classList.remove("visible");
      }
    });
    
    // Smooth scroll to top when clicked
    scrollToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
