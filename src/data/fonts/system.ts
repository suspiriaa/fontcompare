import { FontConfig } from '../../types';

// ══════════════════════════════════════════════════════════
//  SYSTEM GROTESQUE — Zero-load native OS stacks
// ══════════════════════════════════════════════════════════
export const SYSTEM_GROTESQUE: FontConfig[] = [
  {
    id: 'system-ui-stack', name: 'System UI', category: 'grotesk', source: 'system',
    group: 'system-grotesque',
    family: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'The OS default UI font — feels native, zero latency, highly readable',
  },
  {
    id: 'system-neo-grotesque', name: 'Neo-Grotesque (System)', category: 'grotesk', source: 'system',
    group: 'system-grotesque',
    family: 'Inter, Roboto, "Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System neo-grotesque stack — Inter if available, graceful fallbacks',
  },
  {
    id: 'system-humanist', name: 'Humanist (System)', category: 'sans', source: 'system',
    group: 'system-grotesque',
    family: 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", source-sans-pro, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System humanist stack — warm, friendly, naturally approachable',
  },
  {
    id: 'system-geometric-humanist', name: 'Geometric Humanist (System)', category: 'geometric', source: 'system',
    group: 'system-grotesque',
    family: 'Avenir, Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System geometric stack — Avenir on Apple, Montserrat elsewhere',
  },
  {
    id: 'system-classical-humanist', name: 'Classical Humanist (System)', category: 'sans', source: 'system',
    group: 'system-grotesque',
    family: 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System classical stack — Optima on Apple, elegant flared strokes',
  },
  {
    id: 'system-industrial', name: 'Industrial (System)', category: 'sans', source: 'system',
    group: 'system-grotesque',
    family: 'Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System industrial stack — Bahnschrift on Windows, condensed authority',
  },
];

// ══════════════════════════════════════════════════════════
//  SYSTEM SERIF — Zero-load native OS stacks
// ══════════════════════════════════════════════════════════
export const SYSTEM_SERIF: FontConfig[] = [
  {
    id: 'system-transitional', name: 'Transitional (System)', category: 'serif', source: 'system',
    group: 'system-serif',
    family: 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System transitional serif — Charter on Apple, Cambria on Windows',
  },
  {
    id: 'system-old-style', name: 'Old Style (System)', category: 'serif', source: 'system',
    group: 'system-serif',
    family: '"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System old-style serif — Iowan on Apple, Palatino on Windows',
  },
  {
    id: 'system-slab-serif', name: 'Slab Serif (System)', category: 'serif', source: 'system',
    group: 'system-serif',
    family: 'Rockwell, "Rockwell Nova", "Roboto Slab", "DejaVu Serif", "Sitka Small", serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System slab serif stack — Rockwell on Windows, bold geometric serifs',
  },
  {
    id: 'system-antique', name: 'Antique (System)', category: 'serif', source: 'system',
    group: 'system-serif',
    family: 'Superclarendon, "Bookman Old Style", "URW Bookman", "URW Bookman L", "Georgia Pro", Georgia, serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System antique serif — Clarendon-inspired, editorial personality',
  },
  {
    id: 'system-didone', name: 'Didone (System)', category: 'serif', source: 'system',
    group: 'system-serif',
    family: 'Didot, "Bodoni MT", "Noto Serif Display", "URW Palladio L", P052, Sylfaen, serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System Didone stack — extreme contrast serifs, luxury editorial',
  },
];

// ══════════════════════════════════════════════════════════
//  SYSTEM SPECIAL — Rounded & Mono stacks
// ══════════════════════════════════════════════════════════
export const SYSTEM_SPECIAL: FontConfig[] = [
  {
    id: 'system-rounded', name: 'Rounded Sans (System)', category: 'rounded', source: 'system',
    group: 'system-special',
    family: 'ui-rounded, "Hiragino Maru Gothic ProN", Quicksand, Comfortaa, Manjari, "Arial Rounded MT Bold", Calibri, source-sans-pro, sans-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'System rounded stack — native rounded sans, friendly and approachable',
  },
  {
    id: 'system-mono-code', name: 'Monospace Code (System)', category: 'mono', source: 'system',
    group: 'system-special',
    family: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, "DejaVu Sans Mono", monospace',
    previewWeight: 400, weights: [400, 700],
    description: 'System code mono stack — native IDE font on every platform',
  },
  {
    id: 'system-mono-slab', name: 'Monospace Slab (System)', category: 'mono', source: 'system',
    group: 'system-special',
    family: '"Nimbus Mono PS", "Courier New", monospace',
    previewWeight: 400, weights: [400, 700],
    description: 'System slab mono — Courier-derived, classic typewriter personality',
  },
];

export const SYSTEM_FONTS: FontConfig[] = [
  ...SYSTEM_GROTESQUE,
  ...SYSTEM_SERIF,
  ...SYSTEM_SPECIAL,
];
