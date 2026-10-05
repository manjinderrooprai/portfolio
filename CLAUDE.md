# CLAUDE.md — Project Reference for AI Assistance

This file documents the structure, conventions, and key details of this portfolio project for use by Claude (or any AI assistant) when making future changes.

---

## Project Overview

**Owner:** Manjinder Singh Rooprai  
**Role:** Senior Technologist (Cloud, DevOps & GenAI) at Infosys Ltd × Apple  
**Location:** Bangalore, India  
**Email:** rooprai0044@gmail.com  
**GitHub:** https://github.com/manjinderrooprai  
**LinkedIn:** https://linkedin.com/in/manjinder-rooprai-883110b9  
**Gravatar:** https://gravatar.com/manjinderrooprai  
**WordPress Blog:** https://manjinderrooprai.wordpress.com  

---

## Repository Structure

```
Portfolio/
├── CLAUDE.md               # This file — AI assistant reference
├── README.md               # Public-facing project documentation
└── docs/                   # GitHub Pages static site (served from /docs)
    ├── index.html          # Single-page portfolio (~1,310+ lines)
    └── assets/
        ├── css/style.css   # All styles (~1,700+ lines, futuristic dark theme)
        ├── js/main.js      # All JavaScript (~594 lines)
        ├── images/
        │   └── avatar.png  # Memoji avatar (turban, glasses, beard — Sikh male)
        └── resume/
            └── Manjinder-Rooprai-Resume-2026.pdf
```

**GitHub Pages config:** Serve from `docs/` folder (no build step, pure static).

---

## Tech Stack

- **HTML/CSS/JS** — no framework, no build tools
- **tsParticles** `2.12.0` — hero particle background (CDN)
- **Typed.js** `2.1.0` — typewriter animation in hero (CDN)
- **Fonts (Google Fonts CDN):** Space Grotesk, Inter, JetBrains Mono

---

## Design System (CSS Variables in `style.css`)

| Variable | Value | Usage |
|---|---|---|
| `--bg-0` | `#02040a` | Page base background |
| `--bg-1` | `#080c14` | Card backgrounds |
| `--bg-2` | `#0d1220` | Elevated surfaces |
| `--cyan` | `#00d4ff` | Primary accent |
| `--green` | `#00ff88` | Secondary accent |
| `--purple` | `#b060ff` | Tertiary accent |
| `--pink` | `#ff3dce` | Quaternary accent |
| `--text-0` | `#f0f4ff` | Primary text |
| `--text-1` | `#b8c4d8` | Secondary text |
| `--text-2` | `#7a8ba6` | Muted text |
| `--border` | `rgba(255,255,255,0.06)` | Card borders |

**Key CSS classes:**
- `.section` — standard section padding
- `.section--alt` — slightly different bg for visual separation
- `.glass-card` — glassmorphism card style
- `.reveal`, `.reveal-left`, `.reveal-right` — scroll-reveal animation triggers (IntersectionObserver in `main.js`)
- `.gradient-text-cyan`, `.gradient-text-purple` — gradient text spans
- `.btn`, `.btn--primary` — button base styles
- `.badge`, `.badge-cyan`, `.badge-emerald`, `.badge-purple` — small tech badges
- `.mono` — JetBrains Mono font

---

## Page Sections (in order)

| Section ID | Nav Label | Notes |
|---|---|---|
| `#hero` | — | tsParticles bg, Typed.js headline, 3 CTA buttons (Explore / Contact / Download Resume) |
| `#about` | About | Avatar photo, bio, quick stats |
| `#experience` | Experience | 5 timeline entries (Sherlog, Paragon, Peloton, Mindtree×TowerHill, Mindtree×AIG) |
| `#genai` | GenAI | AI tools, capability cards |
| `#competencies` | Skills | Proficiency bars, competency cards |
| `#certifications` | Certs | 3 featured + 7 list certs, 9 award cards |
| `#education` | — (footer only) | Education timeline |
| `#digital-art` | Art | Links to WordPress digital creator category (purple accent) |
| `#verses` | Verses | Links to WordPress verses category (cyan accent) |
| `#contact` | Contact | Direct email CTA card + LinkedIn link — **no form** |

