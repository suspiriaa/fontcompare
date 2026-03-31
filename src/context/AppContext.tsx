import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import {
  AppState,
  BrandText,
  DisplayOptions,
  FontCategory,
  FontSource,
  PreviewMode,
  CaseMode,
  AppView,
} from '../types';

// ─── Default State ────────────────────────────────────────────────────────────

export const DEFAULT_STATE: AppState = {
  brandText: {
    brandName: 'Brand Name',
    tagline: 'A short, memorable tagline',
    subtitle: 'Supporting line that adds more context',
    cta: 'Get Started',
    body: 'This is your body copy. Use this space to see how your chosen typeface performs at reading size across longer passages of text.',
  },
  logoImage: null,
  display: {
    previewMode: 'brand-board',
    caseMode: 'title',
    darkMode: false,
    fontSize: 52,
    tracking: 0,
    lineHeight: 1.2,
  },
  filters: {
    search: '',
    categories: [],
    sources: [],
    favoritesOnly: false,
  },
  favorites: new Set(),
  notes: {},
  currentView: 'comparison',
  showExportModal: false,
};

// ─── Actions ──────────────────────────────────────────────────────────────────

type Action =
  | { type: 'SET_BRAND_TEXT'; payload: Partial<BrandText> }
  | { type: 'SET_LOGO'; payload: string | null }
  | { type: 'SET_DISPLAY'; payload: Partial<DisplayOptions> }
  | { type: 'SET_PREVIEW_MODE'; payload: PreviewMode }
  | { type: 'SET_CASE_MODE'; payload: CaseMode }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'SET_FONT_SIZE'; payload: number }
  | { type: 'SET_TRACKING'; payload: number }
  | { type: 'SET_LINE_HEIGHT'; payload: number }
  | { type: 'SET_SEARCH'; payload: string }
  | { type: 'TOGGLE_CATEGORY'; payload: FontCategory }
  | { type: 'TOGGLE_SOURCE'; payload: FontSource }
  | { type: 'TOGGLE_FAVORITES_ONLY' }
  | { type: 'CLEAR_FILTERS' }
  | { type: 'TOGGLE_FAVORITE'; payload: string }
  | { type: 'SET_NOTE'; payload: { fontId: string; note: string } }
  | { type: 'SET_VIEW'; payload: AppView }
  | { type: 'SET_EXPORT_MODAL'; payload: boolean }
  | { type: 'APPLY_PRESET'; payload: string[] }
  | { type: 'LOAD_SESSION'; payload: Partial<AppState> }
  | { type: 'RESET_STATE' };

// ─── Reducer ──────────────────────────────────────────────────────────────────

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_BRAND_TEXT':
      return { ...state, brandText: { ...state.brandText, ...action.payload } };

    case 'SET_LOGO':
      return { ...state, logoImage: action.payload };

    case 'SET_DISPLAY':
      return { ...state, display: { ...state.display, ...action.payload } };

    case 'SET_PREVIEW_MODE':
      return { ...state, display: { ...state.display, previewMode: action.payload } };

    case 'SET_CASE_MODE':
      return { ...state, display: { ...state.display, caseMode: action.payload } };

    case 'TOGGLE_DARK_MODE':
      return { ...state, display: { ...state.display, darkMode: !state.display.darkMode } };

    case 'SET_FONT_SIZE':
      return { ...state, display: { ...state.display, fontSize: action.payload } };

    case 'SET_TRACKING':
      return { ...state, display: { ...state.display, tracking: action.payload } };

    case 'SET_LINE_HEIGHT':
      return { ...state, display: { ...state.display, lineHeight: action.payload } };

    case 'SET_SEARCH':
      return { ...state, filters: { ...state.filters, search: action.payload } };

    case 'TOGGLE_CATEGORY': {
      const cats = state.filters.categories;
      const next = cats.includes(action.payload)
        ? cats.filter((c) => c !== action.payload)
        : [...cats, action.payload];
      return { ...state, filters: { ...state.filters, categories: next } };
    }

    case 'TOGGLE_SOURCE': {
      const srcs = state.filters.sources;
      const next = srcs.includes(action.payload)
        ? srcs.filter((s) => s !== action.payload)
        : [...srcs, action.payload];
      return { ...state, filters: { ...state.filters, sources: next } };
    }

    case 'TOGGLE_FAVORITES_ONLY':
      return {
        ...state,
        filters: { ...state.filters, favoritesOnly: !state.filters.favoritesOnly },
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: { search: '', categories: [], sources: [], favoritesOnly: false },
      };

    case 'TOGGLE_FAVORITE': {
      const next = new Set(state.favorites);
      if (next.has(action.payload)) {
        next.delete(action.payload);
      } else {
        next.add(action.payload);
      }
      return { ...state, favorites: next };
    }

    case 'SET_NOTE':
      return {
        ...state,
        notes: { ...state.notes, [action.payload.fontId]: action.payload.note },
      };

    case 'SET_VIEW':
      return { ...state, currentView: action.payload };

    case 'SET_EXPORT_MODAL':
      return { ...state, showExportModal: action.payload };

    case 'APPLY_PRESET': {
      // Set favorites to the preset font IDs
      return { ...state, favorites: new Set(action.payload) };
    }

    case 'LOAD_SESSION': {
      const payload = action.payload;
      return {
        ...state,
        ...payload,
        favorites: payload.favorites instanceof Set
          ? payload.favorites
          : new Set(Array.isArray(payload.favorites) ? payload.favorites : []),
      };
    }

    case 'RESET_STATE':
      return { ...DEFAULT_STATE, showExportModal: false };

    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  // Convenience helpers
  toggleFavorite: (fontId: string) => void;
  isFavorite: (fontId: string) => boolean;
}

const AppContext = createContext<AppContextValue | null>(null);

const STORAGE_KEY = 'fontcompare-session';

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE, (init) => {
    // Restore session from localStorage on first load
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...init,
          ...parsed,
          favorites: new Set(parsed.favorites ?? []),
          // Always reset modal state
          showExportModal: false,
        };
      }
    } catch {
      // ignore corrupt data
    }
    return init;
  });

  // Persist state to localStorage on every change
  useEffect(() => {
    const serialized = {
      ...state,
      favorites: [...state.favorites],
      showExportModal: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serialized));
  }, [state]);

  const toggleFavorite = useCallback(
    (fontId: string) => dispatch({ type: 'TOGGLE_FAVORITE', payload: fontId }),
    []
  );

  const isFavorite = useCallback(
    (fontId: string) => state.favorites.has(fontId),
    [state.favorites]
  );

  return (
    <AppContext.Provider value={{ state, dispatch, toggleFavorite, isFavorite }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
