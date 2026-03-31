// ─── Core Types ──────────────────────────────────────────────────────────────

export type FontCategory = 'sans' | 'serif' | 'rounded' | 'geometric' | 'grotesk' | 'mono';
export type FontSource = 'google' | 'local' | 'cdn' | 'system' | 'typekit';
export type PreviewMode =
  | 'brand-board'
  | 'wordmark-only'
  | 'logo-wordmark'
  | 'website-header'
  | 'mobile-topbar'
  | 'app-icon'
  | 'typography-list';
export type CaseMode = 'title' | 'upper' | 'lower';
export type AppView = 'comparison' | 'review-board';

// ─── Font Configuration ───────────────────────────────────────────────────────

export interface SimilarityGroup {
  id: string;
  label: string;
  description: string;
  representativeId: string;
}

export interface FontConfig {
  id: string;
  name: string;
  /** CSS font-family value */
  family: string;
  category: FontCategory;
  source: FontSource;
  /** Google Fonts URL fragment e.g. "Inter:wght@400;700" */
  googleFamily?: string;
  /** Map of weight -> local file path under /fonts/ */
  localFiles?: Record<string, string>;
  /** Preferred weight for wordmark preview */
  previewWeight: number;
  weights?: number[];
  tags?: string[];
  description?: string;
  /** IDs of fonts that pair well for body/supporting text */
  pairedWith?: string[];
  /** Notable OpenType features this font supports */
  opentype?: string[];
  /** Similarity group this font belongs to */
  group?: string;
}

// ─── Brand Text ───────────────────────────────────────────────────────────────

export interface BrandText {
  brandName: string;
  tagline: string;
  subtitle: string;
  cta: string;
  body: string;
}

// ─── Display Options ──────────────────────────────────────────────────────────

export interface DisplayOptions {
  previewMode: PreviewMode;
  caseMode: CaseMode;
  darkMode: boolean;
  /** Wordmark font size in px (range 28–100) */
  fontSize: number;
  /** Letter-spacing in em*1000 (range -20 to 300) */
  tracking: number;
  /** Line height (range 1.0–2.0) */
  lineHeight: number;
}

// ─── Filters ──────────────────────────────────────────────────────────────────

export interface FontFilters {
  search: string;
  categories: FontCategory[];
  sources: FontSource[];
  favoritesOnly: boolean;
}

// ─── App State ────────────────────────────────────────────────────────────────

export interface AppState {
  brandText: BrandText;
  logoImage: string | null;
  display: DisplayOptions;
  filters: FontFilters;
  /** Set of favorited font IDs */
  favorites: Set<string>;
  /** Notes per font for the review board */
  notes: Record<string, string>;
  currentView: AppView;
  showExportModal: boolean;
}

// ─── Presets ──────────────────────────────────────────────────────────────────

export interface Preset {
  name: string;
  description: string;
  fontIds: string[];
}
