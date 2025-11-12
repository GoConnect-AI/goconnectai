import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0A2540",   // deep navy (text)
        muted: "#F3F6FC",
        primary: "#2F80FF",      // GoConnect blue
        accent: "#1D4ED8"        // darker blue accent
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}

export default config
