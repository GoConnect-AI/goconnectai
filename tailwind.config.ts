import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 84% 4.9%)",
        muted: "hsl(210 40% 96.1%)",
        primary: "hsl(222.2 47.4% 11.2%)",
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
export default config
