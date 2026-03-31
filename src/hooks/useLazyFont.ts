import { useRef, useEffect } from 'react';
import { FontConfig } from '../types';
import { loadFont } from '../utils/fontLoader';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport (with 300px pre-load margin),
 * the font is loaded and the observer disconnects.
 */
export function useLazyFont(font: FontConfig): React.RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // System fonts need no loading
    if (font.source === 'system') return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadFont(font);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  // font.id is stable; using it instead of the font object avoids re-registering
  // on every render caused by filtered-array re-creation
  }, [font.id]); // eslint-disable-line react-hooks/exhaustive-deps

  return ref;
}
