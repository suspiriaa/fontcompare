/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#F8F8F7',
        panel: '#FFFFFF',
        border: '#E4E4E7',
        accent: '#2563EB',
        'accent-hover': '#1D4ED8',
        muted: '#71717A',
        subtle: '#A1A1AA',
        text: '#18181B',
        star: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        ui: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.08)',
        modal: '0 20px 60px -12px rgb(0 0 0 / 0.25)',
      },
    },
  },
  plugins: [],
};
