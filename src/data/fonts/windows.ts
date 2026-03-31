import { FontConfig } from '../../types';

// ══════════════════════════════════════════════════════════
//  MICROSOFT CLEARTYPE COLLECTION
//  6 fonts designed together for Windows Vista+ / Office
//  All source: 'system' — renders from installed Windows fonts
// ══════════════════════════════════════════════════════════
export const MICROSOFT_CLEARTYPE: FontConfig[] = [
  {
    id: 'calibri', name: 'Calibri', family: 'Calibri, sans-serif',
    category: 'sans', source: 'system', group: 'microsoft-cleartype',
    previewWeight: 700, weights: [300, 400, 600, 700],
    description: 'Microsoft\'s default Office font since 2007 — humanist sans, warm and legible',
  },
  {
    id: 'cambria', name: 'Cambria', family: 'Cambria, serif',
    category: 'serif', source: 'system', group: 'microsoft-cleartype',
    previewWeight: 700, weights: [400, 700],
    description: 'Microsoft\'s body text serif — transitional, highly readable on screen',
  },
  {
    id: 'candara', name: 'Candara', family: 'Candara, sans-serif',
    category: 'sans', source: 'system', group: 'microsoft-cleartype',
    previewWeight: 700, weights: [300, 400, 600, 700],
    description: 'Humanist ClearType sans — flowing, warm, modern personality',
  },
  {
    id: 'consolas-win', name: 'Consolas', family: 'Consolas, monospace',
    category: 'mono', source: 'system', group: 'microsoft-cleartype',
    previewWeight: 400, weights: [400, 700],
    description: 'Microsoft\'s beloved coding font — razor-sharp, excellent ligatures and legibility',
  },
  {
    id: 'constantia', name: 'Constantia', family: 'Constantia, serif',
    category: 'serif', source: 'system', group: 'microsoft-cleartype',
    previewWeight: 700, weights: [400, 700],
    description: 'Elegant oldstyle serif — warm, literary, excellent for body and display',
  },
  {
    id: 'corbel', name: 'Corbel', family: 'Corbel, sans-serif',
    category: 'sans', source: 'system', group: 'microsoft-cleartype',
    previewWeight: 700, weights: [300, 400, 600, 700],
    description: 'Humanist ClearType sans — clean, straightforward, reliable screen font',
  },
];

// ══════════════════════════════════════════════════════════
//  WINDOWS DISPLAY FONTS
//  Premium Windows-exclusive fonts — installed on most Windows 10/11 machines
// ══════════════════════════════════════════════════════════
export const WINDOWS_DISPLAY: FontConfig[] = [
  {
    id: 'gill-sans-nova', name: 'Gill Sans Nova', family: '"Gill Sans Nova", "Gill Sans MT", "Gill Sans", sans-serif',
    category: 'sans', source: 'system', group: 'windows-display',
    previewWeight: 700, weights: [100, 300, 400, 600, 700, 900],
    description: 'Enhanced Gill Sans — classic British humanist with the BBC, Penguin Books heritage',
  },
  {
    id: 'rockwell-nova', name: 'Rockwell Nova', family: '"Rockwell Nova", Rockwell, serif',
    category: 'serif', source: 'system', group: 'windows-display',
    previewWeight: 700, weights: [300, 400, 600, 700, 800],
    description: 'Enhanced Rockwell — geometric slab serif, bold and industrial authority',
  },
  {
    id: 'georgia-pro', name: 'Georgia Pro', family: '"Georgia Pro", Georgia, serif',
    category: 'serif', source: 'system', group: 'windows-display',
    previewWeight: 700, weights: [300, 400, 600, 700, 800, 900],
    description: 'Enhanced web classic — transitional serif designed for pixel-perfect screen rendering',
  },
  {
    id: 'verdana-pro', name: 'Verdana Pro', family: '"Verdana Pro", Verdana, sans-serif',
    category: 'sans', source: 'system', group: 'windows-display',
    previewWeight: 700, weights: [300, 400, 600, 700, 800, 900],
    description: 'Enhanced Verdana — wide humanist sans, arguably the most readable screen font ever',
  },
  {
    id: 'sitka', name: 'Sitka', family: '"Sitka Text", "Sitka Small", serif',
    category: 'serif', source: 'system', group: 'windows-display',
    previewWeight: 700, weights: [400, 600, 700],
    description: 'Optical size serif by Matthew Carter — transitions gracefully from caption to display',
  },
  {
    id: 'neue-haas-grotesk', name: 'N Haas Grotesk TX', family: '"N Haas Grotesk TX Pro", sans-serif',
    category: 'grotesk', source: 'system', group: 'windows-display',
    previewWeight: 400, weights: [400],
    description: 'Neue Haas Grotesk Text — the original Helvetica precursor, rare premium inclusion',
  },
];

