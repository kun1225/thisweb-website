import theme from './src/app/_styles/theme';
import type { Config } from 'tailwindcss';

const config = {
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
        sans: ['var(--font-NotoSansTC)', 'sans-serif'],
        mono: ['var(--font-FiraCode)', 'monospace'],
      },
      fontSize: {
        body: ['1.05rem', '1.55'],
        'body-large': ['1.1rem', '1.6'],
        'body-small': ['1rem', '1.5'],
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
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
} satisfies Config;

export default config;
