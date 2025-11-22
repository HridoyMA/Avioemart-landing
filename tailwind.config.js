/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003876',
          dark: '#002855',
        },
        accent: {
          DEFAULT: '#F4C520',
          hover: '#FFD24D',
        },
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1A1A1A',
        },
      },
    },
  },
  plugins: [],
}

