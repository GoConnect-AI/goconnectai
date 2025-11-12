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
        foreground: "#0A2540",   // deep navy like the logo text
        muted: "#F3F6FC",        // very light blue-gray
        primary: "#2F80FF",      // GoConnect blue
        accent: "#1D4ED8"        // darker blue accent if needed
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}

export default config
