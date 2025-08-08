import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: '#EDE7DE',
        clay: '#CDBBA7',
        espresso: '#2F261E',
        leaf: '#7CA68F',
        berry: '#A77EA0',
        gold: '#C4A768'
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: [animate]
} satisfies Config
