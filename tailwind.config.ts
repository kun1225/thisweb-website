import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import theme from './src/app/_styles/theme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
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
      colors: {
        // brand
        blue: 'rgba(var(--cr-blue))',
        'blue-1': 'rgba(var(--cr-blue-1))',
        'blue-2': 'rgba(var(--cr-blue-2))',
        'blue-3': 'rgba(var(--cr-blue-3))',
        'blue-4': 'rgba(var(--cr-blue-4))',
        'blue-5': 'rgba(var(--cr-blue-5))',
        // white
        white: 'rgba(var(--cr-white))',
        'white-pure': 'rgba(var(--cr-white-pure))',
        // black
        black: 'rgba(var(--cr-black))',
        'black-pure': 'rgba(var(--cr-black-pure))',
        'black-light': 'rgba(var(--cr-black-light))',
        // other
        header: 'var(--bg-header)',
      },
      zIndex: {
        toast: 'var(--z-toast)',
        header: 'var(--z-header)',
        'header-overlay': 'var(--z-header-overlay)',
        overlay: 'var(--z-overlay)',
        modal: 'var(--z-modal)',
      },
      margin: {
        'edge-xs': 'var(--s-edge-xs)',
        'edge-sm': 'var(--s-edge-sm)',
        edge: 'var(--s-edge)',
        'edge-lg': 'var(--s-edge-lg)',
        'edge-dynamic': 'var(--s-edge-dynamic)',
      },
      padding: {
        'edge-xs': 'var(--s-edge-xs)',
        'edge-sm': 'var(--s-edge-sm)',
        edge: 'var(--s-edge)',
        'edge-lg': 'var(--s-edge-lg)',
        'edge-dynamic': 'var(--s-edge-dynamic)',
      },
      spacing: {
        'edge-xs': 'var(--s-edge-xs)',
        'edge-sm': 'var(--s-edge-sm)',
        edge: 'var(--s-edge)',
        'edge-lg': 'var(--s-edge-lg)',
        'edge-dynamic': 'var(--s-edge-dynamic)',
        header: 'var(--header-height)',
      },
      fontFamily: {
        sans: ['var(--font-NotoSansTC), sans-serif'],
        mono: ['var(--font-FiraCode), monospace'],
      },
      fontSize: {
        body: ['1.05rem', '1.55'],
        'body-large': ['1.1rem', '1.6'],
        'body-small': ['1rem', '1.5'],
      },
      transitionDuration: {
        '400': '400ms',
      },
      scale: {
        102: '1.02',
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--cr-body)',
            '--tw-prose-headings': 'var(--cr-blue)',
            '--tw-prose-links': 'var(--cr-blue-1)',
            code: {
              '&::before': { display: 'none' },
              '&::after': { display: 'none' },
              background: 'var(--cr-inline-code-bg)',
              padding: '4px',
              borderRadius: '4px',
              fontWeight: 500,
            },
            a: {
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
            },
          },
        },
      },
    },
  },
  plugins: [
    plugin(function tailwindcss({ addComponents }) {
      addComponents({
        '.c': {
          'padding-left': 'var(--s-edge-dynamic)',
          'padding-right': 'var(--s-edge-dynamic)',
        },
      });
    }),
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements',
    }),
    require('@tailwindcss/typography'),
  ],
};
export default config;
