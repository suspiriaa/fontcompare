import { FontConfig } from '../types';

const loadedFonts = new Set<string>();

/** Inject a Google Fonts <link> tag for the given font config */
function loadGoogleFont(font: FontConfig): void {
  if (!font.googleFamily) return;
  const url = `https://fonts.googleapis.com/css2?family=${font.googleFamily}&display=swap`;
  if (loadedFonts.has(url)) return;
  loadedFonts.add(url);

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = url;
  document.head.appendChild(link);
}

/** Inject @font-face rules for a local font config */
function loadLocalFont(font: FontConfig): void {
  if (!font.localFiles) return;
  const styleId = `font-face-${font.id}`;
  if (document.getElementById(styleId)) return;

  const rules = Object.entries(font.localFiles)
    .map(([weight, path]) => {
      const format = path.endsWith('.woff2')
        ? 'woff2'
        : path.endsWith('.woff')
        ? 'woff'
        : path.endsWith('.otf')
        ? 'opentype'
        : 'truetype';
      return `
        @font-face {
          font-family: '${font.family}';
          src: url('${path}') format('${format}');
          font-weight: ${weight};
          font-style: normal;
          font-display: swap;
        }`;
    })
    .join('\n');

  const style = document.createElement('style');
  style.id = styleId;
  style.textContent = rules;
  document.head.appendChild(style);
}

/** Load a single font (google, local, cdn, system, or typekit) */
export function loadFont(font: FontConfig): void {
  if (font.source === 'system' || font.source === 'typekit') {
    // System and Typekit fonts are already available — nothing to inject
    // (Typekit CSS is loaded globally via <link> in index.html)
    return;
  }
  if (font.source === 'google') {
    loadGoogleFont(font);
  } else {
    // Both 'local' and 'cdn' use @font-face injection —
    // the difference is only in where the URL points (local file vs remote CDN).
    loadLocalFont(font);
  }
}

/** Load all fonts in the library */
export function loadAllFonts(fonts: FontConfig[]): void {
  fonts.forEach(loadFont);
}

/** Wait for all document fonts to be ready */
export function waitForFonts(): Promise<void> {
  return document.fonts.ready.then(() => {});
}
