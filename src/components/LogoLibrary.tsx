import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LOGO_MARKS, MARK_CATEGORIES, markToDataUrl, LogoMark } from '../data/logoMarks';
import { useApp } from '../context/AppContext';

const MARK_COLORS = [
  { label: 'Black', value: '#18181B' },
  { label: 'Dark Gray', value: '#52525B' },
  { label: 'Gray', value: '#A1A1AA' },
  { label: 'White', value: '#FFFFFF' },
  { label: 'Blue', value: '#2563EB' },
  { label: 'Indigo', value: '#4F46E5' },
  { label: 'Violet', value: '#7C3AED' },
  { label: 'Pink', value: '#DB2777' },
  { label: 'Red', value: '#DC2626' },
  { label: 'Orange', value: '#EA580C' },
  { label: 'Amber', value: '#D97706' },
  { label: 'Green', value: '#16A34A' },
  { label: 'Teal', value: '#0D9488' },
];

interface LogoLibraryProps {
  onClose: () => void;
}

export function LogoLibrary({ onClose }: LogoLibraryProps) {
  const { dispatch } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [color, setColor] = useState('#18181B');
  const [selected, setSelected] = useState<string | null>(null);

  const visible =
    activeCategory === 'all'
      ? LOGO_MARKS
      : LOGO_MARKS.filter((m) => m.category === activeCategory);

  function handleSelect(mark: LogoMark) {
    setSelected(mark.id);
    dispatch({ type: 'SET_LOGO', payload: markToDataUrl(mark, color) });
  }

  function handleColorChange(newColor: string) {
    setColor(newColor);
    // Re-apply to already-selected mark instantly
    if (selected) {
      const mark = LOGO_MARKS.find((m) => m.id === selected);
      if (mark) {
        dispatch({ type: 'SET_LOGO', payload: markToDataUrl(mark, newColor) });
      }
    }
  }

  return (
    <div className="border border-border rounded-xl bg-white shadow-modal overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-surface">
        <span className="text-[11px] font-bold text-text uppercase tracking-wider">
          Logo Mark Library
        </span>
        <button
          onClick={onClose}
          className="p-1 text-muted hover:text-text rounded transition-colors"
        >
          <X size={13} />
        </button>
      </div>

      {/* Color picker */}
      <div className="px-3 py-2 border-b border-border bg-white">
        <p className="text-[10px] font-semibold text-muted uppercase tracking-wider mb-1.5">
          Color
        </p>
        <div className="flex flex-wrap gap-1.5">
          {MARK_COLORS.map((c) => (
            <button
              key={c.value}
              onClick={() => handleColorChange(c.value)}
              title={c.label}
              className="w-5 h-5 rounded-full border-2 transition-all"
              style={{
                backgroundColor: c.value,
                borderColor: color === c.value ? '#2563EB' : 'transparent',
                boxShadow:
                  c.value === '#FFFFFF'
                    ? 'inset 0 0 0 1px #E4E4E7'
                    : undefined,
              }}
            />
          ))}
          {/* Custom hex input */}
          <label
            className="flex items-center gap-1 cursor-pointer"
            title="Custom color"
          >
            <div
              className="w-5 h-5 rounded-full border border-border overflow-hidden"
              style={{ backgroundColor: color }}
            >
              <input
                type="color"
                value={color}
                onChange={(e) => handleColorChange(e.target.value)}
                className="opacity-0 w-full h-full cursor-pointer"
              />
            </div>
          </label>
        </div>
      </div>

      {/* Category tabs */}
      <div className="flex gap-0 border-b border-border bg-surface overflow-x-auto">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 text-[11px] font-medium whitespace-nowrap border-b-2 transition-colors ${
            activeCategory === 'all'
              ? 'border-accent text-accent'
              : 'border-transparent text-muted hover:text-text'
          }`}
        >
          All ({LOGO_MARKS.length})
        </button>
        {MARK_CATEGORIES.map((cat) => {
          const count = LOGO_MARKS.filter((m) => m.category === cat.value).length;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1.5 text-[11px] font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeCategory === cat.value
                  ? 'border-accent text-accent'
                  : 'border-transparent text-muted hover:text-text'
              }`}
            >
              {cat.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Mark grid */}
      <div className="p-2 grid grid-cols-6 gap-1.5 max-h-52 overflow-y-auto">
        {visible.map((mark) => {
          const isSelected = selected === mark.id;
          const dataUrl = markToDataUrl(mark, color);
          return (
            <button
              key={mark.id}
              onClick={() => handleSelect(mark)}
              title={mark.name}
              className={`aspect-square rounded-lg flex items-center justify-center p-2 border-2 transition-all hover:scale-105 ${
                isSelected
                  ? 'border-accent bg-accent/5 shadow-sm'
                  : 'border-border bg-surface hover:border-zinc-400'
              }`}
            >
              <img
                src={dataUrl}
                alt={mark.name}
                className="w-full h-full object-contain"
              />
            </button>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="px-3 py-2 border-t border-border bg-surface">
        <p className="text-[10px] text-muted">
          {selected
            ? `✓ ${LOGO_MARKS.find((m) => m.id === selected)?.name} selected — visible in Logo + Wordmark modes`
            : 'Click a mark to use it as your logo placeholder'}
        </p>
      </div>
    </div>
  );
}