// ══════════════════════════════════════════════════════════
//  WINDOWS CLASSIC WEB FONTS
//  The originals that defined web typography in the late 1990s–2000s
// ══════════════════════════════════════════════════════════
export const WINDOWS_CLASSIC: FontConfig[] = [
  {
    id: 'segoe-ui', name: 'Segoe UI', family: '"Segoe UI", system-ui, sans-serif',
    category: 'grotesk', source: 'system', group: 'neo-grotesque',
    previewWeight: 700, weights: [300, 400, 600, 700],
    description: 'Windows system UI font — the face of Windows since Vista, clean and familiar',
  },
  {
    id: 'tahoma-win', name: 'Tahoma', family: 'Tahoma, sans-serif',
    category: 'sans', source: 'system', group: 'humanist-sans',
    previewWeight: 700, weights: [400, 700],
    description: 'Matthew Carter classic — narrow humanist, defined Windows XP era UI',
  },
  {
    id: 'trebuchet-ms', name: 'Trebuchet MS', family: '"Trebuchet MS", sans-serif',
    category: 'sans', source: 'system', group: 'humanist-sans',
    previewWeight: 700, weights: [400, 700],
    description: 'Microsoft web font — humanist sans with quirky personality, pre-Google Fonts workhorse',
  },
  {
    id: 'verdana-win', name: 'Verdana', family: 'Verdana, sans-serif',
    category: 'sans', source: 'system', group: 'humanist-sans',
    previewWeight: 700, weights: [400, 700],
    description: 'Matthew Carter screen classic — wide letterforms, maximum legibility at small sizes',
  },
  {
    id: 'georgia-win', name: 'Georgia', family: 'Georgia, serif',
    category: 'serif', source: 'system', group: 'text-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'Matthew Carter web serif masterpiece — transitional, beautiful at any size',
  },
  {
    id: 'palatino-linotype', name: 'Palatino Linotype', family: '"Palatino Linotype", Palatino, serif',
    category: 'serif', source: 'system', group: 'editorial-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'Hermann Zapf\'s Renaissance oldstyle — elegant, calligraphic, classic editorial',
  },
  {
    id: 'impact-win', name: 'Impact', family: 'Impact, "Haettenschweiler", sans-serif',
    category: 'sans', source: 'system', group: 'condensed-display',
    previewWeight: 400, weights: [400],
    description: 'The meme font — ultra-condensed, ultra-heavy, maximum display impact',
  },
  {
    id: 'franklin-gothic', name: 'Franklin Gothic Medium', family: '"Franklin Gothic Medium", "Franklin Gothic", sans-serif',
    category: 'sans', source: 'system', group: 'condensed-display',
    previewWeight: 400, weights: [400],
    description: 'ATF classic grotesque revival — American newspaper tradition, bold authority',
  },
  {
    id: 'cascadia-code', name: 'Cascadia Code', family: '"Cascadia Code", monospace',
    category: 'mono', source: 'system', group: 'coding-mono',
    previewWeight: 400, weights: [200, 300, 400, 600, 700],
    description: 'Microsoft\'s modern coding font — programming ligatures, ships with Windows Terminal',
    opentype: ['calt', 'liga', 'ss01'],
  },
  {
    id: 'cascadia-mono', name: 'Cascadia Mono', family: '"Cascadia Mono", monospace',
    category: 'mono', source: 'system', group: 'coding-mono',
    previewWeight: 400, weights: [200, 300, 400, 600, 700],
    description: 'Cascadia Code without ligatures — clean, modern, great for mixed code/prose contexts',
  },
  {
    id: 'bahnschrift-win', name: 'Bahnschrift', family: 'Bahnschrift, "DIN Alternate", sans-serif',
    category: 'geometric', source: 'system', group: 'condensed-display',
    previewWeight: 700, weights: [300, 400, 600, 700],
    description: 'Variable-weight DIN-style font — engineering precision, industrial authority',
  },
  {
    id: 'ink-free', name: 'Ink Free', family: '"Ink Free", sans-serif',
    category: 'sans', source: 'system', group: 'handwritten',
    previewWeight: 400, weights: [400],
    description: 'Windows 10 handwriting font — casual, natural, authentic pen-on-paper feel',
  },
];

export const WINDOWS_FONTS: FontConfig[] = [
  ...MICROSOFT_CLEARTYPE,
  ...WINDOWS_DISPLAY,
  ...WINDOWS_CLASSIC,
];
