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
      zIndex: {
        toast: '50',
        header: '100',
        overlay: '150',
        modal: '200',
        mouse: '1000',
      },
      fontSize: {
        body: ['1.1rem', '1.7'],
      },
    },
  },
  plugins: [],
};
export default config;
