import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
extend: {
  colors: {
    background: "#FFFFFF",
    foreground: "#0F172A",   // slate-900
    muted: "#F1F5F9",        // slate-100
    primary: "#00C2A8",      // GoConnect teal
    accent: "#2563EB"        // blue accent
  },
  borderRadius: {
    '2xl': '1rem'
  }
}

      }
    },
  },
  plugins: [],
}
export default config
