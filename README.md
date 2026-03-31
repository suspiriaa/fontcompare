# Brand Typography Tester

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A fast, browser-based tool for comparing and testing fonts for brand identity work.
Built for designers who need to quickly evaluate typeface options against real brand copy.

**Live demo → [fontcompare-peach.vercel.app](https://fontcompare-peach.vercel.app)**

---

## Features

- **200+ fonts** — Google Fonts, CDN-hosted, Adobe Fonts (Typekit), Windows system fonts
- **8 preview modes** — Brand Board, Wordmark, Logo + Wordmark, Web Header, Mobile Bar, App Icon, Type Scale, Logomark Grid
- **Grouped font library** — similar fonts grouped together (e.g. Helvetica-style, Garamond-style)
- **Lazy loading** — fonts load only when scrolled into view
- **Live controls** — font size, tracking, line-height, case mode, dark/light background
- **Logo upload** — drag-and-drop PNG/SVG to preview against your own brand mark, or pick from 28 built-in marks
- **Search & filter** — by category, source (Google / Adobe / System / CDN), or preset
- **Presets** — curated font selections for common brand archetypes
- **Favorites / shortlist** — star fonts, view finalists in Review Board
- **Review Board** — numbered finalists with notes for team feedback
- **Export** — PNG (2×) and PDF from Export modal or Review Board
- **Session save/load** — auto-saved to localStorage; manual save/load as JSON

---

## Running Locally

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

---

## Project Structure

```
src/
├── components/
│   ├── TopBar.tsx          Navigation + actions
│   ├── SettingsPanel.tsx   Brand text inputs + display controls
│   ├── FilterBar.tsx       Search, category/source filters, presets
│   ├── PreviewArea.tsx     Scrollable font card grid
│   ├── FontCard.tsx        Individual font preview (all modes)
│   ├── ReviewBoard.tsx     Favorites board with notes + export
│   ├── ExportModal.tsx     Export modal (PNG / PDF)
│   ├── LogoUploader.tsx    Logo drag-and-drop + built-in mark library
│   └── LogoLibrary.tsx     28 built-in logo marks (SVG)
├── context/
│   └── AppContext.tsx      Global state (React Context + useReducer)
├── data/
│   ├── fonts/
│   │   ├── index.ts        Aggregator — combines all font modules
│   │   ├── grotesks.ts     Neo-grotesque, humanist, geometric, modern
│   │   ├── serifs.ts       Display serif, text serif, slab, editorial
│   │   ├── display.ts      Condensed, tech, rounded, artistic
│   │   ├── mono.ts         Coding and display monospace
│   │   ├── handwritten.ts  Script and handwritten fonts
│   │   ├── system.ts       Cross-platform system font stacks
│   │   ├── windows.ts      Windows-specific ClearType + display fonts
│   │   ├── typekit.ts      Adobe Fonts via Typekit
│   │   ├── presets.ts      Named preset collections
│   │   └── constants.ts    CDN base URLs
│   ├── fonts.ts            Re-export shim
│   ├── similarityGroups.ts Font similarity/grouping definitions
│   └── logoMarks.ts        Built-in SVG logo marks
├── hooks/
│   └── useLazyFont.ts      IntersectionObserver-based font lazy loader
├── types/index.ts
└── utils/
    ├── fontLoader.ts       Font injection (Google / CDN / local)
    ├── export.ts           PNG + PDF export
    └── textUtils.ts        Case transforms + size scaling
```

---

## Adding Fonts

### Local font files

1. Drop files into **`public/fonts/`** (`.woff2`, `.woff`, `.ttf`, `.otf`)
2. Add an entry in `src/data/fonts/` (any module, or a new one):

```ts
{
  id: 'my-font',
  name: 'My Font',
  family: 'MyFont',
  category: 'sans',
  source: 'local',
  localFiles: {
    '400': '/fonts/MyFont-Regular.woff2',
    '700': '/fonts/MyFont-Bold.woff2',
  },
  previewWeight: 700,
  weights: [400, 700],
  tags: ['custom'],
}
```

### Google Fonts

```ts
{
  id: 'some-font',
  name: 'Some Font',
  family: 'Some Font',
  category: 'geometric',
  source: 'google',
  googleFamily: 'Some+Font:wght@400;700',
  previewWeight: 700,
  weights: [400, 700],
}
```

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5**
- **Tailwind CSS 3**
- **html2canvas** — DOM-to-canvas for PNG export
- **jsPDF** — PDF generation
- **lucide-react** — icons

---

## Fonts & Sources

| Source | Provider | License |
|--------|----------|---------|
| Google Fonts | [fonts.google.com](https://fonts.google.com) | SIL Open Font License |
| Fontsource CDN | [fontsource.org](https://fontsource.org) | SIL Open Font License |
| Monaspace | [GitHub Next](https://github.com/githubnext/monaspace) | SIL Open Font License |
| Adobe Fonts | [fonts.adobe.com](https://fonts.adobe.com) | Personal subscription — kit is domain-locked |
| System fonts | OS-provided | Platform license |

Fonts are loaded on demand (lazy) and are not bundled or redistributed in this repository.

---

## Attribution

Repositories whose assets or CDN endpoints are directly used in this project:

| Repo | Usage |
|------|-------|
| [githubnext/monaspace](https://github.com/githubnext/monaspace) | Monaspace font family served via jsDelivr CDN |
| [fontsource/fontsource](https://github.com/fontsource/fontsource) | Self-hostable font CDN endpoints used for select fonts |

---

## Acknowledgements

Inspired by the workflow of brand and type designers who manually compare typefaces in Figma or static mockups. This tool aims to make that process faster and more interactive in the browser.

General inspiration from:
- [Google Fonts](https://fonts.google.com) — font discovery and preview UX
- [Fontjoy](https://fontjoy.com) — font pairing exploration
- [Typewolf](https://www.typewolf.com) — editorial typography references