---

## Navigation Bar

Order (left → right):
1. **Logo** — MR icon + "Manjinder Rooprai" + "Senior Technologist"
2. **Nav links** — About · Experience · GenAI · Skills · Certs · Art · Verses · Gravatar *(external, `_blank`)*
3. **Resume button** — cyan-bordered, downloads `assets/resume/Manjinder-Rooprai-Resume-2026.pdf`
4. **Contact button** — primary CTA, scrolls to `#contact`

---

## External Links in Use

| Destination | URL |
|---|---|
| LinkedIn | `https://linkedin.com/in/manjinder-rooprai-883110b9` |
| GitHub | `https://github.com/manjinderrooprai` |
| Gravatar | `https://gravatar.com/manjinderrooprai` |
| Digital Art | `https://manjinderrooprai.wordpress.com/category/manjinderrooprai/digital-creator/` |
| Verses/Poetry | `https://manjinderrooprai.wordpress.com/category/manjinderrooprai/verses/` |
| Email | `mailto:rooprai0044@gmail.com` |
| Resume PDF | `assets/resume/Manjinder-Rooprai-Resume-2026.pdf` |

---

## JavaScript (`assets/js/main.js`)

Key features:
- **tsParticles** — initialized on `#particles-canvas`
- **Typed.js** — attached to `#typed-headline`
- **IntersectionObserver** — triggers `.revealed` class on `.reveal`, `.reveal-left`, `.reveal-right` elements
- **Section spy** — highlights active nav link based on scroll position
- **Proficiency bars** — animates `.proficiency-bar__fill` width on scroll into view
- **Timeline fill** — animates `.exp-timeline__line-fill` height
- **Cursor trail** — appends dots to `#cursor-trail` on `mousemove`
- **Contact form** — **removed**; replaced with direct `mailto:` email card
- **Copyright year** — dynamically sets `#current-year` text

---

## Avatar / Favicon

- **File:** `docs/assets/images/avatar.png`
- **Content:** Memoji illustration (turban, square-frame glasses, beard — Sikh male)
- **Used as:** Browser tab favicon (`<link rel="icon">`) and Apple touch icon (`<link rel="apple-touch-icon">`) in `<head>`
- **Also used in:** About section (`#about`) inside `.about-card__avatar-inner--photo`
- **CSS classes:** `.about-card__avatar-inner--photo` (removes padding, clips to circle), `.about-card__avatar-photo` (object-fit: cover, object-position: center top)

---

## Resume

- **File:** `docs/assets/resume/Manjinder-Rooprai-Resume-2026.pdf`
- **Referenced in:** Nav Resume button and hero CTA "Download Resume" button via HTML `download` attribute
- **When updating resume:** Replace the PDF file — no HTML changes needed (filename stays the same)

---

## Contact Section

The contact section (`#contact`) has **no form**. It uses a direct email card (`.contact-direct-card`) with:
- A `mailto:rooprai0044@gmail.com` CTA button
- A LinkedIn "Connect on LinkedIn" secondary link
- No JavaScript form handling required

---

## Common Tasks

### Add a new section
1. Add `<section id="new-id">` block in `docs/index.html` before `<!-- ===== CONTACT ===== -->`
2. Add nav `<li><a href="#new-id">Label</a></li>` in the nav list (line ~47–56)
3. Add footer quick link `<li><a href="#new-id">Label</a></li>` (line ~1235–1245)
4. Add CSS to `docs/assets/css/style.css`

### Add an external nav link
Use `target="_blank" rel="noopener noreferrer"` — same pattern as the Gravatar link.

### Update personal info
All personal data is hardcoded in `docs/index.html`. Use search to find and update strings.

### Change colour accent
Update CSS variables in `:root` at the top of `docs/assets/css/style.css`.

### Update resume
Replace `docs/assets/resume/Manjinder-Rooprai-Resume-2026.pdf`. No HTML change needed.

### Update avatar / favicon
Replace `docs/assets/images/avatar.png`. Both the About card and browser tab icon update automatically.
