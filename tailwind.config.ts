import type { Config } from 'tailwindcss'
import theme from './style/theme'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: theme.screens,
    extend: {
      colors: {
        primary: '#00334E',
        secondary: '#477086'
      },
      fontFamily: {
        "tw-sans": 'Noto Sans TC, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial',
        "tw-serif": 'Noto Serif TC, ui-serif',
        "tw-code": "JetBrains Mono, ui-monospace, Consolas,  monospace"
      }
    },
  },
  plugins: [],
}
export default config
