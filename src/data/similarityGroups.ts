import { SimilarityGroup } from '../types';

export const SIMILARITY_GROUPS: SimilarityGroup[] = [
  {
    id: 'neo-grotesque',
    label: 'Neo-Grotesque',
    description: 'Clean Swiss-style sans — neutral, versatile, highly readable at any size',
    representativeId: 'inter',
  },
  {
    id: 'humanist-sans',
    label: 'Humanist Sans',
    description: 'Warmth of hand-lettering meets rationality of sans-serif — approachable, natural',
    representativeId: 'manrope',
  },
  {
    id: 'geometric-sans',
    label: 'Geometric Sans',
    description: 'Circular forms and mathematical precision — clean, modern, confident',
    representativeId: 'poppins',
  },
  {
    id: 'modern-grotesk',
    label: 'Modern Grotesk',
    description: 'Contemporary display grotesque — opinionated details, strong personality',
    representativeId: 'space-grotesk',
  },
  {
    id: 'minimal-elegant',
    label: 'Minimal & Elegant',
    description: 'Refined and understated — premium minimalism, sophisticated restraint',
    representativeId: 'urbanist',
  },
  {
    id: 'condensed-display',
    label: 'Condensed Display',
    description: 'Narrow, space-efficient forms — high impact headlines, bold authority',
    representativeId: 'oswald',
  },
  {
    id: 'tech-futuristic',
    label: 'Tech & Futuristic',
    description: 'Geometric, sci-fi influenced — digital, technical, forward-looking brands',
    representativeId: 'exo-2',
  },
  {
    id: 'rounded-sans',
    label: 'Rounded Sans',
    description: 'Soft rounded terminals — friendly, approachable, playful personality',
    representativeId: 'nunito',
  },
  {
    id: 'artistic-display',
    label: 'Artistic Display',
    description: 'Creative, expressive, unconventional — strong visual character for bold brands',
    representativeId: 'syne',
  },
  {
    id: 'display-serif',
    label: 'Display Serif',
    description: 'High-contrast elegant serifs — luxury, editorial, timeless sophistication',
    representativeId: 'playfair-display',
  },
  {
    id: 'text-serif',
    label: 'Text Serif',
    description: 'Highly readable workhorse serifs — literary, editorial, trusted and warm',
    representativeId: 'lora',
  },
  {
    id: 'slab-serif',
    label: 'Slab Serif',
    description: 'Square bracket serifs — sturdy, industrial, bold and authoritative',
    representativeId: 'zilla-slab',
  },
  {
    id: 'editorial-serif',
    label: 'Editorial Serif',
    description: 'Optically expressive — designed for brand and editorial display use',
    representativeId: 'fraunces',
  },
  {
    id: 'ibm-plex-family',
    label: 'IBM Plex Family',
    description: 'IBM\'s corporate super-family — systematic, technical, coherent across variants',
    representativeId: 'ibm-plex-sans',
  },
  {
    id: 'source-family',
    label: 'Adobe Source Family',
    description: 'Adobe\'s open-source super-family — Sans, Serif, and Code designed together',
    representativeId: 'source-sans-3',
  },
  {
    id: 'coding-mono',
    label: 'Coding Mono',
    description: 'Monospaced fonts built for code — technical brand identity, developer tools',
    representativeId: 'jetbrains-mono',
  },
  {
    id: 'display-mono',
    label: 'Display Mono',
    description: 'Monospaced with character — retro, typewriter aesthetic, editorial identity',
    representativeId: 'space-mono',
  },
  {
    id: 'monaspace-family',
    label: 'Monaspace',
    description: 'GitHub\'s metrics-compatible mono super-family — 5 interchangeable variants',
    representativeId: 'monaspace-neon',
  },
  {
    id: 'handwritten',
    label: 'Handwritten',
    description: 'Script and hand-lettered styles — personal, creative, casual warmth',
    representativeId: 'caveat',
  },
  {
    id: 'system-grotesque',
    label: 'System Grotesque (Zero-load)',
    description: 'Native OS sans-serif stacks — instant render, no network requests ever',
    representativeId: 'system-ui-stack',
  },
  {
    id: 'system-serif',
    label: 'System Serif (Zero-load)',
    description: 'Native OS serif stacks — elegant fallbacks already on every device',
    representativeId: 'system-transitional',
  },
  {
    id: 'system-special',
    label: 'System Rounded & Mono (Zero-load)',
    description: 'Native OS rounded and monospaced stacks',
    representativeId: 'system-rounded',
  },
  {
    id: 'monotalic-family',
    label: 'Monotalic Family',
    description: 'A unique mono-italic hybrid super-family — Regular, Narrow, and Wide share the same oblique DNA',
    representativeId: 'monotalic',
  },
  {
    id: 'microsoft-cleartype',
    label: 'Microsoft ClearType',
    description: 'Microsoft\'s 6-font ClearType collection — designed together for screen readability on Windows Vista+',
    representativeId: 'calibri',
  },
  {
    id: 'windows-display',
    label: 'Windows Display',
    description: 'Premium Windows-exclusive display fonts — Gill Sans Nova, Rockwell Nova, Georgia Pro and more',
    representativeId: 'gill-sans-nova',
  },
];

/** O(1) lookup by group id */
export const GROUP_MAP: Record<string, SimilarityGroup> = Object.fromEntries(
  SIMILARITY_GROUPS.map((g) => [g.id, g])
);
