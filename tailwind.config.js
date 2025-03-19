/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      typography: () => ({
        pink: {
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
      }),
    },
  },
};
