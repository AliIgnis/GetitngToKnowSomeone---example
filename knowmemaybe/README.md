# KnowMeMaybe 💕

A personal single-page website to share with someone you'd like to get to know. Built with Angular, available in English and German.

![Angular](https://img.shields.io/badge/Angular-18-dd0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styling-cc6699?logo=sass)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ed?logo=docker)

## Features

- **Bilingual** — English and German with automatic browser language detection
- **Dark Mode** — System-aware theme toggle with smooth transitions
- **Responsive** — Mobile-first design that looks great on all devices
- **Accessible** — WCAG AA compliant with keyboard navigation and ARIA labels
- **Docker-ready** — Multi-stage build with nginx
- **GitHub Pages CI/CD** — Automatic deployment on push to main

## Sections

1. **Hero** — Warm welcome with animated entrance
2. **About Me** — Personality traits in a card grid
3. **Why You?** — Genuine, emotionally direct reasons
4. **Getting to Know** — Step-by-step timeline
5. **Date Ideas** — Activity cards with vibe tags
6. **Questions** — Conversation starters by depth level
7. **Fun Facts** — Personality profile cards
8. **The Invite** — Call-to-action with email link

## Customization

Edit `src/app/constants/app.constants.ts`:

```typescript
export const OWNER_ALIAS = 'Your Name';    // Display name across the entire site
export const OWNER_EMAIL = 'you@example.com'; // Contact email for the CTA button
```

Changing these two values updates the entire site — no other files need editing.

## Quick Start

```bash
cd knowmemaybe
npm install
npx ng serve
# Open http://localhost:4200
```

## Docker

```bash
cd knowmemaybe
docker build -t knowmemaybe .
docker run -p 8080:80 knowmemaybe
# Open http://localhost:8080
```

## Tech Stack

- **Framework:** Angular 18+ (standalone components)
- **Styling:** SCSS with CSS custom properties for theming
- **i18n:** @ngx-translate/core + @ngx-translate/http-loader
- **Fonts:** Lora (headings) + Nunito (body) via Google Fonts
- **Deployment:** GitHub Pages via GitHub Actions
- **Container:** Docker with nginx

## License

MIT

---

*Built with courage, deployed with hope.*
