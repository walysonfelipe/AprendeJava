# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static single-page website — a Java + Spring Boot study plan ("Plano de Estudos Java"). It is a pure HTML/CSS/JS project with no build step, no package manager, and no framework dependencies.

## Running the Project

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

> Note: YouTube playlist embeds are disabled when opened via `file://` protocol (YouTube Error 153). Use a local HTTP server to test the full carousel behavior.

## Architecture

Everything lives in two files:

- **`index.html`** — structure + all JavaScript (inline `<script>` at the bottom)
- **`style.css`** — all styles, including dark theme, loading screen, phase cards, and video carousel

### JavaScript structure (inside `index.html`)

| Section | What it does |
|---|---|
| `const videos = [...]` | Array of YouTube video/playlist objects rendered into the carousel |
| `getYouTubeEmbedUrl()` | Converts YouTube URLs to embed format; strips playlist param when on `file://` |
| `buildCarousel()` (IIFE) | Dynamically creates carousel slides and dot indicators from `videos` |
| `const phases = [...]` | Array of study phase objects (title, badge, groups/topics, resources, tip) |
| Phase rendering loop | Creates collapsible `.phase` cards from the `phases` array |
| `toggle(i)` | Expands/collapses a phase body by toggling `.open` class |
| Loading screen IIFE | 5-second animated loader: shows `cats.webp` for first 3s, swaps to `ads.png` for last 2s with easing progress bar |
| Carousel logic IIFE | Handles prev/next buttons, dot navigation, and touch swipe |

### Adding content

- **New video**: add an object `{ url, nome, canal }` to the `videos` array
- **New study phase**: add an object to the `phases` array — use `groups` (array of `{ label, items }`) for detailed phases or `topics` (flat string array) for simpler ones
- **New badge color**: add a `.badge-{name}` rule in `style.css` and reference it in the phase's `badge` field
