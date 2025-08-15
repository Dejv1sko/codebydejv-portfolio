# Muj hlavní web

Portfolio webové stránka Java vývojáře s moderním designem a tmavým/světlým tématem.

## Funkce

- 📱 **Responzivní design** - Funguje na všech zařízeních
- 🌓 **Přepínání témat** - Tmavý/světlý režim s localStorage
- 🔧 **Dynamické filtrování projektů** - Filtrování podle technologií
- 📊 **Vizualizace dovedností** - Progress bary pro skills
- ✨ **Moderní UI** - Glassmorphism efekty, gradienty, animace
- 🧪 **Self-testy** - Zabudované testy funkčnosti (spusť přes `?test=1`)

## Struktura projektu

```
├── index.html          # Hlavní HTML soubor
├── styles.css          # CSS styly s CSS proměnnými pro témata
├── script.js           # JavaScript logika
└── README.md           # Dokumentace
```

## Spuštění

1. Otevři `index.html` v prohlížeči
2. Nebo použij lokální server (např. Live Server extension v VS Code)

## Přizpůsobení

### Projekty
Upravuj pole `PROJECTS` v `script.js`:
```javascript
const PROJECTS = [
  {
    title: "Název projektu",
    desc: "Popis projektu",
    tags: ["Java", "Spring"],
    code: "https://github.com/...",
    demo: "https://demo.com"
  }
];
```

### Dovednosti
Upravuj pole `SKILLS` v `script.js`:
```javascript
const SKILLS = [
  { name: "Java 21", lvl: 80 },
  { name: "Spring Boot", lvl: 75 }
];
```

### Tipy a triky
Upravuj pole `TIPS` v `script.js`:
```javascript
const TIPS = [
  "Tvůj tip zde",
  "Další tip zde"
];
```

### Kontaktní informace
Upravuj objekt `SITE` v `script.js`:
```javascript
const SITE = {
  name: "David Hradec",
  email: "davidhradecyou@gmail.com",
  github: "https://github.com/Dejv1sko",
  linkedin: "https://linkedin.com/in/username"
};
```

## Technologie

- **HTML5** - Sémantické značky, Schema.org metadata
- **CSS3** - CSS Grid, Flexbox, CSS proměnné, media queries
- **Vanilla JavaScript** - ES6+, DOM manipulace, localStorage
- **Font** - Inter from Google Fonts

## Testování

Spusť self-testy přes URL parametr: `index.html?test=1`
Otevři Developer Tools konzoli pro výsledky testů.

## Browser podpora

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+

## Licence

Volně použitelné pro osobní i komerční účely.
