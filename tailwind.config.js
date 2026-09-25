/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#0A0A0A',
        bone: '#F2EFE9',
        concrete: '#1C1C1C',
        static: '#8A8A8A',
        signal: '#D4FF3F',
        warning: '#FF3B30',
        'archive-gold': '#C9A227',
        line: 'rgba(242,239,233,0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Archivo"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 12vw, 10rem)',
      },
      letterSpacing: {
        tightest: '-0.04em',
        metadata: '0.05em',
      },
    },
  },
  plugins: [],
}