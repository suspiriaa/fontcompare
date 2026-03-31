import { Preset } from '../../types';

export const PRESETS: Record<string, Preset> = {
  'playful-modern': {
    name: 'Playful Modern',
    description: 'Friendly, energetic, and approachable for consumer products',
    fontIds: ['nunito', 'fredoka', 'poppins', 'outfit', 'plus-jakarta-sans', 'figtree', 'quicksand'],
  },
  'premium-approachable': {
    name: 'Premium Approachable',
    description: 'Sophisticated yet warm — premium brands with a human touch',
    fontIds: ['playfair-display', 'cormorant-garamond', 'dm-sans', 'raleway', 'urbanist', 'fraunces', 'lora'],
  },
  'digital-first': {
    name: 'Digital-First',
    description: 'Modern, clean, and digital-native for apps and platforms',
    fontIds: ['inter', 'space-grotesk', 'geist', 'urbanist', 'bricolage-grotesque', 'manrope', 'sora'],
  },
  'warm-human': {
    name: 'Warm & Human',
    description: 'Humanist typefaces that feel natural, warm, and trustworthy',
    fontIds: ['figtree', 'karla', 'nunito', 'lora', 'dm-sans', 'manrope', 'lato', 'alegreya'],
  },
  'bold-impact': {
    name: 'Bold Impact',
    description: 'Expressive, high-impact fonts for distinctive brand identities',
    fontIds: ['montserrat', 'unbounded', 'syne', 'bricolage-grotesque', 'fraunces', 'oswald', 'exo-2'],
  },
  'classic-editorial': {
    name: 'Classic Editorial',
    description: 'Timeless editorial serifs for established, trustworthy brands',
    fontIds: ['alegreya', 'vollkorn', 'source-serif-4', 'lora', 'zilla-slab', 'merriweather', 'crimson-pro'],
  },
  'clean-minimal': {
    name: 'Clean & Minimal',
    description: 'Stripped-down, highly refined type for minimal brands',
    fontIds: ['geist', 'urbanist', 'jost', 'mulish', 'outfit', 'questrial', 'josefin-sans'],
  },
  'beautiful-web-type': {
    name: 'Beautiful Web Type',
    description: 'Curated picks from the beautiful-web-type open-source project',
    fontIds: ['alegreya', 'vollkorn', 'source-serif-4', 'source-sans-3', 'fraunces', 'commissioner', 'instrument-sans', 'instrument-serif', 'zilla-slab'],
  },
  'ibm-plex-family': {
    name: 'IBM Plex Family',
    description: 'The complete IBM Plex super-family across all variants',
    fontIds: ['ibm-plex-sans', 'ibm-plex-sans-condensed', 'ibm-plex-serif', 'ibm-plex-mono'],
  },
  'monaspace': {
    name: 'Monaspace',
    description: 'All 5 Monaspace variants by GitHub Next — metrics-compatible',
    fontIds: ['monaspace-neon', 'monaspace-argon', 'monaspace-xenon', 'monaspace-radon', 'monaspace-krypton'],
  },
  'source-family': {
    name: 'Source Family',
    description: 'Adobe\'s Source super-family — Sans, Serif, and Code together',
    fontIds: ['source-sans-3', 'source-serif-4', 'source-code-pro'],
  },
  'system-fonts': {
    name: 'System Fonts',
    description: 'Zero-load native stacks — instant render, no external requests',
    fontIds: ['system-ui-stack', 'system-neo-grotesque', 'system-humanist', 'system-geometric-humanist', 'system-rounded', 'system-transitional', 'system-didone'],
  },
  'new-grotesques': {
    name: 'New Grotesques',
    description: 'The freshest grotesque picks — Fontsource and CDN exclusives',
    fontIds: ['onest', 'satoshi', 'general-sans', 'switzer', 'cabinet-grotesk', 'overused-grotesk'],
  },
  'condensed-impact': {
    name: 'Condensed Impact',
    description: 'Narrow, bold, space-efficient — headlines that command attention',
    fontIds: ['oswald', 'bebas-neue', 'barlow-condensed', 'anton', 'big-shoulders-display', 'teko'],
  },
  'editorial-serifs': {
    name: 'Editorial Serifs',
    description: 'Expressive text serifs for editorial and publishing contexts',
    fontIds: ['fraunces', 'gloock', 'newsreader', 'young-serif', 'literata', 'dm-serif-text', 'libre-caslon-text'],
  },
  'script-display': {
    name: 'Script & Display',
    description: 'Hand-lettered and script fonts for expressive branding',
    fontIds: ['great-vibes', 'lobster', 'sacramento', 'dancing-script', 'pacifico', 'yellowtail'],
  },
  'windows-classics': {
    name: 'Windows Classics',
    description: 'The fonts that defined a generation of web and screen typography',
    fontIds: ['georgia-win', 'verdana-win', 'tahoma-win', 'trebuchet-ms', 'georgia-pro', 'verdana-pro', 'gill-sans-nova', 'rockwell-nova'],
  },
  'microsoft-stack': {
    name: 'Microsoft Stack',
    description: 'ClearType collection + Cascadia — the complete Microsoft type story',
    fontIds: ['calibri', 'cambria', 'candara', 'consolas-win', 'constantia', 'corbel', 'cascadia-code', 'cascadia-mono', 'segoe-ui'],
  },
  'adobe-kit': {
    name: 'Adobe Fonts Kit',
    description: 'All fonts from the connected Adobe Typekit kit — premium exclusives',
    fontIds: ['komet', 'komet-sc', 'sofia-pro-variable', 'ruddy', 'monotalic', 'monotalic-narrow', 'monotalic-wide', 'westsac', 'riant-display', 'forager'],
  },
};
