import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00334E',
        secondary: '#5588A3'
      },
      fontFamily: {
        "tw-sans": 'Noto Sans TC',
        "tw-serif": 'Noto Serif TC',
        "tw-code": "JetBrains Mono"
      }
    },
  },
  plugins: [],
}
export default config
