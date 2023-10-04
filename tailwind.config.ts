import type { Config } from 'tailwindcss';
import theme from './style/theme';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: theme.screens,
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      circle: 'circle',
      square: 'square',
      roman: 'upper-roman',
      'lower-alpha': 'lower-alpha',
    },
    extend: {
      colors: theme.colors,
      fontFamily: {
        'tw-sans':
          'Noto Sans TC, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial',
        'tw-serif': 'Noto Serif TC, ui-serif',
        'tw-code': 'JetBrains Mono, ui-monospace, Consolas,  monospace',
      },
    },
  },
  plugins: [],
};
export default config;
