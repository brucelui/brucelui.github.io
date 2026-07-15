# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Bruce Lui (product designer), served via GitHub Pages at https://brucelui.github.io. Built as a Vite + React 19 + TypeScript **multi-page app** — there is no router and no shared entry point.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # tsc && vite build → dist/
npm run preview   # serve the production build locally
```

There are no tests and no linter. `tsc` (run as part of `npm run build`, strict mode with noUnusedLocals/noUnusedParameters) is the only automated check — run `npm run build` to validate changes.

Run `npm ci` before building on a fresh clone: a partial `node_modules/` is accidentally git-tracked (see below), so the directory exists but the build fails with "Cannot find module" errors until dependencies are actually installed.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages. There is no other CI.

## Architecture

### Multi-page entry points

Each page is a standalone HTML file at the repo root (`index.html`, `ecosia.html`, `n26.html`, `trivago.html`, `password.html`) that:

1. Carries its own SEO head (meta description, Open Graph, Twitter cards, JSON-LD structured data) and the GA4 gtag snippet — these live in the HTML, not in React.
2. Loads exactly one script: its page module from `src/pages/` (e.g. `/src/pages/Ecosia.tsx`).

Each `src/pages/*.tsx` file both defines the page component **and calls `createRoot(...).render(...)` at the bottom of the file** — there is no `main.tsx`. Pages link to each other with plain `<a href="./n26.html">` navigation.

**Adding a page requires three things:** a new root-level HTML file, a self-mounting component in `src/pages/`, and a new entry in `rollupOptions.input` in `vite.config.ts` (pages not listed there are silently excluded from the build).

### Password gating

The three case study pages (Ecosia, N26, Trivago) wrap their content in `<PasswordGate>` (`src/components/PasswordGate.tsx`), which checks `sessionStorage['case_study_authenticated']` and otherwise redirects to `password.html?return=<url>`. `src/pages/Password.tsx` verifies input client-side against a hardcoded SHA-256 hash (`PASSWORD_HASH`), sets the sessionStorage flag, and redirects back. This is soft protection only — all content ships in the JS bundle.

### Styling

All styling is plain global CSS in `public/css/style.css` (~2000 lines, plus `foundation.min.css`), loaded via `<link>` tags in each HTML file. Components reference these global class names via `className` — there is no CSS modules/Tailwind/CSS-in-JS. Media-query breakpoints live inside `style.css` (mobile is ≤599px).

### Assets and legacy directories

Live static assets are in `public/` (`public/images/`, `public/css/`, plus `robots.txt`, `sitemap.xml`, `llms.txt`) and are referenced by absolute paths (`/images/...`, `/css/...`).

The root-level `css/` and `images/` directories are **stale leftovers from the pre-Vite static site** — they are git-tracked but not served by Vite and have drifted out of sync with `public/`. Edit assets under `public/` only. (A handful of `node_modules` files are also accidentally git-tracked from before `.gitignore` existed; leave them alone unless asked.)

### Notable components and hooks

- `Device3DMockup` (`src/components/Device3DMockup.tsx`) — three.js 3D phone mockup used in case study headers; supports video screen textures (`.mp4` with image fallback), intro animation, and extensive position/rotation/scale props including mobile overrides.
- `WorkItem` — the portfolio card on the home page (image or video variant, stats rows, hover thumbnails).
- Hooks: `useTypewriter`, `useScrollFadeIn` (IntersectionObserver fade-ins), `useBottomScrollConfetti` (canvas-confetti at page bottom), `useAnalytics`.

### Analytics

GA4 is loaded via the gtag snippet in each HTML head. Custom events go through `trackEvent(name, params)` from `src/hooks/useAnalytics.ts` — existing event names include `case_study_click`, `external_link_click`, `password_unlock_success`/`password_unlock_fail`. New user-facing interactions should follow this pattern.

## Conventions

- Copy uses lowercase-styled headings ("his featured works", "making it easier to fight climate change") — match the existing voice when editing content.
- When changing page content, keep the corresponding HTML head metadata (meta description, OG/Twitter tags, JSON-LD) and `public/sitemap.xml` / `public/llms.txt` in sync.
