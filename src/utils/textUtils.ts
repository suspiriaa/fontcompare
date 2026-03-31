import { CaseMode } from '../types';

/** Apply a case transformation to display text */
export function applyCase(text: string, mode: CaseMode): string {
  switch (mode) {
    case 'upper':
      return text.toUpperCase();
    case 'lower':
      return text.toLowerCase();
    default:
      return text;
  }
}

/** Get the first character of a string, upper-cased */
export function getInitial(text: string): string {
  return text.trim().charAt(0).toUpperCase();
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/** Convert tracking slider value (integer, -20 to 300) to CSS letter-spacing em string */
export function trackingToLetterSpacing(tracking: number): string {
  // tracking is in 1/1000 em units
  return `${tracking / 1000}em`;
}

/** Scale supporting text sizes relative to the base wordmark font size */
export function getScaledSizes(baseFontSize: number) {
  return {
    wordmark: baseFontSize,
    tagline: Math.max(15, Math.round(baseFontSize * 0.34)),
    subtitle: Math.max(13, Math.round(baseFontSize * 0.24)),
    body: Math.max(12, Math.round(baseFontSize * 0.19)),
    cta: Math.max(12, Math.round(baseFontSize * 0.21)),
    label: Math.max(10, Math.round(baseFontSize * 0.16)),
  };
}
