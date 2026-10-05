# Manjinder Singh Rooprai — Portfolio

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-00d4ff?style=flat-square&logo=github)](https://manjinderrooprai.github.io/Portfolio/)
[![Static Site](https://img.shields.io/badge/Type-Static%20Site-00ff88?style=flat-square)](docs/)
[![License](https://img.shields.io/badge/License-MIT-b060ff?style=flat-square)](LICENSE)

> **Senior Technologist** · Cloud, DevOps & Generative AI · Infosys Ltd × Apple · Bangalore, India

A futuristic, single-page portfolio site built with pure HTML, CSS, and JavaScript — no build tools required. Hosted via GitHub Pages from the `docs/` folder.

---

## 🔗 Live Site

**[manjinderrooprai.github.io/Portfolio/](https://manjinderrooprai.github.io/Portfolio/)**

---

## ✨ Features

- **Futuristic dark theme** — neon cyan, emerald, purple & pink accents on a deep `#02040a` base
- **Animated hero** — tsParticles background + Typed.js typewriter headline
- **Scroll-reveal animations** — IntersectionObserver-powered entrance effects
- **Holographic cards** — shimmer effect on hover
- **Spinning avatar ring** — conic gradient border with Memoji photo
- **Cursor trail** — subtle interactive mouse effect
- **Scanline overlay** — retro-futuristic aesthetic
- **Fully responsive** — mobile-first layout
- **No build step** — drop the `docs/` folder on any static host

---

## 📁 Project Structure

```
Portfolio/
├── CLAUDE.md               # AI assistant reference (structure, conventions, common tasks)
├── README.md               # This file
└── docs/                   # GitHub Pages static site
    ├── index.html          # Single-page portfolio
    └── assets/
        ├── css/
        │   └── style.css   # All styles (~1,600 lines)
        ├── js/
        │   └── main.js     # All JavaScript (~600 lines)
        ├── images/
        │   └── avatar.png  # Memoji profile photo
        └── resume/
            └── Manjinder-Rooprai-Resume-2026.pdf
```

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Animated headline, role badge, CTA buttons, social links |
| **About** | Executive summary, avatar, quick stats |
| **Experience** | 5 timeline entries with impact metrics |
| **GenAI** | Generative AI tools, capabilities, featured work |
| **Skills** | Proficiency bars, competency cards, tech highlights |
| **Certifications** | AWS/cloud certs, awards & recognition |
| **Education** | Academic background |
| **Digital Art** | Links to WordPress digital creator portfolio |
| **Verses** | Links to WordPress poetry collection |
| **Contact** | Direct email CTA, LinkedIn link |

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 (custom properties) | Styling & animations |
| Vanilla JavaScript | Interactivity |
| [tsParticles 2.12](https://particles.js.org/) | Hero particle background |
| [Typed.js 2.1](https://mattboldt.com/demos/typed-js/) | Typewriter effect |
| [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Display font |
| [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) | Monospace / code font |
| GitHub Pages | Hosting |

---

## 🚀 Deployment

### GitHub Pages (current)

1. Push to `main` branch
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch** → `main` → `/docs`
4. Site is live at `https://manjinderrooprai.github.io/Portfolio/`

### Local Preview

```bash
# Option 1: Python
python3 -m http.server 8080 --directory docs

# Option 2: Node.js (npx serve)
npx serve docs

# Option 3: VS Code Live Server
# Right-click docs/index.html → Open with Live Server
```

Then open [http://localhost:8080](http://localhost:8080).

---

## 🎨 Customisation

### Update resume
Replace `docs/assets/resume/Manjinder-Rooprai-Resume-2026.pdf` — no HTML changes needed.

### Update avatar
Replace `docs/assets/images/avatar.png` with any square/portrait image.

### Change colour accents
Edit CSS variables at the top of `docs/assets/css/style.css`:
```css
:root {
  --cyan:   #00d4ff;
  --green:  #00ff88;
  --purple: #b060ff;
  --pink:   #ff3dce;
}
```

### Add a new section
See [`CLAUDE.md`](CLAUDE.md) for step-by-step instructions.

---

## 🔗 Links

| Platform | URL |
|---|---|
| Portfolio | https://manjinderrooprai.github.io/Portfolio/ |
| LinkedIn | https://linkedin.com/in/manjinder-rooprai-883110b9 |
| GitHub | https://github.com/manjinderrooprai |
| Gravatar | https://gravatar.com/manjinderrooprai |
| Digital Art | https://manjinderrooprai.wordpress.com/category/manjinderrooprai/digital-creator/ |
| Verses | https://manjinderrooprai.wordpress.com/category/manjinderrooprai/verses/ |
| Email | rooprai0044@gmail.com |

---

## 📄 License

MIT © [Manjinder Singh Rooprai](https://github.com/manjinderrooprai)
