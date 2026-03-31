import { FontConfig } from '../../types';

// ══════════════════════════════════════════════════════════
//  CONDENSED DISPLAY — Narrow, high-impact
// ══════════════════════════════════════════════════════════
export const CONDENSED_DISPLAY: FontConfig[] = [
  {
    id: 'oswald', name: 'Oswald', family: 'Oswald', category: 'geometric', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Oswald:wght@200;300;400;500;600;700',
    previewWeight: 700, weights: [200, 300, 400, 500, 600, 700],
    description: 'Condensed sans designed for web — strong, impactful, commanding presence',
    pairedWith: ['libre-baskerville', 'merriweather'],
  },
  {
    id: 'barlow', name: 'Barlow', family: 'Barlow', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Barlow:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Slightly condensed sans — efficient, clean, utilitarian',
    pairedWith: ['bitter', 'zilla-slab'],
  },
  {
    id: 'barlow-condensed', name: 'Barlow Condensed', family: 'Barlow Condensed', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Barlow+Condensed:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Condensed Barlow — space-efficient, bold display personality',
  },
  {
    id: 'bebas-neue', name: 'Bebas Neue', family: 'Bebas Neue', category: 'geometric', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Bebas+Neue',
    previewWeight: 400, weights: [400],
    description: 'All-caps condensed display — bold, powerful, strong identity',
  },
  {
    id: 'anton', name: 'Anton', family: 'Anton', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Anton',
    previewWeight: 400, weights: [400],
    description: 'Heavy condensed grotesque — maximum impact, commanding headlines',
  },
  {
    id: 'teko', name: 'Teko', family: 'Teko', category: 'geometric', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Teko:wght@300;400;500;600;700',
    previewWeight: 600, weights: [300, 400, 500, 600, 700],
    description: 'Indian script-inspired condensed — technical, bold, modern energy',
  },
  {
    id: 'big-shoulders-display', name: 'Big Shoulders Display', family: 'Big Shoulders Display', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Big+Shoulders+Display:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Condensed display inspired by Chicago signage — industrial, bold, American',
  },
  // ── New additions ──
  {
    id: 'fjalla-one', name: 'Fjalla One', family: 'Fjalla One', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Fjalla+One',
    previewWeight: 400, weights: [400],
    description: 'Scandinavian condensed grotesque — bold, no-nonsense, strong headlines',
  },
  {
    id: 'francois-one', name: 'Francois One', family: 'Francois One', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Francois+One',
    previewWeight: 400, weights: [400],
    description: 'Impact-style condensed — maximum headline weight, assertive presence',
  },
  {
    id: 'alumni-sans', name: 'Alumni Sans', family: 'Alumni Sans', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Alumni+Sans:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Condensed academic grotesque — refined, versatile, collegiate character',
  },
  {
    id: 'squada-one', name: 'Squada One', family: 'Squada One', category: 'geometric', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Squada+One',
    previewWeight: 400, weights: [400],
    description: 'Square condensed display — geometric, tech-adjacent, bold statement',
  },
  {
    id: 'league-spartan', name: 'League Spartan', family: 'League Spartan', category: 'geometric', source: 'google',
    group: 'condensed-display',
    googleFamily: 'League+Spartan:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Bold geometric grotesque — strong, confident, popular for logo and brand display',
  },
  {
    id: 'barlow-semi-condensed', name: 'Barlow Semi Condensed', family: 'Barlow Semi Condensed', category: 'sans', source: 'google',
    group: 'condensed-display',
    googleFamily: 'Barlow+Semi+Condensed:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Slightly narrower Barlow — efficient and clean without full condensation',
  },
];

