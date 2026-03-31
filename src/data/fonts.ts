// Font library is split into modules under ./fonts/
// Edit individual category files to add or modify fonts:
//   grotesks.ts   — neo-grotesque, humanist-sans, geometric-sans, modern-grotesk, minimal-elegant
//   serifs.ts     — display-serif, text-serif, slab-serif, editorial-serif, IBM Plex, Source Serif
//   display.ts    — condensed-display, tech-futuristic, rounded-sans, artistic-display
//   mono.ts       — coding-mono, display-mono, monaspace-family, Source family
//   handwritten.ts — script and hand-lettered fonts
//   system.ts     — zero-load system font stacks
//   presets.ts    — curated preset collections

export { FONT_LIBRARY, PRESETS } from './fonts/index';

// ─── Local Font Template ──────────────────────────────────────────────────────
// Add entries directly to the relevant category file above.
// Place font files in /public/fonts/ and use source: 'local'.
//
// {
//   id: 'my-font',
//   name: 'My Custom Font',
//   family: 'MyFont',
//   category: 'sans',
//   source: 'local',
//   group: 'geometric-sans',
//   localFiles: {
//     '400': '/fonts/MyFont-Regular.woff2',
//     '700': '/fonts/MyFont-Bold.woff2',
//   },
//   previewWeight: 700,
//   weights: [400, 700],
//   description: 'My custom brand font',
// },
