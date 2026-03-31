import { FontConfig } from '../../types';

// ══════════════════════════════════════════════════════════
//  ADOBE FONTS (TYPEKIT) — kit: mqk6mwj
//  Loaded globally via <link> in index.html
//  All fonts use source: 'typekit' — no additional loading needed
//  CSS family names must match exactly what Typekit defines (lowercase slugs)
// ══════════════════════════════════════════════════════════

export const TYPEKIT_FONTS: FontConfig[] = [

  // ── Grotesque / Sans ────────────────────────────────────

  {
    id: 'komet', name: 'Komet', family: 'komet',
    category: 'grotesk', source: 'typekit', group: 'modern-grotesk',
    previewWeight: 700, weights: [400, 700],
    description: 'Atlas Font Foundry grotesque — precise, rational, Swiss-influenced precision',
  },
  {
    id: 'komet-sc', name: 'Komet SC', family: 'komet-sc',
    category: 'grotesk', source: 'typekit', group: 'modern-grotesk',
    previewWeight: 700, weights: [400, 700],
    description: 'Komet small caps variant — elevated typographic refinement, engraved quality',
  },
  {
    id: 'sofia-pro-variable', name: 'Sofia Pro Variable', family: 'sofia-pro-variable',
    category: 'geometric', source: 'typekit', group: 'geometric-sans',
    previewWeight: 700, weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    description: 'Premium geometric variable — wide weight range, excellent brand versatility',
  },
  {
    id: 'ruddy', name: 'Ruddy', family: 'ruddy',
    category: 'grotesk', source: 'typekit', group: 'modern-grotesk',
    previewWeight: 700, weights: [400, 700],
    description: 'Expressive display sans — confident, editorial, strong brand presence',
  },
  {
    id: 'rl-horizon', name: 'RL Horizon', family: 'rl-horizon',
    category: 'geometric', source: 'typekit', group: 'artistic-display',
    previewWeight: 700, weights: [400, 700],
    description: 'Geometric display sans — futuristic, bold, high-impact brand identity',
  },

  // ── Monotalic Family (mono-italic hybrid) ───────────────

  {
    id: 'monotalic', name: 'Monotalic', family: 'monotalic',
    category: 'mono', source: 'typekit', group: 'monotalic-family',
    previewWeight: 700, weights: [400, 700],
    description: 'Mono-italic hybrid — every character naturally italicized, oblique engineering identity',
  },
  {
    id: 'monotalic-narrow', name: 'Monotalic Narrow', family: 'monotalic-narrow',
    category: 'mono', source: 'typekit', group: 'monotalic-family',
    previewWeight: 700, weights: [400, 700],
    description: 'Condensed Monotalic — space-efficient oblique mono, dense code aesthetic',
  },
  {
    id: 'monotalic-wide', name: 'Monotalic Wide', family: 'monotalic-wide',
    category: 'mono', source: 'typekit', group: 'monotalic-family',
    previewWeight: 700, weights: [400, 700],
    description: 'Wide Monotalic — open, airy oblique mono, commands attention at display size',
  },

  // ── Display / Decorative ────────────────────────────────

  {
    id: 'westsac', name: 'Westsac', family: 'westsac',
    category: 'sans', source: 'typekit', group: 'artistic-display',
    previewWeight: 400, weights: [400],
    description: 'Western-inspired display — bold, character-rich, retro americana personality',
  },
  {
    id: 'spumoni-lp', name: 'Spumoni LP', family: 'spumoni-lp',
    category: 'rounded', source: 'typekit', group: 'rounded-sans',
    previewWeight: 700, weights: [700],
    description: 'Bubbly retro display — playful, ice cream shop energy, expressive warmth',
  },
  {
    id: 'forager', name: 'Forager', family: 'forager',
    category: 'sans', source: 'typekit', group: 'artistic-display',
    previewWeight: 700, weights: [400, 700],
    description: 'Earthy display sans — rugged, organic, artisanal brand identity',
  },
  {
    id: 'forager-overlap', name: 'Forager Overlap', family: 'forager-overlap',
    category: 'sans', source: 'typekit', group: 'artistic-display',
    previewWeight: 700, weights: [400, 700],
    description: 'Forager with overlapping letterforms — layered depth, unique visual texture',
  },

  // ── Display Serif ───────────────────────────────────────

  {
    id: 'riant-display', name: 'Riant Display', family: 'riant-display',
    category: 'serif', source: 'typekit', group: 'display-serif',
    previewWeight: 700, weights: [400, 700],
    description: 'Elegant optically-sized display serif — refined, editorial, premium presence',
  },
  {
    id: 'riant-display-inline', name: 'Riant Display Inline', family: 'riant-display-inline',
    category: 'serif', source: 'typekit', group: 'display-serif',
    previewWeight: 400, weights: [400],
    description: 'Inline variant of Riant — engraved effect, decorative luxury signage quality',
  },

  // ── Comic / Lettering ───────────────────────────────────

  {
    id: 'cc-spaghetti-western-sans', name: 'CC Spaghetti Western Sans', family: 'cc-spaghetti-western-sans',
    category: 'sans', source: 'typekit', group: 'artistic-display',
    previewWeight: 400, weights: [400],
    description: 'Comic lettering sans — bold, hand-drawn energy, graphic novel presence',
  },
  {
    id: 'cc-spaghetti-western-swash', name: 'CC Spaghetti Western Swash', family: 'cc-spaghetti-western-swash',
    category: 'sans', source: 'typekit', group: 'artistic-display',
    previewWeight: 400, weights: [400],
    description: 'Swash variant — decorative flourishes, ornate comic lettering drama',
  },
  {
    id: 'cc-spaghetti-western-script', name: 'CC Spaghetti Western Script', family: 'cc-spaghetti-western-script',
    category: 'sans', source: 'typekit', group: 'handwritten',
    previewWeight: 400, weights: [400],
    description: 'Script variant — hand-lettered western flair, expressive and character-driven',
  },

];
