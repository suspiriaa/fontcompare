export interface LogoMark {
  id: string;
  name: string;
  category: 'geometric' | 'angular' | 'organic' | 'abstract' | 'symbol';
  /** SVG inner content — uses fill/stroke from root element */
  path: string;
}

// All marks are designed for a 32×32 viewBox.
// Solid shapes inherit fill from the root <svg fill="..."> attribute.
// Stroke-only shapes set fill="none" inline and inherit stroke from root.

export const LOGO_MARKS: LogoMark[] = [

  // ── GEOMETRIC ─────────────────────────────────────────────────────────────
  {
    id: 'circle',
    name: 'Circle',
    category: 'geometric',
    path: '<circle cx="16" cy="16" r="14"/>',
  },
  {
    id: 'ring',
    name: 'Ring',
    category: 'geometric',
    path: '<circle cx="16" cy="16" r="11" fill="none" stroke-width="5"/>',
  },
  {
    id: 'rounded-square',
    name: 'Rounded Square',
    category: 'geometric',
    path: '<rect x="2" y="2" width="28" height="28" rx="7"/>',
  },
  {
    id: 'square',
    name: 'Square',
    category: 'geometric',
    path: '<rect x="2" y="2" width="28" height="28"/>',
  },
  {
    id: 'pill',
    name: 'Pill',
    category: 'geometric',
    path: '<rect x="8" y="3" width="16" height="26" rx="8"/>',
  },
  {
    id: 'hexagon',
    name: 'Hexagon',
    category: 'geometric',
    path: '<polygon points="16,3 27.3,9.5 27.3,22.5 16,29 4.7,22.5 4.7,9.5"/>',
  },
  {
    id: 'octagon',
    name: 'Octagon',
    category: 'geometric',
    path: '<polygon points="10,2 22,2 30,10 30,22 22,30 10,30 2,22 2,10"/>',
  },
  {
    id: 'half-circle',
    name: 'Half Circle',
    category: 'geometric',
    path: '<path d="M2 16A14 14 0 0 1 30 16Z"/>',
  },

  // ── ANGULAR ───────────────────────────────────────────────────────────────
  {
    id: 'triangle-up',
    name: 'Triangle',
    category: 'angular',
    path: '<polygon points="16,2 30,29 2,29"/>',
  },
  {
    id: 'diamond',
    name: 'Diamond',
    category: 'angular',
    path: '<polygon points="16,2 30,16 16,30 2,16"/>',
  },
  {
    id: 'pentagon',
    name: 'Pentagon',
    category: 'angular',
    path: '<polygon points="16,2 28.5,11.5 24,27 8,27 3.5,11.5"/>',
  },
  {
    id: 'chevron-right',
    name: 'Chevron',
    category: 'angular',
    path: '<path d="M9 4L23 16L9 28" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'arrow-up',
    name: 'Arrow Up',
    category: 'angular',
    path: '<path d="M16 28V4M6 14L16 4L26 14" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
  },
  {
    id: 'lightning',
    name: 'Lightning',
    category: 'angular',
    path: '<path d="M18 2L6 18H15L14 30L26 14H17L18 2Z"/>',
  },

  // ── ORGANIC ───────────────────────────────────────────────────────────────
  {
    id: 'leaf',
    name: 'Leaf',
    category: 'organic',
    path: '<path d="M16 2C16 2 29 9 29 19C29 25.6 23.1 30.5 16 30C8.9 30.5 3 25.6 3 19C3 9 16 2 16 2Z"/>',
  },
  {
    id: 'teardrop',
    name: 'Teardrop',
    category: 'organic',
    path: '<path d="M16 2L27 20C27 26.1 22.1 31 16 31C9.9 31 5 26.1 5 20L16 2Z"/>',
  },
  {
    id: 'teardrop-inv',
    name: 'Drop Down',
    category: 'organic',
    path: '<path d="M16 30L27 12C27 5.9 22.1 1 16 1C9.9 1 5 5.9 5 12L16 30Z"/>',
  },
  {
    id: 'heart',
    name: 'Heart',
    category: 'organic',
    path: '<path d="M16 28C16 28 3 20 3 12C3 8 6.1 5 10 5C12.5 5 14.8 6.5 16 8.5C17.2 6.5 19.5 5 22 5C25.9 5 29 8 29 12C29 20 16 28 16 28Z"/>',
  },
  {
    id: 'blob',
    name: 'Blob',
    category: 'organic',
    path: '<path d="M24 6C28 9 30 14 29 19C28 24 24 29 19 30C14 31 8 29 5 24C2 19 3 12 7 8C11 4 17 2 21 3C23 3.5 22 3 24 6Z"/>',
  },

  // ── ABSTRACT ──────────────────────────────────────────────────────────────
  {
    id: 'plus',
    name: 'Plus',
    category: 'abstract',
    path: '<rect x="13" y="2" width="6" height="28" rx="3"/><rect x="2" y="13" width="28" height="6" rx="3"/>',
  },
  {
    id: 'dots-grid',
    name: 'Dot Grid',
    category: 'abstract',
    path: '<circle cx="7" cy="7" r="3.5"/><circle cx="16" cy="7" r="3.5"/><circle cx="25" cy="7" r="3.5"/><circle cx="7" cy="16" r="3.5"/><circle cx="16" cy="16" r="3.5"/><circle cx="25" cy="16" r="3.5"/><circle cx="7" cy="25" r="3.5"/><circle cx="16" cy="25" r="3.5"/><circle cx="25" cy="25" r="3.5"/>',
  },
  {
    id: 'lines',
    name: 'Lines',
    category: 'abstract',
    path: '<rect x="2" y="5" width="28" height="4.5" rx="2.5"/><rect x="2" y="14" width="28" height="4.5" rx="2.5"/><rect x="2" y="23" width="28" height="4.5" rx="2.5"/>',
  },
  {
    id: 'arc-pair',
    name: 'Arcs',
    category: 'abstract',
    path: '<path d="M8 3C2 7.5 2 12.5 8 16C2 19.5 2 24.5 8 29" fill="none" stroke-width="4.5" stroke-linecap="round"/><path d="M24 3C30 7.5 30 12.5 24 16C30 19.5 30 24.5 24 29" fill="none" stroke-width="4.5" stroke-linecap="round"/>',
  },
  {
    id: 'wave',
    name: 'Wave',
    category: 'abstract',
    path: '<path d="M2 22C6 14 10 14 14 20C18 26 22 26 26 18" fill="none" stroke-width="5" stroke-linecap="round"/><path d="M6 12C10 4 14 4 18 10C22 16 26 16 30 8" fill="none" stroke-width="5" stroke-linecap="round"/>',
  },
  {
    id: 'infinity',
    name: 'Infinity',
    category: 'abstract',
    path: '<path d="M12 16C12 13.8 13.8 12 16 12C17.5 12 18.6 12.8 20 14.5L20 17.5C18.6 19.2 17.5 20 16 20C13.8 20 12 18.2 12 16ZM20 16C20 13.8 21.8 12 24 12C26.2 12 28 13.8 28 16C28 18.2 26.2 20 24 20C21.8 20 20 18.2 20 16ZM12 16C12 18.2 10.2 20 8 20C5.8 20 4 18.2 4 16C4 13.8 5.8 12 8 12C10.2 12 12 13.8 12 16Z" fill="none" stroke-width="4" stroke-linecap="round"/>',
  },

  // ── SYMBOL ────────────────────────────────────────────────────────────────
  {
    id: 'star-5',
    name: 'Star',
    category: 'symbol',
    path: '<polygon points="16,2 19.6,12 30,12.2 21.8,19 24.8,29.5 16,23.3 7.2,29.5 10.2,19 2,12.2 12.4,12"/>',
  },
  {
    id: 'star-4',
    name: 'Sparkle',
    category: 'symbol',
    path: '<polygon points="16,3 19,13 29,16 19,19 16,29 13,19 3,16 13,13"/>',
  },
  {
    id: 'shield',
    name: 'Shield',
    category: 'symbol',
    path: '<path d="M16 2L29 7.5V17.5C29 24.5 23 29.5 16 31C9 29.5 3 24.5 3 17.5V7.5L16 2Z"/>',
  },
  {
    id: 'moon',
    name: 'Crescent',
    category: 'symbol',
    path: '<path d="M20 16C20 21.5 16.8 26.2 12 28C18.7 28 24 22.6 24 16C24 9.4 18.7 4 12 4C16.8 5.8 20 10.5 20 16Z"/>',
  },
];

// ─── Utility ──────────────────────────────────────────────────────────────────

/** Convert a logo mark + color to a data URL usable as img src */
export function markToDataUrl(mark: LogoMark, color = '#18181B'): string {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"`,
    ` fill="${color}" stroke="${color}">`,
    mark.path,
    `</svg>`,
  ].join('');
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const MARK_CATEGORIES: { value: LogoMark['category']; label: string }[] = [
  { value: 'geometric', label: 'Geometric' },
  { value: 'angular', label: 'Angular' },
  { value: 'organic', label: 'Organic' },
  { value: 'abstract', label: 'Abstract' },
  { value: 'symbol', label: 'Symbol' },
];
