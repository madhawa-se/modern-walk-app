/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#2BD9AF',
        'secondary': '#FF5E84',
        'vividBlue': '#0E42FD'
      }
    },
  },
  plugins: [],
}

