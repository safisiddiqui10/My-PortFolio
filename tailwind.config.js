/**
 * Tailwind configuration, carried over unchanged from the original
 * `tailwind.config` block that index.html passed to the Tailwind Play CDN.
 * Tailwind is now compiled at build time instead of in the browser.
 *
 * @type {import('tailwindcss').Config}
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Theme colors: values live in the CSS variables in src/styles/variables.css
        paper: 'rgb(var(--paper) / <alpha-value>)',
        'paper-2': 'rgb(var(--paper-2) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
        'ink-3': 'rgb(var(--ink-3) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ultrat: 'rgb(var(--ultrat) / <alpha-value>)',
        deep: 'rgb(var(--deep) / <alpha-value>)',
        deeper: 'rgb(var(--deeper) / <alpha-value>)',
        tmint: 'rgb(var(--tmint) / <alpha-value>)',
        tpink: 'rgb(var(--tpink) / <alpha-value>)',
        tsaffron: 'rgb(var(--tsaffron) / <alpha-value>)',
        line: 'rgb(var(--ink) / 0.14)',
        // Fixed colors: the same in both themes
        navy: '#14172e',
        cloud: '#f0f1f6',
        ultra: '#3b3bd6',
        mint: '#7fe3c4',
        saffron: '#f5b335',
        pink: '#ff8fb1',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
};
