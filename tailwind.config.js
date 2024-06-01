/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['heading'],
        'text': ['text'],
        'logo': ['logo'],
      },
      colors: {
        "dark": "var(--dark)",
        "backdrop": "var(--backdrop)",
        "light-backdrop": "var(--light-backdrop)",
        "light-muted": "var(--light-muted)",
        "dark-muted": "var(--dark-muted)"
      },
      maxWidth: {
        "8xl": "1400px"
      }
    },
  },
  plugins: [],
}