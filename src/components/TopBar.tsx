import React from 'react';
import { Download, BookOpen, LayoutGrid, Save, FolderOpen, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { saveSessionToFile, loadSessionFromFile } from '../utils/export';

export function TopBar() {
  const { state, dispatch } = useApp();
  const { currentView, favorites, showExportModal } = state;

  async function handleLoadSession() {
    try {
      const data = await loadSessionFromFile();
      dispatch({ type: 'LOAD_SESSION', payload: data as never });
    } catch {
      // user cancelled or bad file — ignore
    }
  }

  function handleSaveSession() {
    saveSessionToFile({
      ...state,
      favorites: [...state.favorites],
      showExportModal: false,
    });
  }

  return (
    <header className="h-14 bg-white border-b border-border flex items-center justify-between px-5 shrink-0 z-30">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="fontcompare" className="h-8 w-auto max-w-[110px] object-contain object-left" />
        <span className="text-sm font-semibold text-text tracking-tight">Brand Typography Tester</span>
      </div>

      {/* View Toggle */}
      <nav className="flex items-center gap-1 bg-surface rounded-lg p-1 border border-border">
        <button
          onClick={() => dispatch({ type: 'SET_VIEW', payload: 'comparison' })}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            currentView === 'comparison'
              ? 'bg-white text-text shadow-sm border border-border'
              : 'text-muted hover:text-text'
          }`}
        >
          <LayoutGrid size={13} />
          Comparison
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_VIEW', payload: 'review-board' })}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
            currentView === 'review-board'
              ? 'bg-white text-text shadow-sm border border-border'
              : 'text-muted hover:text-text'
          }`}
        >
          <BookOpen size={13} />
          Review Board
          {favorites.size > 0 && (
            <span className="ml-0.5 bg-accent text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {favorites.size}
            </span>
          )}
        </button>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            if (confirm('Reset everything to defaults?')) {
              dispatch({ type: 'RESET_STATE' });
              localStorage.removeItem('fontcompare-session');
            }
          }}
          title="Reset to defaults"
          className="p-2 text-muted hover:text-danger hover:bg-red-50 rounded-md transition-colors"
        >
          <RotateCcw size={15} />
        </button>
        <button
          onClick={handleSaveSession}
          title="Save session"
          className="p-2 text-muted hover:text-text hover:bg-surface rounded-md transition-colors"
        >
          <Save size={15} />
        </button>
        <button
          onClick={handleLoadSession}
          title="Load session"
          className="p-2 text-muted hover:text-text hover:bg-surface rounded-md transition-colors"
        >
          <FolderOpen size={15} />
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_EXPORT_MODAL', payload: !showExportModal })}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-text text-white text-xs font-medium rounded-md hover:bg-zinc-700 transition-colors"
        >
          <Download size={13} />
          Export
        </button>
      </div>
    </header>
  );
}
