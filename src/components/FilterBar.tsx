import React, { useState } from 'react';
import { Search, Star, X, Zap, ChevronDown, Layers } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PRESETS } from '../data/fonts';
import { FontCategory, FontSource } from '../types';

const CATEGORIES: { value: FontCategory; label: string }[] = [
  { value: 'grotesk', label: 'Grotesk' },
  { value: 'geometric', label: 'Geometric' },
  { value: 'rounded', label: 'Rounded' },
  { value: 'serif', label: 'Serif' },
  { value: 'sans', label: 'Sans' },
  { value: 'mono', label: 'Mono' },
];

const SOURCES: { value: FontSource; label: string }[] = [
  { value: 'google', label: 'Google' },
  { value: 'cdn', label: 'CDN' },
  { value: 'typekit', label: 'Adobe' },
  { value: 'system', label: 'System' },
  { value: 'local', label: 'Local' },
];

interface FilterBarProps {
  groupView: boolean;
  onToggleGroupView: () => void;
}

export function FilterBar({ groupView, onToggleGroupView }: FilterBarProps) {
  const { state, dispatch } = useApp();
  const { filters, favorites } = state;
  const [presetsOpen, setPresetsOpen] = useState(false);

  const hasActiveFilters =
    filters.search.length > 0 ||
    filters.categories.length > 0 ||
    filters.sources.length > 0 ||
    filters.favoritesOnly;

  function applyPreset(key: string) {
    const preset = PRESETS[key];
    if (preset) {
      dispatch({ type: 'APPLY_PRESET', payload: preset.fontIds });
      setPresetsOpen(false);
    }
  }

  return (
    <div className="bg-white border-b border-border px-5 py-3 space-y-3 shrink-0">
      {/* Row 1: Search + Favorites + Clear + Presets */}
      <div className="flex items-center gap-2 flex-wrap">
        {/* Search */}
        <div className="relative w-52">
          <Search size={13} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-subtle" />
          <input
            type="text"
            placeholder="Search fonts…"
            value={filters.search}
            onChange={(e) => dispatch({ type: 'SET_SEARCH', payload: e.target.value })}
            className="w-full pl-8 pr-3 py-1.5 text-xs bg-surface border border-border rounded-md text-text placeholder-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors"
          />
        </div>

        {/* Group view toggle */}
        <button
          onClick={onToggleGroupView}
          title={groupView ? 'Show all fonts' : 'Show grouped by similarity'}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-medium border transition-colors ${
            groupView
              ? 'bg-text text-white border-text'
              : 'bg-surface text-muted border-border hover:text-text'
          }`}
        >
          <Layers size={12} />
          {groupView ? 'Grouped' : 'All'}
        </button>

        {/* Favorites only toggle */}
        <button
          onClick={() => dispatch({ type: 'TOGGLE_FAVORITES_ONLY' })}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-medium border transition-colors ${
            filters.favoritesOnly
              ? 'bg-star/10 text-star border-star/40'
              : 'bg-surface text-muted border-border hover:text-text'
          }`}
        >
          <Star size={12} fill={filters.favoritesOnly ? 'currentColor' : 'none'} />
          Favorites
          {favorites.size > 0 && (
            <span className="bg-star/20 text-star text-[10px] font-bold rounded-full px-1">
              {favorites.size}
            </span>
          )}
        </button>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            onClick={() => dispatch({ type: 'CLEAR_FILTERS' })}
            className="flex items-center gap-1 px-2 py-1.5 rounded-md text-[11px] text-muted hover:text-danger hover:bg-red-50 border border-border transition-colors"
          >
            <X size={11} />
            Clear
          </button>
        )}

        <div className="flex-1" />

        {/* Presets dropdown */}
        <div className="relative">
          <button
            onClick={() => setPresetsOpen(!presetsOpen)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[11px] font-medium border transition-colors ${
              presetsOpen
                ? 'bg-text text-white border-text'
                : 'bg-surface text-muted border-border hover:text-text'
            }`}
          >
            <Zap size={12} />
            Presets
            <ChevronDown size={11} className={`transition-transform ${presetsOpen ? 'rotate-180' : ''}`} />
          </button>

          {presetsOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setPresetsOpen(false)}
              />
              {/* Dropdown */}
              <div className="absolute right-0 top-full mt-1.5 z-20 bg-white border border-border rounded-xl shadow-modal w-72 py-2 overflow-hidden">
                <p className="text-[10px] font-bold text-subtle uppercase tracking-wider px-3 pt-1 pb-2">
                  Apply preset — favorites will be replaced
                </p>
                {Object.entries(PRESETS).map(([key, preset]) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className="w-full flex items-start gap-3 px-3 py-2 hover:bg-surface text-left transition-colors group"
                  >
                    <div className="w-6 h-6 rounded-md bg-text/5 group-hover:bg-text/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap size={11} className="text-muted" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-text leading-tight">{preset.name}</p>
                      <p className="text-[11px] text-muted leading-snug mt-0.5">{preset.description}</p>
                      <p className="text-[10px] text-subtle mt-1">
                        {preset.fontIds.length} fonts
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Row 2: Category + Source filters */}
      <div className="flex items-center gap-1.5 flex-wrap">
        <span className="text-[10px] font-bold text-subtle uppercase tracking-wider mr-1">Style:</span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => dispatch({ type: 'TOGGLE_CATEGORY', payload: cat.value })}
            className={`px-2 py-0.5 rounded-full text-[11px] font-medium border transition-colors ${
              filters.categories.includes(cat.value)
                ? 'bg-text text-white border-text'
                : 'bg-surface text-muted border-border hover:border-zinc-400 hover:text-text'
            }`}
          >
            {cat.label}
          </button>
        ))}

        <div className="w-px h-4 bg-border mx-1" />

        <span className="text-[10px] font-bold text-subtle uppercase tracking-wider mr-1">Source:</span>
        {SOURCES.map((src) => (
          <button
            key={src.value}
            onClick={() => dispatch({ type: 'TOGGLE_SOURCE', payload: src.value })}
            className={`px-2 py-0.5 rounded-full text-[11px] font-medium border transition-colors ${
              filters.sources.includes(src.value)
                ? 'bg-text text-white border-text'
                : 'bg-surface text-muted border-border hover:border-zinc-400 hover:text-text'
            }`}
          >
            {src.label}
          </button>
        ))}
      </div>
    </div>
  );
}
