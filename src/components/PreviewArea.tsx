import React, { useMemo, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { FONT_LIBRARY } from '../data/fonts';
import { GROUP_MAP } from '../data/similarityGroups';
import { FilterBar } from './FilterBar';
import { FontCard } from './FontCard';
import { FontConfig } from '../types';

interface DisplayItem {
  font: FontConfig;
  isGroupRep: boolean;
  hiddenSiblingCount: number;
  isGroupExpanded: boolean;
  isGroupSibling: boolean;
}

export function PreviewArea() {
  const { state, toggleFavorite, isFavorite } = useApp();
  const { filters, brandText, display, logoImage } = state;

  const [groupView, setGroupView] = useState(true);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => new Set());

  // Reset expanded groups when filters change to avoid stale expand state
  useEffect(() => {
    setExpandedGroups(new Set());
  }, [filters]);

  function toggleGroup(groupId: string) {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) next.delete(groupId);
      else next.add(groupId);
      return next;
    });
  }

  // Stage 1: apply search/category/source/favorites filters
  const filteredFonts = useMemo<FontConfig[]>(() => {
    return FONT_LIBRARY.filter((font) => {
      if (filters.search) {
        const q = filters.search.toLowerCase();
        const searchable = [font.name, font.category, font.group ?? '', ...(font.tags ?? [])].join(' ').toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      if (filters.categories.length > 0 && !filters.categories.includes(font.category)) return false;
      if (filters.sources.length > 0 && !filters.sources.includes(font.source)) return false;
      if (filters.favoritesOnly && !state.favorites.has(font.id)) return false;
      return true;
    });
  }, [filters, state.favorites]);

  // Stage 2: build display list — grouped or flat
  const displayItems = useMemo<DisplayItem[]>(() => {
    if (!groupView) {
      return filteredFonts.map((font) => ({
        font,
        isGroupRep: false,
        hiddenSiblingCount: 0,
        isGroupExpanded: false,
        isGroupSibling: false,
      }));
    }

    // Build buckets: groupId → fonts in that group (preserving FONT_LIBRARY order)
    const groupBuckets = new Map<string, FontConfig[]>();
    const ungrouped: FontConfig[] = [];

    for (const font of filteredFonts) {
      if (!font.group) {
        ungrouped.push(font);
      } else {
        const bucket = groupBuckets.get(font.group) ?? [];
        bucket.push(font);
        groupBuckets.set(font.group, bucket);
      }
    }

    const result: DisplayItem[] = [];

    for (const [groupId, fonts] of groupBuckets) {
      const group = GROUP_MAP[groupId];
      // Use declared representative if it passed the filter, otherwise first in bucket
      const rep = fonts.find((f) => f.id === group?.representativeId) ?? fonts[0];
      const siblings = fonts.filter((f) => f.id !== rep.id);
      const isExpanded = expandedGroups.has(groupId);

      result.push({
        font: rep,
        isGroupRep: true,
        hiddenSiblingCount: siblings.length,
        isGroupExpanded: isExpanded,
        isGroupSibling: false,
      });

      if (isExpanded) {
        for (const sibling of siblings) {
          result.push({
            font: sibling,
            isGroupRep: false,
            hiddenSiblingCount: 0,
            isGroupExpanded: false,
            isGroupSibling: true,
          });
        }
      }
    }

    for (const font of ungrouped) {
      result.push({
        font,
        isGroupRep: false,
        hiddenSiblingCount: 0,
        isGroupExpanded: false,
        isGroupSibling: false,
      });
    }

    return result;
  }, [filteredFonts, groupView, expandedGroups]);

  const totalVisible = displayItems.length;
  const totalFiltered = filteredFonts.length;

  return (
    <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
      <FilterBar
        groupView={groupView}
        onToggleGroupView={() => setGroupView((v) => !v)}
      />

      <div
        className="flex-1 overflow-y-auto p-5 space-y-4"
        style={{ backgroundColor: '#F8F8F7' }}
      >
        {/* Result count */}
        <div className="flex items-center justify-between">
          <p className="text-[11px] text-muted">
            {groupView ? (
              <>
                Showing{' '}
                <span className="font-semibold text-text">{totalVisible}</span>{' '}
                of{' '}
                <span className="font-semibold text-text">{totalFiltered}</span>{' '}
                fonts · grouped by similarity
              </>
            ) : (
              <>
                Showing{' '}
                <span className="font-semibold text-text">{totalVisible}</span>{' '}
                font{totalVisible !== 1 ? 's' : ''}
                {filters.favoritesOnly && ' · favorites only'}
              </>
            )}
          </p>
          {state.favorites.size > 0 && (
            <p className="text-[11px] text-star font-medium">
              ★ {state.favorites.size} favorited
            </p>
          )}
        </div>

        {/* Font cards */}
        {displayItems.length > 0 ? (
          displayItems.map(({ font, isGroupRep, hiddenSiblingCount, isGroupExpanded, isGroupSibling }, idx) => (
            <FontCard
              key={font.id}
              font={font}
              brandText={brandText}
              display={display}
              logoImage={logoImage}
              isFavorite={isFavorite(font.id)}
              index={idx}
              onToggleFavorite={() => toggleFavorite(font.id)}
              isGroupRep={isGroupRep}
              hiddenSiblingCount={hiddenSiblingCount}
              isGroupExpanded={isGroupExpanded}
              onToggleGroup={font.group ? () => toggleGroup(font.group!) : undefined}
              isGroupSibling={isGroupSibling}
              groupView={groupView}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center mb-4">
              <span className="text-2xl text-muted">Aa</span>
            </div>
            <p className="text-sm font-medium text-text mb-1">No fonts match your filters</p>
            <p className="text-xs text-muted">
              Try adjusting the search query or clearing filters
            </p>
          </div>
        )}

        <div className="h-8" />
      </div>
    </div>
  );
}
