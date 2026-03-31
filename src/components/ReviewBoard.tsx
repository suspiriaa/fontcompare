import React, { useRef } from 'react';
import { Download, Star, FileImage, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FONT_LIBRARY } from '../data/fonts';
import { FontCard } from './FontCard';
import { exportAsPng, exportAsPdf } from '../utils/export';

export function ReviewBoard() {
  const { state, dispatch, toggleFavorite, isFavorite } = useApp();
  const { favorites, notes, brandText, display, logoImage } = state;
  const boardRef = useRef<HTMLDivElement>(null);

  const favoriteFonts = FONT_LIBRARY.filter((f) => favorites.has(f.id));

  async function handleExport(format: 'png' | 'pdf') {
    if (!boardRef.current) return;
    const filename = `${brandText.brandName.toLowerCase()}-typography-review`;
    if (format === 'png') {
      await exportAsPng(boardRef.current, filename, 2);
    } else {
      await exportAsPdf(boardRef.current, filename, 2);
    }
  }

  if (favoriteFonts.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 bg-surface">
        <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center shadow-card">
          <Star size={24} className="text-muted" />
        </div>
        <div className="text-center">
          <h2 className="text-base font-semibold text-text mb-1">No favorites yet</h2>
          <p className="text-sm text-muted max-w-xs">
            Go to Comparison view, star fonts you like, and they'll appear here for review.
          </p>
        </div>
        <button
          onClick={() => dispatch({ type: 'SET_VIEW', payload: 'comparison' })}
          className="px-4 py-2 bg-text text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Browse Fonts
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-surface">
      {/* Review Board Header */}
      <div className="bg-white border-b border-border px-6 py-4 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-base font-semibold text-text">
            Typography Review Board
          </h1>
          <p className="text-xs text-muted mt-0.5">
            {favoriteFonts.length} finalist{favoriteFonts.length !== 1 ? 's' : ''} selected ·{' '}
            Share this board with collaborators for feedback
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleExport('png')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted border border-border rounded-lg hover:text-text hover:border-zinc-400 transition-colors bg-white"
          >
            <FileImage size={13} />
            Export PNG
          </button>
          <button
            onClick={() => handleExport('pdf')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-text rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <FileText size={13} />
            Export PDF
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Export-capturable board */}
        <div
          ref={boardRef}
          className="max-w-4xl mx-auto"
          style={{ backgroundColor: '#F8F8F7', padding: '40px' }}
        >
          {/* Board header (visible in export) */}
          <div
            style={{
              marginBottom: 32,
              paddingBottom: 20,
              borderBottom: '1px solid #E4E4E7',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#18181B',
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }}
              >
                {brandText.brandName} — Typography Finalists
              </h2>
              <span
                style={{
                  fontSize: 12,
                  color: '#A1A1AA',
                  fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                }}
              >
                {favoriteFonts.length} options
              </span>
            </div>
            <p
              style={{
                fontSize: 13,
                color: '#71717A',
                marginTop: 4,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              }}
            >
              Which wordmark feels right? Please share your thoughts.
            </p>
          </div>

          {/* Font options */}
          <div className="space-y-6">
            {favoriteFonts.map((font, idx) => (
              <div key={font.id} className="space-y-2">
                {/* Option number */}
                <div className="flex items-center gap-2">
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: 6,
                      backgroundColor: '#18181B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        color: '#FAFAFA',
                        fontSize: 11,
                        fontWeight: 700,
                        fontFamily: 'ui-monospace, monospace',
                      }}
                    >
                      {idx + 1}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#52525B',
                      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                    }}
                  >
                    Option {idx + 1} — {font.name}
                  </span>
                </div>

                {/* Font card */}
                <FontCard
                  font={font}
                  brandText={brandText}
                  display={display}
                  logoImage={logoImage}
                  isFavorite={true}
                  index={idx}
                  onToggleFavorite={() => toggleFavorite(font.id)}
                  exportMode={false}
                />

                {/* Notes field */}
                <div className="bg-white border border-border rounded-lg px-4 py-3 not-exportable">
                  <label
                    className="block text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5"
                    htmlFor={`note-${font.id}`}
                  >
                    Notes / Feedback
                  </label>
                  <textarea
                    id={`note-${font.id}`}
                    placeholder={`Write your thoughts about ${font.name}…`}
                    value={notes[font.id] ?? ''}
                    onChange={(e) =>
                      dispatch({
                        type: 'SET_NOTE',
                        payload: { fontId: font.id, note: e.target.value },
                      })
                    }
                    rows={2}
                    className="w-full text-xs text-text bg-transparent placeholder-subtle resize-none outline-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Board footer (visible in export) */}
          <div
            style={{
              marginTop: 40,
              paddingTop: 16,
              borderTop: '1px solid #E4E4E7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span
              style={{
                fontSize: 11,
                color: '#A1A1AA',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              }}
            >
              Generated with fontcompare
            </span>
            <span
              style={{
                fontSize: 11,
                color: '#A1A1AA',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
              }}
            >
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
