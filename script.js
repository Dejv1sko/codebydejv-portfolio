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
    title: "Fakturace OSVČ (Java)",
    desc: "Konzolová app + úložiště, validace vstupů, práce s kolekcemi. Druhá verze s DB souborem.",
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
    title: "OSVČ náklady – kalkulačka",
    desc: "Vanilla JS + HTML. Vzorečky, validace, rychlý výpočet a ukládání do localStorage.",
    tags: ["JavaScript", "Frontend"],
    code: "#",
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

const TAG_ORDER = ["Vše", "Java", "Spring", "REST", "React", "JUnit", "MySQL", "CLI", "JavaScript", "Frontend", "AI"];

const SKILLS = [
  { name: "Java 21", lvl: 80 },
  { name: "Spring Boot", lvl: 75 },
  { name: "Hibernate/JPA", lvl: 50 },
  { name: "REST API", lvl: 75 },
  { name: "SQL / MySQL", lvl: 65 },
  { name: "JUnit / MockMvc", lvl: 35 },
  { name: "Bootstrap", lvl: 70 },
  { name: "React", lvl: 30 },
  { name: "AI & Prompt Engineering", lvl: 45 },
  { name: "Docker", lvl: 35 },
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
  currentFocus: "Specializuji se na backend development s Javou 21 a Spring Boot. Věřím v pragmatický přístup a čistý kód.",
  learning: "Jsem autodidakt, který preferuje oficiální dokumentaci, GitHub projekty a vlastní experimenty.",
  future: "Směřuji k senior pozici s fokusem na mikroservisy, cloud technologie a mentoring začátečníků."
};

// Oblíbené nástroje
const TOOLS = [
  { name: "IntelliJ IDEA", icon: "🧠", desc: "Můj hlavní IDE pro Java" },
  { name: "VS Code", icon: "💻", desc: "Pro frontend a rychlé úpravy" },
  { name: "GitHub", icon: "🐙", desc: "Verzování a spolupráce" },
  { name: "Postman", icon: "📮", desc: "Testování REST API" },
  { name: "MySQL Workbench", icon: "🗄️", desc: "Správa databází" },
  { name: "Chrome DevTools", icon: "🔍", desc: "Debug frontend kódu" },
  { name: "ChatGPT", icon: "🤖", desc: "Nechávám si vysvětlovat problémy" },
  { name: "GitHub Copilot", icon: "✨", desc: "Zkouším pro učení syntaxe" },
  { name: "Spring Boot", icon: "🚀", desc: "Java framework" },
  { name: "Docker", icon: "🐳", desc: "Kontejnerizace aplikací" },
  { name: "Maven", icon: "📦", desc: "Build management" },
  { name: "Git", icon: "🌿", desc: "Verzování kódu" }
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
    card.innerHTML = `
      <div class="tool-icon">${tool.icon}</div>
      <h3>${escapeHTML(tool.name)}</h3>
      <p>${escapeHTML(tool.desc)}</p>
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
      <a class="article-link" href="${a.link}">Číst článek →</a>
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
  setupContactForm();

  // Render content
  renderFilters();
  renderProjects(null);
  renderSkills();
  renderTools();
  renderArticleFilters();
  renderArticles(null);
  renderTips();

  // Self-tests (spustíš přes ?test=1)
  if (location.search.includes("test=1")) {
    runTests();
  }
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
        
        // Spusť konfetíčka! 🎉
        createConfetti();
        
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
  
  if (mobileToggle && nav) {
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

// ====== Self-tests ======
function runTests() {
  console.group("%cSelf-tests", "font-weight:bold");
  try {
    // 1) Filtrace „Java" vrací aspoň 1 projekt
    const javaCount = PROJECTS.filter(p => p.tags.includes("Java")).length;
    console.assert(javaCount >= 1, "Očekávám aspoň 1 Java projekt");

    // 2) Filtrace „Neexistuje" vrací 0
    const dummy = PROJECTS.filter(p => p.tags.includes("Neexistuje")).length;
    console.assert(dummy === 0, "Očekávám 0 projektů pro tag 'Neexistuje'");

    // 3) Theme persistence toggle
    const before = localStorage.getItem(THEME_KEY);
    toggleTheme();
    const after = localStorage.getItem(THEME_KEY);
    console.assert(after && after !== before, "Theme toggle má změnit hodnotu v localStorage");

    // 4) Skills rozsah 0–100
    const outOfRange = SKILLS.find(s => s.lvl < 0 || s.lvl > 100);
    console.assert(!outOfRange, "Všechny skills lvl musí být 0–100");

    console.log("%c✅ Testy proběhly. Výsledek viz assertions výše.", "color: #10b981");
  } catch (e) {
    console.error("❌ Test selhal:", e);
  } finally {
    console.groupEnd();
  }
}
