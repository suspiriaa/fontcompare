BRAND TYPOGRAPHY TESTER — LOCAL FONTS DIRECTORY
================================================

Drop your font files (.ttf, .otf, .woff, .woff2) here.

To register a local font in the app:
  1. Copy your font files into this folder (e.g. MyFont-Regular.woff2)
  2. Open: src/data/fonts/index.ts (or any sub-module)
  3. Add a new entry to FONT_LIBRARY following this template:

  {
    id: 'my-font',
    name: 'My Font',
    family: 'MyFont',
    category: 'sans',          // sans | serif | rounded | geometric | grotesk | mono
    source: 'local',
    localFiles: {
      '400': '/fonts/MyFont-Regular.woff2',
      '700': '/fonts/MyFont-Bold.woff2',
    },
    previewWeight: 700,
    weights: [400, 700],
    tags: ['custom'],
    description: 'My custom brand font',
  },

  4. Restart the dev server (npm run dev) — your font will appear in the list.

Supported formats: .woff2 (recommended), .woff, .ttf, .otf
