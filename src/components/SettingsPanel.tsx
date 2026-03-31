import React from 'react';
import {
  Type, AlignLeft, Moon, Sun, LayoutTemplate,
  CaseUpper, CaseLower, AlignCenter,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LogoUploader } from './LogoUploader';
import { PreviewMode, CaseMode } from '../types';

// ── Reusable Slider ───────────────────────────────────────────────────────────

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  display?: string;
  onChange: (v: number) => void;
}

function Slider({ label, value, min, max, step = 1, display, onChange }: SliderProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label className="text-[11px] font-semibold text-muted uppercase tracking-wider">
          {label}
        </label>
        <span className="text-[11px] font-mono text-text bg-surface px-1.5 py-0.5 rounded border border-border">
          {display ?? value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 appearance-none bg-border rounded-full outline-none cursor-pointer
                   [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5
                   [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-text [&::-webkit-slider-thumb]:cursor-pointer
                   [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white
                   [&::-webkit-slider-thumb]:shadow-sm"
      />
    </div>
  );
}

// ── Section Wrapper ───────────────────────────────────────────────────────────

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-border pb-4 space-y-3">
      <h3 className="text-[10px] font-bold text-subtle uppercase tracking-widest pt-1">{title}</h3>
      {children}
    </div>
  );
}

// ── Text Input ────────────────────────────────────────────────────────────────

function TextInput({
  label,
  value,
  placeholder,
  multiline,
  onChange,
}: {
  label: string;
  value: string;
  placeholder?: string;
  multiline?: boolean;
  onChange: (v: string) => void;
}) {
  const base =
    'w-full text-xs bg-surface border border-border rounded-md px-2.5 py-2 text-text placeholder-subtle focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-colors resize-none';
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-semibold text-muted uppercase tracking-wider">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className={base}
        />
      ) : (
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={base}
        />
      )}
    </div>
  );
}

// ── Preview Mode Selector ─────────────────────────────────────────────────────

const MODES: { value: PreviewMode; label: string; icon: string }[] = [
  { value: 'brand-board', label: 'Brand Board', icon: '◻' },
  { value: 'wordmark-only', label: 'Wordmark', icon: 'A' },
  { value: 'logo-wordmark', label: 'Logo + Mark', icon: '⊕' },
  { value: 'website-header', label: 'Web Header', icon: '▬' },
  { value: 'mobile-topbar', label: 'Mobile Bar', icon: '▭' },
  { value: 'app-icon', label: 'App Icon', icon: '⬜' },
  { value: 'typography-list', label: 'Type Scale', icon: '≡' },
];

function PreviewModeSelector() {
  const { state, dispatch } = useApp();
  const current = state.display.previewMode;
  return (
    <div className="grid grid-cols-2 gap-1">
      {MODES.map((m) => (
        <button
          key={m.value}
          onClick={() => dispatch({ type: 'SET_PREVIEW_MODE', payload: m.value })}
          className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-medium text-left transition-colors ${
            current === m.value
              ? 'bg-text text-white'
              : 'bg-surface text-muted hover:text-text hover:bg-zinc-100 border border-border'
          }`}
        >
          <span className="text-[10px] font-mono w-3 text-center opacity-70">{m.icon}</span>
          {m.label}
        </button>
      ))}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export function SettingsPanel() {
  const { state, dispatch } = useApp();
  const { brandText, display } = state;

  const setField = (field: keyof typeof brandText) => (value: string) =>
    dispatch({ type: 'SET_BRAND_TEXT', payload: { [field]: value } });

  const caseModes: { value: CaseMode; label: string }[] = [
    { value: 'title', label: 'Aa' },
    { value: 'upper', label: 'AA' },
    { value: 'lower', label: 'aa' },
  ];

  return (
    <aside className="w-64 shrink-0 bg-white border-r border-border overflow-y-auto flex flex-col gap-4 p-4">

      {/* Brand Text */}
      <Section title="Brand Text">
        <TextInput
          label="Brand Name"
          value={brandText.brandName}
          placeholder="Brand Name"
          onChange={setField('brandName')}
        />
        <TextInput
          label="Tagline"
          value={brandText.tagline}
          placeholder="Your tagline here"
          onChange={setField('tagline')}
        />
        <TextInput
          label="Subtitle"
          value={brandText.subtitle}
          placeholder="Supporting line"
          onChange={setField('subtitle')}
        />
        <TextInput
          label="CTA Button"
          value={brandText.cta}
          placeholder="Get Started"
          onChange={setField('cta')}
        />
        <TextInput
          label="Body Text"
          value={brandText.body}
          placeholder="Short description..."
          multiline
          onChange={setField('body')}
        />
      </Section>

      {/* Preview Mode */}
      <Section title="Preview Mode">
        <PreviewModeSelector />
      </Section>

      {/* Display Controls */}
      <Section title="Display">
        {/* Dark / Light */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-muted uppercase tracking-wider">
            Background
          </span>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border transition-colors ${
              display.darkMode
                ? 'bg-zinc-900 text-white border-zinc-700'
                : 'bg-white text-text border-border hover:bg-surface'
            }`}
          >
            {display.darkMode ? <Moon size={11} /> : <Sun size={11} />}
            {display.darkMode ? 'Dark' : 'Light'}
          </button>
        </div>

        {/* Case Mode */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-semibold text-muted uppercase tracking-wider">
            Case
          </label>
          <div className="flex gap-1">
            {caseModes.map((c) => (
              <button
                key={c.value}
                onClick={() => dispatch({ type: 'SET_CASE_MODE', payload: c.value })}
                className={`flex-1 py-1.5 rounded-md text-xs font-bold border transition-colors ${
                  display.caseMode === c.value
                    ? 'bg-text text-white border-text'
                    : 'bg-surface text-muted border-border hover:border-text hover:text-text'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <Slider
          label="Size"
          value={display.fontSize}
          min={28}
          max={100}
          display={`${display.fontSize}px`}
          onChange={(v) => dispatch({ type: 'SET_FONT_SIZE', payload: v })}
        />

        {/* Tracking */}
        <Slider
          label="Tracking"
          value={display.tracking}
          min={-20}
          max={300}
          display={
            display.tracking === 0
              ? '0'
              : display.tracking > 0
              ? `+${display.tracking}`
              : `${display.tracking}`
          }
          onChange={(v) => dispatch({ type: 'SET_TRACKING', payload: v })}
        />

        {/* Line Height */}
        <Slider
          label="Line Height"
          value={display.lineHeight}
          min={1.0}
          max={2.0}
          step={0.05}
          display={display.lineHeight.toFixed(2)}
          onChange={(v) => dispatch({ type: 'SET_LINE_HEIGHT', payload: v })}
        />
      </Section>

      {/* Logo Upload */}
      <Section title="Logo">
        <LogoUploader />
      </Section>

      {/* Spacer */}
      <div className="pb-2" />
    </aside>
  );
}