// ══════════════════════════════════════════════════════════
//  TECH & FUTURISTIC — Forward-looking, engineered
// ══════════════════════════════════════════════════════════
export const TECH_FUTURISTIC: FontConfig[] = [
  {
    id: 'exo-2', name: 'Exo 2', family: 'Exo 2', category: 'geometric', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Exo+2:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Geometric humanist — futuristic yet readable, tech and lifestyle brands',
    pairedWith: ['source-serif-4'],
  },
  {
    id: 'unbounded', name: 'Unbounded', family: 'Unbounded', category: 'sans', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Unbounded:wght@200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Futuristic and bold — high-impact, avant-garde brands',
  },
  {
    id: 'orbitron', name: 'Orbitron', family: 'Orbitron', category: 'geometric', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Orbitron:wght@400;500;600;700;800;900',
    previewWeight: 700, weights: [400, 500, 600, 700, 800, 900],
    description: 'Space-age geometric — sci-fi, gaming, futuristic technology brands',
  },
  {
    id: 'rajdhani', name: 'Rajdhani', family: 'Rajdhani', category: 'sans', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Rajdhani:wght@300;400;500;600;700',
    previewWeight: 700, weights: [300, 400, 500, 600, 700],
    description: 'Devanagari-influenced sans — technical, angular, modern',
  },
  {
    id: 'audiowide', name: 'Audiowide', family: 'Audiowide', category: 'sans', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Audiowide',
    previewWeight: 400, weights: [400],
    description: 'Electronic and futuristic — music tech, gaming, sci-fi aesthetic',
  },
  // ── New additions ──
  {
    id: 'electrolize', name: 'Electrolize', family: 'Electrolize', category: 'sans', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Electrolize',
    previewWeight: 400, weights: [400],
    description: 'Electronic display typeface — clean tech, HUD interfaces, precision',
  },
  {
    id: 'nova-square', name: 'Nova Square', family: 'Nova Square', category: 'geometric', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Nova+Square',
    previewWeight: 400, weights: [400],
    description: 'Square geometric — retro-futuristic, bold tech personality',
  },
  {
    id: 'oxanium', name: 'Oxanium', family: 'Oxanium', category: 'geometric', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Oxanium:wght@200;300;400;500;600;700;800',
    previewWeight: 700, weights: [200, 300, 400, 500, 600, 700, 800],
    description: 'Futuristic variable font — gaming, esports, digital technology brands',
  },
  {
    id: 'aldrich', name: 'Aldrich', family: 'Aldrich', category: 'sans', source: 'google',
    group: 'tech-futuristic',
    googleFamily: 'Aldrich',
    previewWeight: 400, weights: [400],
    description: 'Clean futuristic grotesque — modern tech, digital product identity',
  },
];

// ══════════════════════════════════════════════════════════
//  ROUNDED SANS — Soft, friendly, approachable
// ══════════════════════════════════════════════════════════
export const ROUNDED_SANS: FontConfig[] = [
  {
    id: 'nunito', name: 'Nunito', family: 'Nunito', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Nunito:wght@200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Well-balanced rounded sans — friendly, modern, highly versatile',
    pairedWith: ['playfair-display', 'eb-garamond'],
  },
  {
    id: 'fredoka', name: 'Fredoka', family: 'Fredoka', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Fredoka:wght@300;400;500;600;700',
    previewWeight: 600, weights: [300, 400, 500, 600, 700],
    description: 'Playful and expressive — joyful, youthful brands',
  },
  {
    id: 'comfortaa', name: 'Comfortaa', family: 'Comfortaa', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Comfortaa:wght@300;400;500;600;700',
    previewWeight: 700, weights: [300, 400, 500, 600, 700],
    description: 'Very rounded and soft — gentle, approachable personality',
  },
  {
    id: 'quicksand', name: 'Quicksand', family: 'Quicksand', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Quicksand:wght@300;400;500;600;700',
    previewWeight: 700, weights: [300, 400, 500, 600, 700],
    description: 'Light and airy — clean rounded strokes, casual elegance',
  },
  {
    id: 'varela-round', name: 'Varela Round', family: 'Varela Round', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Varela+Round',
    previewWeight: 400, weights: [400],
    description: 'Minimalist rounded sans — soft but not overly playful',
  },
  {
    id: 'shantell-sans', name: 'Shantell Sans', family: 'Shantell Sans', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Shantell+Sans:wght@300;400;500;600;700;800',
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800],
    description: 'Handcrafted personality — joyful, distinctive, human',
  },
  // ── New additions ──
  {
    id: 'baloo-2', name: 'Baloo 2', family: 'Baloo 2', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Baloo+2:wght@400;500;600;700;800',
    previewWeight: 700, weights: [400, 500, 600, 700, 800],
    description: 'Expressive multilingual rounded — joyful, energetic, excellent display',
  },
  {
    id: 'grandstander', name: 'Grandstander', family: 'Grandstander', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Grandstander:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Bold rounded display — playful athletic energy, wide weight range',
  },
  {
    id: 'gochi-hand', name: 'Gochi Hand', family: 'Gochi Hand', category: 'rounded', source: 'google',
    group: 'rounded-sans',
    googleFamily: 'Gochi+Hand',
    previewWeight: 400, weights: [400],
    description: 'Casual hand-drawn rounded sans — friendly, informal, approachable',
  },
];

