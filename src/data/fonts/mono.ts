import { FontConfig } from '../../types';
import { FS_CDN, MONO_CDN } from './constants';

// ══════════════════════════════════════════════════════════
//  ADOBE SOURCE FAMILY — Open-source super-family (sans + code)
// ══════════════════════════════════════════════════════════
export const SOURCE_FAMILY: FontConfig[] = [
  {
    id: 'source-sans-3', name: 'Source Sans 3', family: 'Source Sans 3', category: 'sans', source: 'google',
    group: 'source-family',
    googleFamily: 'Source+Sans+3:wght@200;300;400;500;600;700;800;900',
    previewWeight: 700, weights: [200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Adobe\'s workhorse sans — highly readable, extremely versatile',
    pairedWith: ['source-serif-4'],
  },
  {
    id: 'source-code-pro', name: 'Source Code Pro', family: 'Source Code Pro', category: 'mono', source: 'google',
    group: 'source-family',
    googleFamily: 'Source+Code+Pro:wght@200;300;400;500;600;700;900',
    previewWeight: 600, weights: [200, 300, 400, 500, 600, 700, 900],
    description: 'Adobe\'s elegant mono — exceptionally readable, refined proportions',
    pairedWith: ['source-sans-3', 'source-serif-4'],
  },
];

// ══════════════════════════════════════════════════════════
//  IBM PLEX MONO
// ══════════════════════════════════════════════════════════
export const IBM_PLEX_MONO: FontConfig[] = [
  {
    id: 'ibm-plex-mono', name: 'IBM Plex Mono', family: 'IBM Plex Mono', category: 'mono', source: 'google',
    group: 'ibm-plex-family',
    googleFamily: 'IBM+Plex+Mono:wght@100;200;300;400;500;600;700',
    previewWeight: 600, weights: [100, 200, 300, 400, 500, 600, 700],
    description: 'IBM\'s elegant mono — cleaner and more refined than most',
    pairedWith: ['ibm-plex-sans', 'ibm-plex-serif'],
  },
];

// ══════════════════════════════════════════════════════════
//  CODING MONO — Built for code, technical identity
// ══════════════════════════════════════════════════════════
export const CODING_MONO: FontConfig[] = [
  {
    id: 'jetbrains-mono', name: 'JetBrains Mono', family: 'JetBrains Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'JetBrains+Mono:wght@100;200;300;400;500;600;700;800',
    previewWeight: 600, weights: [100, 200, 300, 400, 500, 600, 700, 800],
    description: 'Monospaced and technical — developer tools, tech brands',
  },
  {
    id: 'fira-code', name: 'Fira Code', family: 'Fira Code', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Fira+Code:wght@300;400;500;600;700',
    previewWeight: 500, weights: [300, 400, 500, 600, 700],
    description: 'Mono with ligatures — developer-facing, sharp identity',
    opentype: ['liga', 'calt'],
  },
  {
    id: 'roboto-mono', name: 'Roboto Mono', family: 'Roboto Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Roboto+Mono:wght@100;200;300;400;500;600;700',
    previewWeight: 500, weights: [100, 200, 300, 400, 500, 600, 700],
    description: 'Mono companion to Roboto — clean, structured, familiar',
    pairedWith: ['roboto'],
  },
  {
    id: 'inconsolata', name: 'Inconsolata', family: 'Inconsolata', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Inconsolata:wght@200;300;400;500;600;700;800;900',
    previewWeight: 500, weights: [200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Humanist monospace — warm, readable, designed for long coding sessions',
  },
  {
    id: 'overpass-mono', name: 'Overpass Mono', family: 'Overpass Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Overpass+Mono:wght@300;400;500;600;700',
    previewWeight: 500, weights: [300, 400, 500, 600, 700],
    description: 'Companion to Overpass — open, clear, developer-friendly',
  },
  {
    id: 'anonymous-pro', name: 'Anonymous Pro', family: 'Anonymous Pro', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Anonymous+Pro:wght@400;700',
    previewWeight: 400, weights: [400, 700],
    description: 'Classic programmer\'s mono — clear, unfussy, tried and tested',
  },
  {
    id: 'dm-mono', name: 'DM Mono', family: 'DM Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'DM+Mono:wght@300;400;500',
    previewWeight: 400, weights: [300, 400, 500],
    description: 'Companion to DM Sans — clean, minimal, refined coding font',
  },
  {
    id: 'ubuntu-mono', name: 'Ubuntu Mono', family: 'Ubuntu Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Ubuntu+Mono:wght@400;700',
    previewWeight: 400, weights: [400, 700],
    description: 'Companion to Ubuntu — compact, friendly, excellent screen mono',
  },
  {
    id: 'geist-mono', name: 'Geist Mono', family: 'Geist Mono', category: 'mono', source: 'cdn',
    group: 'coding-mono',
    localFiles: {
      '100': `${FS_CDN}/geist-mono@latest/latin-100-normal.woff2`,
      '300': `${FS_CDN}/geist-mono@latest/latin-300-normal.woff2`,
      '400': `${FS_CDN}/geist-mono@latest/latin-400-normal.woff2`,
      '500': `${FS_CDN}/geist-mono@latest/latin-500-normal.woff2`,
      '700': `${FS_CDN}/geist-mono@latest/latin-700-normal.woff2`,
      '900': `${FS_CDN}/geist-mono@latest/latin-900-normal.woff2`,
    },
    previewWeight: 500, weights: [100, 300, 400, 500, 700, 900],
    description: 'Mono companion to Geist — ultra-clean, Vercel\'s developer mono',
    pairedWith: ['geist'],
  },
  // ── New additions ──
  {
    id: 'red-hat-mono', name: 'Red Hat Mono', family: 'Red Hat Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Red+Hat+Mono:wght@300;400;500;600;700',
    previewWeight: 500, weights: [300, 400, 500, 600, 700],
    description: 'Red Hat\'s coding font — clean, technical, enterprise-friendly',
  },
  {
    id: 'azeret-mono', name: 'Azeret Mono', family: 'Azeret Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Azeret+Mono:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 500, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Variable weight mono — versatile range from ultra-light to black',
  },
  {
    id: 'cousine', name: 'Cousine', family: 'Cousine', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Cousine:wght@400;700',
    previewWeight: 400, weights: [400, 700],
    description: 'Metrically compatible with Courier New — clean, familiar, universal',
  },
  {
    id: 'chivo-mono', name: 'Chivo Mono', family: 'Chivo Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Chivo+Mono:wght@100;200;300;400;500;600;700;800;900',
    previewWeight: 500, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Mono companion to Chivo — slightly quirky, strong personality in code contexts',
  },
  {
    id: 'spline-sans-mono', name: 'Spline Sans Mono', family: 'Spline Sans Mono', category: 'mono', source: 'google',
    group: 'coding-mono',
    googleFamily: 'Spline+Sans+Mono:wght@300;400;500;600;700',
    previewWeight: 500, weights: [300, 400, 500, 600, 700],
    description: 'Clean variable mono — contemporary, minimal, ideal for developer-facing products',
  },
];

// ══════════════════════════════════════════════════════════
//  DISPLAY MONO — Character, retro, typewriter
// ══════════════════════════════════════════════════════════
export const DISPLAY_MONO: FontConfig[] = [
  {
    id: 'space-mono', name: 'Space Mono', family: 'Space Mono', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'Space+Mono:wght@400;700',
    previewWeight: 700, weights: [400, 700],
    description: 'Monospaced with character — techy, slightly retro feel',
    pairedWith: ['space-grotesk'],
  },
  {
    id: 'courier-prime', name: 'Courier Prime', family: 'Courier Prime', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'Courier+Prime:wght@400;700',
    previewWeight: 400, weights: [400, 700],
    description: 'Refined Courier — screenplay standard, typewriter nostalgia',
  },
  {
    id: 'cutive-mono', name: 'Cutive Mono', family: 'Cutive Mono', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'Cutive+Mono',
    previewWeight: 400, weights: [400],
    description: 'Typewriter-inspired — artisanal, vintage, editorial personality',
  },
  {
    id: 'share-tech-mono', name: 'Share Tech Mono', family: 'Share Tech Mono', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'Share+Tech+Mono',
    previewWeight: 400, weights: [400],
    description: 'Retro computer terminal — hacker aesthetic, tech nostalgia',
  },
  // ── New additions ──
  {
    id: 'vt323', name: 'VT323', family: 'VT323', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'VT323',
    previewWeight: 400, weights: [400],
    description: 'Classic 8-bit terminal — pixel-perfect retro computing nostalgia',
  },
  {
    id: 'press-start-2p', name: 'Press Start 2P', family: 'Press Start 2P', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'Press+Start+2P',
    previewWeight: 400, weights: [400],
    description: '8-bit video game font — retro gaming, pixel art aesthetic',
  },
  {
    id: 'silkscreen', name: 'Silkscreen', family: 'Silkscreen', category: 'mono', source: 'google',
    group: 'display-mono',
    googleFamily: 'Silkscreen:wght@400;700',
    previewWeight: 400, weights: [400, 700],
    description: 'Screen-printed bitmap style — crisp pixel aesthetic, UI nostalgia',
  },
];

// ══════════════════════════════════════════════════════════
//  MONASPACE FAMILY — GitHub's metric-compatible super-family
//  5 variants with Texture Healing technology
// ══════════════════════════════════════════════════════════
export const MONASPACE_FAMILY: FontConfig[] = [
  {
    id: 'monaspace-neon', name: 'Monaspace Neon', family: 'Monaspace Neon', category: 'mono', source: 'cdn',
    group: 'monaspace-family',
    localFiles: {
      '300': `${MONO_CDN}/MonaspaceNeon-Light.woff2`,
      '400': `${MONO_CDN}/MonaspaceNeon-Regular.woff2`,
      '500': `${MONO_CDN}/MonaspaceNeon-Medium.woff2`,
      '600': `${MONO_CDN}/MonaspaceNeon-SemiBold.woff2`,
      '700': `${MONO_CDN}/MonaspaceNeon-Bold.woff2`,
      '800': `${MONO_CDN}/MonaspaceNeon-ExtraBold.woff2`,
    },
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800],
    description: 'GitHub\'s Monaspace — Texture Healing technology, modern neo-grotesque mono',
    opentype: ['calt', 'liga', 'ss01', 'ss02', 'ss03'],
  },
  {
    id: 'monaspace-argon', name: 'Monaspace Argon', family: 'Monaspace Argon', category: 'mono', source: 'cdn',
    group: 'monaspace-family',
    localFiles: {
      '300': `${MONO_CDN}/MonaspaceArgon-Light.woff2`,
      '400': `${MONO_CDN}/MonaspaceArgon-Regular.woff2`,
      '500': `${MONO_CDN}/MonaspaceArgon-Medium.woff2`,
      '600': `${MONO_CDN}/MonaspaceArgon-SemiBold.woff2`,
      '700': `${MONO_CDN}/MonaspaceArgon-Bold.woff2`,
      '800': `${MONO_CDN}/MonaspaceArgon-ExtraBold.woff2`,
    },
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800],
    description: 'Monaspace Argon — humanist mono, the most versatile member',
  },
  {
    id: 'monaspace-xenon', name: 'Monaspace Xenon', family: 'Monaspace Xenon', category: 'mono', source: 'cdn',
    group: 'monaspace-family',
    localFiles: {
      '300': `${MONO_CDN}/MonaspaceXenon-Light.woff2`,
      '400': `${MONO_CDN}/MonaspaceXenon-Regular.woff2`,
      '500': `${MONO_CDN}/MonaspaceXenon-Medium.woff2`,
      '600': `${MONO_CDN}/MonaspaceXenon-SemiBold.woff2`,
      '700': `${MONO_CDN}/MonaspaceXenon-Bold.woff2`,
      '800': `${MONO_CDN}/MonaspaceXenon-ExtraBold.woff2`,
    },
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800],
    description: 'Monaspace Xenon — slab serif elements, distinctive character',
  },
  {
    id: 'monaspace-radon', name: 'Monaspace Radon', family: 'Monaspace Radon', category: 'mono', source: 'cdn',
    group: 'monaspace-family',
    localFiles: {
      '300': `${MONO_CDN}/MonaspaceRadon-Light.woff2`,
      '400': `${MONO_CDN}/MonaspaceRadon-Regular.woff2`,
      '500': `${MONO_CDN}/MonaspaceRadon-Medium.woff2`,
      '600': `${MONO_CDN}/MonaspaceRadon-SemiBold.woff2`,
      '700': `${MONO_CDN}/MonaspaceRadon-Bold.woff2`,
      '800': `${MONO_CDN}/MonaspaceRadon-ExtraBold.woff2`,
    },
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800],
    description: 'Monaspace Radon — soft, handwriting-influenced, approachable',
  },
  {
    id: 'monaspace-krypton', name: 'Monaspace Krypton', family: 'Monaspace Krypton', category: 'mono', source: 'cdn',
    group: 'monaspace-family',
    localFiles: {
      '300': `${MONO_CDN}/MonaspaceKrypton-Light.woff2`,
      '400': `${MONO_CDN}/MonaspaceKrypton-Regular.woff2`,
      '500': `${MONO_CDN}/MonaspaceKrypton-Medium.woff2`,
      '600': `${MONO_CDN}/MonaspaceKrypton-SemiBold.woff2`,
      '700': `${MONO_CDN}/MonaspaceKrypton-Bold.woff2`,
      '800': `${MONO_CDN}/MonaspaceKrypton-ExtraBold.woff2`,
    },
    previewWeight: 700, weights: [300, 400, 500, 600, 700, 800],
    description: 'Monaspace Krypton — mechanical, precise, most technical member',
  },
];

export const MONO_FONTS: FontConfig[] = [
  ...SOURCE_FAMILY,
  ...IBM_PLEX_MONO,
  ...CODING_MONO,
  ...DISPLAY_MONO,
  ...MONASPACE_FAMILY,
];
