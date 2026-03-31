import { FontConfig, Preset } from '../../types';
import { GROTESKS } from './grotesks';
import { SERIFS } from './serifs';
import { DISPLAY_FONTS } from './display';
import { MONO_FONTS } from './mono';
import { HANDWRITTEN } from './handwritten';
import { SYSTEM_FONTS } from './system';
import { WINDOWS_FONTS } from './windows';
import { TYPEKIT_FONTS } from './typekit';
import { PRESETS as FONT_PRESETS } from './presets';

export const FONT_LIBRARY: FontConfig[] = [
  ...GROTESKS,
  ...SERIFS,
  ...DISPLAY_FONTS,
  ...MONO_FONTS,
  ...HANDWRITTEN,
  ...SYSTEM_FONTS,
  ...WINDOWS_FONTS,
  ...TYPEKIT_FONTS,
];

export const PRESETS: Record<string, Preset> = FONT_PRESETS;
