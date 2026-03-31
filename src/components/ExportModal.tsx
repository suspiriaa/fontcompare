import React, { useRef, useState } from 'react';
import { X, FileImage, FileText, Star, LayoutGrid, Loader2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FONT_LIBRARY } from '../data/fonts';
import { FontCard } from './FontCard';
import { exportAsPng, exportAsPdf } from '../utils/export';

type ExportScope = 'visible' | 'favorites' | 'all';

export function ExportModal() {
  const { state, dispatch, isFavorite } = useApp();
  const { brandText, display, logoImage, favorites } = state;

  const [scope, setScope] = useState<ExportScope>('visible');
  const [loading, setLoading] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  // Determine fonts to export
  const fontsToExport = FONT_LIBRARY.filter((f) => {
    if (scope === 'favorites') return favorites.has(f.id);
    return true; // 'all' and 'visible' both show everything in this export panel
  });

  async function handleExport(format: 'png' | 'pdf') {
    if (!exportRef.current || loading) return;
    setLoading(true);
    try {
      const name = `${brandText.brandName.toLowerCase().replace(/\s+/g, '-')}-typography`;
      if (format === 'png') {
        await exportAsPng(exportRef.current, name, 2);
      } else {
        await exportAsPdf(exportRef.current, name, 2);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-modal w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div>
            <h2 className="text-base font-semibold text-text">Export</h2>
            <p className="text-xs text-muted mt-0.5">
              Choose scope, preview below, then download
            </p>
          </div>
          <button
            onClick={() => dispatch({ type: 'SET_EXPORT_MODAL', payload: false })}
            className="p-2 text-muted hover:text-text hover:bg-surface rounded-lg transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 px-6 py-3 border-b border-border shrink-0 bg-surface flex-wrap">
          {/* Scope */}
          <div className="flex items-center gap-1 bg-white border border-border rounded-lg p-1">
            {([
              { value: 'all', label: 'All Fonts', icon: LayoutGrid, count: FONT_LIBRARY.length },
              {
                value: 'favorites',
                label: 'Favorites',
                icon: Star,
                count: favorites.size,
              },
            ] as const).map(({ value, label, icon: Icon, count }) => (
              <button
                key={value}
                onClick={() => setScope(value as ExportScope)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  scope === value
                    ? 'bg-text text-white shadow-sm'
                    : 'text-muted hover:text-text'
                }`}
              >
                <Icon size={12} />
                {label}
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    scope === value ? 'bg-white/20 text-white' : 'bg-surface text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex-1" />

          {/* Export buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleExport('png')}
              disabled={loading || fontsToExport.length === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium border border-border rounded-lg text-text bg-white hover:bg-surface disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? <Loader2 size={13} className="animate-spin" /> : <FileImage size={13} />}
              Save PNG
            </button>
            <button
              onClick={() => handleExport('pdf')}
              disabled={loading || fontsToExport.length === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-text rounded-lg hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? <Loader2 size={13} className="animate-spin" /> : <FileText size={13} />}
              Save PDF
            </button>
          </div>
        </div>

        {/* Export preview (scrollable) */}
        <div className="flex-1 overflow-y-auto bg-surface p-6">
          {fontsToExport.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Star size={24} className="text-muted mb-3" />
              <p className="text-sm font-medium text-text mb-1">No favorites to export</p>
              <p className="text-xs text-muted">Star some fonts in Comparison view first</p>
            </div>
          ) : (
            <div ref={exportRef} className="space-y-4" style={{ backgroundColor: '#F8F8F7', padding: 24, borderRadius: 12 }}>
              {/* Export header */}
              <div style={{ marginBottom: 20, paddingBottom: 16, borderBottom: '1px solid #E4E4E7' }}>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#18181B',
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  }}
                >
                  {brandText.brandName} — Typography Comparison
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: '#A1A1AA',
                    marginTop: 3,
                    fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                  }}
                >
                  {fontsToExport.length} font{fontsToExport.length !== 1 ? 's' : ''}
                  {scope === 'favorites' ? ' (favorites)' : ''} · {new Date().toLocaleDateString()}
                </p>
              </div>

              {/* Cards */}
              {fontsToExport.map((font, idx) => (
                <FontCard
                  key={font.id}
                  font={font}
                  brandText={brandText}
                  display={display}
                  logoImage={logoImage}
                  isFavorite={isFavorite(font.id)}
                  index={idx}
                  onToggleFavorite={() => {}}
                  exportMode
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