// ══════════════════════════════════════════════════════════
//  ARTISTIC DISPLAY — Creative, expressive, bold
// ══════════════════════════════════════════════════════════
export const ARTISTIC_DISPLAY: FontConfig[] = [
  {
    id: 'syne', name: 'Syne', family: 'Syne', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Syne:wght@400;500;600;700;800',
    previewWeight: 700, weights: [400, 500, 600, 700, 800],
    description: 'Contemporary and artistic — creative, bold brand expression',
    pairedWith: ['source-serif-4', 'lora'],
  },
  {
    id: 'righteous', name: 'Righteous', family: 'Righteous', category: 'geometric', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Righteous',
    previewWeight: 400, weights: [400],
    description: 'Art Deco inspired — playful, retro-modern, strong character',
  },
  {
    id: 'russo-one', name: 'Russo One', family: 'Russo One', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Russo+One',
    previewWeight: 400, weights: [400],
    description: 'Single heavy weight — bold, impactful, strong brand presence',
  },
  {
    id: 'staatliches', name: 'Staatliches', family: 'Staatliches', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Staatliches',
    previewWeight: 400, weights: [400],
    description: 'Ultra-compressed display — Bauhaus-influenced, dramatic and distinctive',
  },
  // ── New additions ──
  {
    id: 'bungee', name: 'Bungee', family: 'Bungee', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Bungee',
    previewWeight: 400, weights: [400],
    description: 'Vertical signage-inspired — bold, urban, street-style energy',
  },
  {
    id: 'bowlby-one', name: 'Bowlby One', family: 'Bowlby One', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Bowlby+One',
    previewWeight: 400, weights: [400],
    description: 'Heavy display with a cartoonish warmth — fun, loud, memorable',
  },
  {
    id: 'lilita-one', name: 'Lilita One', family: 'Lilita One', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Lilita+One',
    previewWeight: 400, weights: [400],
    description: 'Ultra-bold rounded display — energetic, impactful, Latin-influenced',
  },
  {
    id: 'bangers', name: 'Bangers', family: 'Bangers', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Bangers',
    previewWeight: 400, weights: [400],
    description: 'Comic book lettering — dynamic, action-packed, pop culture appeal',
  },
  {
    id: 'ultra', name: 'Ultra', family: 'Ultra', category: 'serif', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Ultra',
    previewWeight: 400, weights: [400],
    description: 'Extreme weight display serif — maximum gravity, headline dominance',
  },
  {
    id: 'black-ops-one', name: 'Black Ops One', family: 'Black Ops One', category: 'sans', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Black+Ops+One',
    previewWeight: 400, weights: [400],
    description: 'Military-stencil display — industrial, tactical, gaming aesthetic',
  },
  {
    id: 'red-hat-display', name: 'Red Hat Display', family: 'Red Hat Display', category: 'grotesk', source: 'google',
    group: 'artistic-display',
    googleFamily: 'Red+Hat+Display:wght@300;400;500;600;700;800;900',
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800, 900],
    description: 'Red Hat\'s brand font — bold, expressive, open-source tech brand character',
  },
];

export const DISPLAY_FONTS: FontConfig[] = [
  ...CONDENSED_DISPLAY,
  ...TECH_FUTURISTIC,
  ...ROUNDED_SANS,
  ...ARTISTIC_DISPLAY,
];
