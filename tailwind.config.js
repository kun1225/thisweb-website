/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-body)',
            '--tw-prose-headings': 'var(--color-blue)',
            '--tw-prose-links': 'var(--color-blue-1)',
            code: {
              color: 'var(--color-blue-2)',
              '&::before': { display: 'none' },
              '&::after': { display: 'none' },
              background: 'var(--color-inline-code-bg)',
              padding: '2px 4px',
              borderRadius: '4px',
              fontWeight: 500,
            },
            a: {
              textUnderlineOffset: '2px',
              textDecorationThickness: '1.5px',
            },
          },
        },
      }),
    },
  },
};
