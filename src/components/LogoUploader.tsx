import React, { useRef, useState } from 'react';
import { ImagePlus, X, Shapes } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { LogoLibrary } from './LogoLibrary';

export function LogoUploader() {
  const { state, dispatch } = useApp();
  const { logoImage } = state;
  const inputRef = useRef<HTMLInputElement>(null);
  const [showLibrary, setShowLibrary] = useState(false);

  function handleFile(file: File) {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      dispatch({ type: 'SET_LOGO', payload: e.target?.result as string });
      setShowLibrary(false);
    };
    reader.readAsDataURL(file);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  const labelText = logoImage?.startsWith('data:image/svg')
    ? 'Mark from library'
    : logoImage?.startsWith('data:')
    ? 'Custom upload'
    : 'Logo active';

  return (
    <div className="space-y-2">
      <label className="text-[11px] font-semibold text-muted uppercase tracking-wider">
        Logo Icon
      </label>

      {/* Current logo preview */}
      {logoImage ? (
        <div className="flex items-center gap-3 p-3 bg-surface border border-border rounded-lg">
          <img
            src={logoImage}
            alt="Current logo"
            className="h-10 w-10 object-contain rounded"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-text truncate">{labelText}</p>
            <p className="text-[11px] text-muted">Visible in logo modes</p>
          </div>
          <button
            onClick={() => dispatch({ type: 'SET_LOGO', payload: null })}
            title="Remove logo"
            className="p-1 text-muted hover:text-danger hover:bg-white rounded transition-colors"
          >
            <X size={13} />
          </button>
        </div>
      ) : null}

      {/* Action buttons */}
      <div className="flex gap-1.5">
        {/* Upload */}
        <button
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-dashed border-border rounded-lg bg-surface hover:border-accent hover:bg-blue-50/30 transition-colors cursor-pointer text-[11px] font-medium text-muted hover:text-accent"
        >
          <ImagePlus size={13} />
          Upload
        </button>

        {/* Library */}
        <button
          onClick={() => setShowLibrary(!showLibrary)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 border rounded-lg transition-colors cursor-pointer text-[11px] font-medium ${
            showLibrary
              ? 'border-accent bg-accent/5 text-accent'
              : 'border-border bg-surface text-muted hover:text-text hover:border-zinc-400'
          }`}
        >
          <Shapes size={13} />
          Library
          <span className="text-[10px] opacity-60">28</span>
        </button>
      </div>

      {/* Logo mark library */}
      {showLibrary && (
        <LogoLibrary onClose={() => setShowLibrary(false)} />
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/svg+xml,image/jpeg,image/webp"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = '';
        }}
      />
    </div>
  );
}
