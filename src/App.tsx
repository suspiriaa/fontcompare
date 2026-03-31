import React, { useEffect, useCallback } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { TopBar } from './components/TopBar';
import { SettingsPanel } from './components/SettingsPanel';
import { PreviewArea } from './components/PreviewArea';
import { ReviewBoard } from './components/ReviewBoard';
import { ExportModal } from './components/ExportModal';

// ─── Inner App (has context access) ──────────────────────────────────────────

function AppInner() {
  const { state, dispatch, toggleFavorite } = useApp();
  const { currentView, showExportModal } = state;

  // Global keyboard shortcuts
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't fire when typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key.toLowerCase()) {
        case 'd':
          dispatch({ type: 'TOGGLE_DARK_MODE' });
          break;
        case 'e':
          dispatch({ type: 'SET_EXPORT_MODAL', payload: !showExportModal });
          break;
        case 'r':
          dispatch({
            type: 'SET_VIEW',
            payload: currentView === 'comparison' ? 'review-board' : 'comparison',
          });
          break;
        case 'escape':
          if (showExportModal) {
            dispatch({ type: 'SET_EXPORT_MODAL', payload: false });
          }
          break;
      }
    },
    [dispatch, currentView, showExportModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="flex flex-col h-screen overflow-hidden font-ui bg-surface text-text">
      <TopBar />

      <main className="flex flex-1 overflow-hidden">
        {currentView === 'comparison' ? (
          <>
            <SettingsPanel />
            <PreviewArea />
          </>
        ) : (
          <ReviewBoard />
        )}
      </main>

      {showExportModal && <ExportModal />}

      {/* Keyboard shortcut hints */}
      <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 border-t border-border bg-white shrink-0">
        {[
          { key: 'D', label: 'Toggle dark mode' },
          { key: 'E', label: 'Export' },
          { key: 'R', label: 'Review board' },
        ].map(({ key, label }) => (
          <div key={key} className="flex items-center gap-1">
            <kbd className="text-[10px] font-mono bg-surface border border-border rounded px-1 py-0.5 text-muted">
              {key}
            </kbd>
            <span className="text-[11px] text-subtle">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
