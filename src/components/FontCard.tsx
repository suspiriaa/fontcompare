import React, { CSSProperties } from 'react';
import { Star, GitFork, ChevronDown, ChevronUp } from 'lucide-react';
import { FontConfig, PreviewMode, CaseMode, BrandText, DisplayOptions } from '../types';
import { applyCase, getInitial, getScaledSizes, trackingToLetterSpacing } from '../utils/textUtils';
import { FONT_LIBRARY } from '../data/fonts';
import { useLazyFont } from '../hooks/useLazyFont';

// ─── Font Card ────────────────────────────────────────────────────────────────

interface FontCardProps {
  font: FontConfig;
  brandText: BrandText;
  display: DisplayOptions;
  logoImage: string | null;
  isFavorite: boolean;
  index: number;
  onToggleFavorite: () => void;
  /** If true, renders in export-clean mode (no UI chrome) */
  exportMode?: boolean;
  /** Group view props */
  isGroupRep?: boolean;
  hiddenSiblingCount?: number;
  isGroupExpanded?: boolean;
  onToggleGroup?: () => void;
  isGroupSibling?: boolean;
  groupView?: boolean;
}

export function FontCard({
  font,
  brandText,
  display,
  logoImage,
  isFavorite,
  index,
  onToggleFavorite,
  exportMode = false,
  isGroupRep = false,
  hiddenSiblingCount = 0,
  isGroupExpanded = false,
  onToggleGroup,
  isGroupSibling = false,
  groupView = false,
}: FontCardProps) {
  const cardRef = useLazyFont(font);
  const { previewMode, caseMode, darkMode, fontSize, tracking, lineHeight } = display;
  const sizes = getScaledSizes(fontSize);
  const ls = trackingToLetterSpacing(tracking);

  // System fonts already contain a full CSS stack; others need wrapping in quotes
  const ff = font.source === 'system' ? font.family : `'${font.family}', sans-serif`;

  // Shared style factories
  const wordmarkStyle: CSSProperties = {
    fontFamily: ff,
    fontWeight: font.previewWeight,
    fontSize: sizes.wordmark,
    letterSpacing: ls,
    lineHeight,
  };
  const taglineStyle: CSSProperties = {
    fontFamily: ff,
    fontWeight: 400,
    fontSize: sizes.tagline,
    letterSpacing: ls,
    lineHeight,
  };
  const subtitleStyle: CSSProperties = {
    fontFamily: ff,
    fontWeight: 400,
    fontSize: sizes.subtitle,
    letterSpacing: ls,
    lineHeight,
  };
  const bodyStyle: CSSProperties = {
    fontFamily: ff,
    fontWeight: 400,
    fontSize: sizes.body,
    lineHeight: 1.6,
  };
  const ctaStyle: CSSProperties = {
    fontFamily: ff,
    fontWeight: 600,
    fontSize: sizes.cta,
    letterSpacing: ls,
  };

  // Color tokens based on dark/light
  const cardBg = darkMode ? '#111111' : '#FFFFFF';
  const primaryText = darkMode ? '#F4F4F5' : '#18181B';
  const secondaryText = darkMode ? '#A1A1AA' : '#52525B';
  const mutedText = darkMode ? '#71717A' : '#A1A1AA';
  const cardBorder = darkMode ? '#27272A' : '#E4E4E7';
  const ctaBg = darkMode ? '#FAFAFA' : '#18181B';
  const ctaText = darkMode ? '#18181B' : '#FAFAFA';
  const ctaBorder = darkMode ? 'transparent' : 'transparent';
  const tagBg = darkMode ? '#27272A' : '#F4F4F5';
  const tagText = darkMode ? '#A1A1AA' : '#71717A';

  const bName = applyCase(brandText.brandName, caseMode);
  const bTagline = applyCase(brandText.tagline, caseMode);
  const bSubtitle = applyCase(brandText.subtitle, caseMode);
  const bCta = applyCase(brandText.cta, caseMode);

  // ── Category label color ──────────────────────────────────────────────────
  const categoryColors: Record<string, string> = {
    grotesk: '#2563EB',
    geometric: '#7C3AED',
    rounded: '#D97706',
    serif: '#059669',
    sans: '#0891B2',
    mono: '#DC2626',
  };
  const categoryColor = categoryColors[font.category] ?? '#6B7280';

  // ── Logo / initial mark ───────────────────────────────────────────────────
  function LogoMark({ size = 36 }: { size?: number }) {
    if (logoImage) {
      return (
        <img
          src={logoImage}
          alt="logo"
          style={{ width: size, height: size, objectFit: 'contain', flexShrink: 0 }}
        />
      );
    }
    return (
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 8,
          backgroundColor: darkMode ? '#27272A' : '#F4F4F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: ff,
            fontWeight: font.previewWeight,
            fontSize: size * 0.5,
            color: primaryText,
            lineHeight: 1,
          }}
        >
          {getInitial(brandText.brandName)}
        </span>
      </div>
    );
  }

  // ── Inner content by mode ─────────────────────────────────────────────────

  function renderContent() {
    switch (previewMode) {
      // ── WORDMARK ONLY ──────────────────────────────────────────────────
      case 'wordmark-only':
        return (
          <div style={{ display: 'flex', alignItems: 'center', minHeight: 100, padding: '20px 28px' }}>
            <span style={{ ...wordmarkStyle, color: primaryText }}>{bName}</span>
          </div>
        );

      // ── LOGO + WORDMARK ────────────────────────────────────────────────
      case 'logo-wordmark':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              padding: '20px 28px',
              minHeight: 100,
            }}
          >
            <LogoMark size={Math.round(fontSize * 0.8)} />
            <span style={{ ...wordmarkStyle, color: primaryText }}>{bName}</span>
          </div>
        );

      // ── WEBSITE HEADER ─────────────────────────────────────────────────
      case 'website-header':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 28px',
              borderBottom: `1px solid ${cardBorder}`,
            }}
          >
            {/* Left: logo + brand */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <LogoMark size={28} />
              <span
                style={{
                  fontFamily: ff,
                  fontWeight: font.previewWeight,
                  fontSize: sizes.subtitle,
                  letterSpacing: ls,
                  color: primaryText,
                }}
              >
                {bName}
              </span>
            </div>

            {/* Center: nav links */}
            <div style={{ display: 'flex', gap: 24 }}>
              {['Gifts', 'Collections', 'About'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: ff,
                    fontWeight: 400,
                    fontSize: sizes.cta,
                    color: secondaryText,
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Right: CTA */}
            <button
              style={{
                ...ctaStyle,
                color: ctaText,
                backgroundColor: ctaBg,
                padding: '7px 16px',
                borderRadius: 6,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {bCta}
            </button>
          </div>
        );

      // ── MOBILE TOP BAR ─────────────────────────────────────────────────
      case 'mobile-topbar':
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 20px',
              position: 'relative',
              borderBottom: `1px solid ${cardBorder}`,
              minHeight: 52,
            }}
          >
            <span
              style={{
                ...wordmarkStyle,
                fontSize: sizes.subtitle,
                color: primaryText,
              }}
            >
              {bName}
            </span>
            {/* hamburger dots decoration */}
            <div
              style={{
                position: 'absolute',
                right: 20,
                display: 'flex',
                gap: 4,
              }}
            >
              {[0, 0, 0].map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: '50%',
                    backgroundColor: mutedText,
                  }}
                />
              ))}
            </div>
          </div>
        );

      // ── APP ICON ───────────────────────────────────────────────────────
      case 'app-icon':
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 12,
              padding: '24px 28px',
            }}
          >
            {/* Icon */}
            <div
              style={{
                width: Math.round(fontSize * 1.2),
                height: Math.round(fontSize * 1.2),
                borderRadius: Math.round(fontSize * 0.26),
                backgroundColor: darkMode ? '#27272A' : '#18181B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {logoImage ? (
                <img
                  src={logoImage}
                  alt="logo"
                  style={{ width: '60%', height: '60%', objectFit: 'contain' }}
                />
              ) : (
                <span
                  style={{
                    fontFamily: ff,
                    fontWeight: font.previewWeight,
                    fontSize: Math.round(fontSize * 0.6),
                    color: darkMode ? '#18181B' : '#FAFAFA',
                  }}
                >
                  {getInitial(brandText.brandName)}
                </span>
              )}
            </div>
            {/* App label */}
            <span
              style={{
                ...ctaStyle,
                fontSize: sizes.cta,
                color: primaryText,
              }}
            >
              {bName}
            </span>
          </div>
        );

      // ── TYPOGRAPHY LIST ────────────────────────────────────────────────
      case 'typography-list': {
        const weights = font.weights ?? [font.previewWeight];
        return (
          <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* Specimen */}
            <div
              style={{
                fontFamily: ff,
                fontWeight: font.previewWeight,
                fontSize: sizes.wordmark,
                letterSpacing: ls,
                lineHeight: 1,
                color: primaryText,
                marginBottom: 8,
              }}
            >
              Aa
            </div>
            <div
              style={{
                fontFamily: ff,
                fontWeight: 400,
                fontSize: sizes.body,
                color: secondaryText,
                lineHeight: 1.5,
              }}
            >
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789 !@#$%&
            </div>
            {/* Weight swatch */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
              {weights.map((w) => (
                <div key={w} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <span
                    style={{
                      fontFamily: ff,
                      fontWeight: w,
                      fontSize: sizes.tagline,
                      color: primaryText,
                      letterSpacing: ls,
                    }}
                  >
                    {bName}
                  </span>
                  <span
                    style={{
                      fontSize: 10,
                      color: mutedText,
                      fontFamily: 'ui-monospace, monospace',
                    }}
                  >
                    {w}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      }

      // ── BRAND BOARD (default) ──────────────────────────────────────────
      default:
        return (
          <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {/* Header row: Logo + Brand name + font info */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                marginBottom: 20,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <LogoMark size={Math.round(fontSize * 0.72)} />
                <span style={{ ...wordmarkStyle, color: primaryText }}>{bName}</span>
              </div>

              {/* Font metadata chip */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: 3,
                  paddingTop: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: primaryText,
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  }}
                >
                  {font.name}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: categoryColor,
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                    fontWeight: 500,
                    textTransform: 'capitalize',
                    backgroundColor: `${categoryColor}18`,
                    padding: '2px 7px',
                    borderRadius: 99,
                  }}
                >
                  {font.category} · {font.previewWeight}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: 1, backgroundColor: cardBorder, marginBottom: 20 }} />

            {/* Tagline */}
            <p
              style={{
                ...taglineStyle,
                color: primaryText,
                marginBottom: 10,
              }}
            >
              {bTagline}
            </p>

            {/* Subtitle */}
            <p
              style={{
                ...subtitleStyle,
                color: secondaryText,
                marginBottom: 16,
              }}
            >
              {bSubtitle}
            </p>

            {/* Body text */}
            <p
              style={{
                ...bodyStyle,
                color: mutedText,
                marginBottom: 20,
                maxWidth: '72ch',
              }}
            >
              {brandText.body}
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                style={{
                  ...ctaStyle,
                  color: ctaText,
                  backgroundColor: ctaBg,
                  padding: '9px 22px',
                  borderRadius: 7,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                {bCta}
              </button>
              {font.description && (
                <span
                  style={{
                    fontSize: 11,
                    color: mutedText,
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                    fontStyle: 'italic',
                  }}
                >
                  {font.description}
                </span>
              )}
            </div>
          </div>
        );
    }
  }

  // ── Wrapper ───────────────────────────────────────────────────────────────
  return (
    <div
      ref={cardRef}
      className="group relative rounded-xl overflow-hidden transition-shadow duration-200"
      style={{
        backgroundColor: cardBg,
        border: `1px solid ${cardBorder}`,
        borderLeft: isGroupSibling ? `3px solid ${categoryColor}55` : `1px solid ${cardBorder}`,
        boxShadow: darkMode
          ? '0 1px 3px 0 rgba(0,0,0,0.4)'
          : '0 1px 3px 0 rgba(0,0,0,0.06)',
        opacity: isGroupSibling ? 0.9 : 1,
      }}
    >
      {/* Preview content */}
      {renderContent()}

      {/* Action row (hidden in export mode) */}
      {!exportMode && (
        <div
          className="flex items-center justify-between px-4 py-2.5 border-t"
          style={{
            borderColor: cardBorder,
            backgroundColor: darkMode ? '#0A0A0A' : '#FAFAF9',
          }}
        >
          {/* Font name + index */}
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-mono"
              style={{ color: mutedText }}
            >
              #{String(index + 1).padStart(2, '0')}
            </span>
            <span
              className="text-[11px] font-medium"
              style={{ color: secondaryText }}
            >
              {font.name}
            </span>
            {font.source !== 'google' && (
              <span
                className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                style={{ backgroundColor: darkMode ? '#27272A' : '#F4F4F5', color: mutedText }}
              >
                {font.source}
              </span>
            )}
          </div>

          {/* Group expand/collapse badge */}
          {groupView && isGroupRep && hiddenSiblingCount > 0 && onToggleGroup && (
            <button
              onClick={onToggleGroup}
              className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold border transition-colors shrink-0"
              style={{
                borderColor: `${categoryColor}44`,
                backgroundColor: isGroupExpanded ? `${categoryColor}18` : 'transparent',
                color: isGroupExpanded ? categoryColor : mutedText,
              }}
            >
              {isGroupExpanded
                ? <ChevronUp size={10} />
                : <ChevronDown size={10} />}
              {hiddenSiblingCount} similar
            </button>
          )}

          {/* Pairing hint */}
          {font.pairedWith && font.pairedWith.length > 0 && (
            <div className="flex items-center gap-1 overflow-hidden">
              <GitFork size={11} style={{ color: mutedText, flexShrink: 0 }} />
              <span className="text-[10px] truncate" style={{ color: mutedText }}>
                {font.pairedWith
                  .map((id) => FONT_LIBRARY.find((f) => f.id === id)?.name ?? id)
                  .join(' · ')}
              </span>
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={onToggleFavorite}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            className="flex items-center gap-1 px-2 py-1 rounded-md transition-all shrink-0"
            style={{
              color: isFavorite ? '#F59E0B' : mutedText,
              backgroundColor: isFavorite
                ? 'rgba(245,158,11,0.12)'
                : 'transparent',
            }}
          >
            <Star
              size={13}
              fill={isFavorite ? 'currentColor' : 'none'}
              strokeWidth={isFavorite ? 0 : 1.5}
            />
            <span className="text-[11px] font-medium">
              {isFavorite ? 'Favorited' : 'Favorite'}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
